import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Gamepad2, 
  Flame, 
  Zap, 
  Award, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Sparkles,
  Brain,
  ShieldAlert,
  Trophy
} from 'lucide-react';
import { Subject, MCQItem, UserProfile } from '../types';
import { FUNNY_QUIZ_MESSAGES } from '../data/curriculumData';

interface QuizGameViewProps {
  subjects: Subject[];
  user: UserProfile;
  initialSubjectId?: string;
  initialDifficulty?: 'easy' | 'medium' | 'hard' | 'extreme';
  onSubmitQuiz: (payload: {
    subjectId: string;
    subjectTitle: string;
    chapterTitle?: string;
    difficulty: string;
    score: number;
    totalQuestions: number;
    xpEarned: number;
    accuracy: number;
  }) => Promise<void>;
  onNavigateTab: (tab: string) => void;
}

export const QuizGameView: React.FC<QuizGameViewProps> = ({
  subjects,
  user,
  initialSubjectId,
  initialDifficulty = 'easy',
  onSubmitQuiz,
  onNavigateTab
}) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(initialSubjectId || 'all');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | 'extreme'>(initialDifficulty);
  const [gameState, setGameState] = useState<'lobby' | 'playing' | 'result'>('lobby');

  // Active quiz state
  const [quizQuestions, setQuizQuestions] = useState<MCQItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestSessionStreak, setBestSessionStreak] = useState(0);
  const [earnedXP, setEarnedXP] = useState(0);
  const [funnyFeedback, setFunnyFeedback] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<{ questionId: string; selected: number; correct: number; isCorrect: boolean }[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  // Difficulty XP multipliers
  const XP_MAP = {
    easy: 15,
    medium: 25,
    hard: 40,
    extreme: 60
  };

  // Prepare questions for quiz
  const startQuiz = () => {
    let pool: MCQItem[] = [];

    if (selectedSubjectId === 'all') {
      subjects.forEach(s => {
        s.chapters.forEach(ch => {
          pool.push(...ch.mcqs);
        });
      });
    } else {
      const subj = subjects.find(s => s.id === selectedSubjectId);
      if (subj) {
        subj.chapters.forEach(ch => {
          pool.push(...ch.mcqs);
        });
      }
    }

    // Filter by difficulty or fallback to all questions
    let filtered = pool.filter(q => q.difficulty === difficulty);
    if (filtered.length < 5) {
      filtered = pool; // fallback if specific difficulty has few questions
    }

    // Shuffle and pick 5-8 questions
    const shuffled = [...filtered].sort(() => 0.5 - Math.random()).slice(0, 6);

    if (shuffled.length === 0) {
      alert('Not enough questions found for this combination. Please choose another subject.');
      return;
    }

    setQuizQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setCurrentStreak(0);
    setBestSessionStreak(0);
    setEarnedXP(0);
    setFunnyFeedback(null);
    setUserAnswers([]);
    setGameState('playing');
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;

    const currentQ = quizQuestions[currentIndex];
    const isCorrect = selectedOption === currentQ.correctIndex;

    setIsAnswerSubmitted(true);

    if (isCorrect) {
      const qXp = XP_MAP[difficulty];
      const newScore = score + 1;
      const newStreak = currentStreak + 1;
      setScore(newScore);
      setCurrentStreak(newStreak);
      if (newStreak > bestSessionStreak) {
        setBestSessionStreak(newStreak);
      }
      setEarnedXP(prev => prev + qXp);

      // Funny message
      const randomMsg = FUNNY_QUIZ_MESSAGES.correct[Math.floor(Math.random() * FUNNY_QUIZ_MESSAGES.correct.length)];
      setFunnyFeedback(randomMsg);
    } else {
      setCurrentStreak(0);
      const randomMsg = FUNNY_QUIZ_MESSAGES.wrong[Math.floor(Math.random() * FUNNY_QUIZ_MESSAGES.wrong.length)];
      setFunnyFeedback(randomMsg);
    }

    setUserAnswers(prev => [
      ...prev,
      {
        questionId: currentQ.id,
        selected: selectedOption,
        correct: currentQ.correctIndex,
        isCorrect
      }
    ]);
  };

  const handleNextQuestion = async () => {
    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
      setFunnyFeedback(null);
    } else {
      // Finished quiz!
      finishQuiz();
    }
  };

  const finishQuiz = async () => {
    setGameState('result');

    // Confetti celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // benign
    }

    const total = quizQuestions.length;
    const finalScore = score;
    const accuracy = Math.round((finalScore / total) * 100);
    const subjectObj = subjects.find(s => s.id === selectedSubjectId);

    setIsSaving(true);
    try {
      await onSubmitQuiz({
        subjectId: selectedSubjectId === 'all' ? 'mixed' : selectedSubjectId,
        subjectTitle: subjectObj ? subjectObj.title : 'All 9 Subjects Mega Quiz',
        chapterTitle: `${difficulty.toUpperCase()} Mode Practice`,
        difficulty,
        score: finalScore,
        totalQuestions: total,
        xpEarned: earnedXP,
        accuracy
      });
    } catch (err) {
      console.error('Failed to submit quiz result to backend:', err);
    } finally {
      setIsSaving(false);
    }
  };

  // ---------------- LOBBY SCREEN ----------------
  if (gameState === 'lobby') {
    return (
      <div className="max-w-4xl mx-auto space-y-6 pb-12 animate-in fade-in duration-300">
        <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 bg-emerald-800/80 px-3.5 py-1 rounded-full text-xs font-bold text-amber-300 border border-emerald-500/30">
              <Gamepad2 className="w-4 h-4" />
              <span>Sindh Board Class 9 Quiz Arena 🎮</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              Class 9 Funny Quiz Game
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
              Earn XP, build study streaks, unlock badges, and test your exam sharpness across all four difficulty levels!
            </p>
          </div>
        </div>

        {/* Configuration Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          {/* Step 1: Select Difficulty (Exactly 4 Levels) */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              1. Choose Quiz Difficulty Level (Exactly 4 Levels)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'easy', label: '🟢 EASY', xp: '+15 XP', desc: 'Basic definitions & fundamental questions', color: 'border-emerald-300 bg-emerald-50/50 text-emerald-950' },
                { id: 'medium', label: '🟡 MEDIUM', xp: '+25 XP', desc: 'Formulas & conceptual applications', color: 'border-amber-300 bg-amber-50/50 text-amber-950' },
                { id: 'hard', label: '🔴 HARD', xp: '+40 XP', desc: 'Sindh Board tricky questions & problems', color: 'border-rose-300 bg-rose-50/50 text-rose-950' },
                { id: 'extreme', label: '⚡ EXTREME', xp: '+60 XP', desc: 'High-pressure topper challenge!', color: 'border-purple-300 bg-purple-50/50 text-purple-950' },
              ].map(lvl => {
                const isSelected = difficulty === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    id={`quiz-difficulty-btn-${lvl.id}`}
                    onClick={() => setDifficulty(lvl.id as any)}
                    className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50 ring-2 ring-emerald-500/20 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                    }`}
                  >
                    <div className="font-black text-sm mb-1">{lvl.label}</div>
                    <div className="text-2xs font-bold text-emerald-700 bg-emerald-100/70 inline-block px-1.5 py-0.5 rounded-md mb-1.5">
                      {lvl.xp} per Q
                    </div>
                    <p className="text-3xs text-slate-500 leading-tight">
                      {lvl.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Choose Subject */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              2. Choose Subject
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              <button
                id="quiz-subj-all"
                onClick={() => setSelectedSubjectId('all')}
                className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
                  selectedSubjectId === 'all'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                🔥 All Subjects
              </button>
              {subjects.map(s => {
                const isSelected = selectedSubjectId === s.id;
                return (
                  <button
                    key={s.id}
                    id={`quiz-subj-${s.id}`}
                    onClick={() => setSelectedSubjectId(s.id)}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center truncate ${
                      isSelected
                        ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {s.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Extreme Mode Warning if chosen */}
          {difficulty === 'extreme' && (
            <div className="bg-purple-950 text-purple-200 p-4 rounded-xl border border-purple-800 text-xs flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <strong className="text-amber-400">⚡ EXTREME MODE WARNING:</strong> {FUNNY_QUIZ_MESSAGES.extremeModeWarning}
              </div>
            </div>
          )}

          {/* Start Quiz Action */}
          <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Player: <strong className="text-slate-900">{user.name}</strong> • Current Streak: <strong className="text-amber-600">{user.streak} days</strong>
            </div>

            <button
              id="quiz-start-game-btn"
              onClick={startQuiz}
              className="px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm rounded-xl shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Quiz Challenge</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- ACTIVE GAME SCREEN ----------------
  if (gameState === 'playing' && quizQuestions.length > 0) {
    const currentQ = quizQuestions[currentIndex];
    const isLast = currentIndex + 1 === quizQuestions.length;

    return (
      <div className="max-w-3xl mx-auto space-y-5 pb-12 animate-in fade-in duration-200">
        {/* Top Game HUD */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">
              Question {currentIndex + 1} of {quizQuestions.length}
            </span>
            <span className="text-3xs uppercase font-bold px-2 py-0.5 rounded-md bg-purple-100 text-purple-800">
              {difficulty.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 font-bold text-amber-500">
              <Flame className="w-4 h-4 fill-amber-500" />
              <span>{currentStreak} Streak</span>
            </div>

            <div className="flex items-center gap-1 font-bold text-emerald-600">
              <Zap className="w-4 h-4" />
              <span>+{earnedXP} XP</span>
            </div>
          </div>
        </div>

        {/* Question Progress Bar */}
        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
            style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>

        {/* Question Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md space-y-6">
          <div className="space-y-2">
            {currentQ.boardTag && (
              <span className="text-3xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md inline-block">
                {currentQ.boardTag}
              </span>
            )}
            <h2 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
              {currentQ.question}
            </h2>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-2.5">
            {currentQ.options.map((opt, optIdx) => {
              let btnStyle = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100';

              if (selectedOption === optIdx && !isAnswerSubmitted) {
                btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500/20';
              }

              if (isAnswerSubmitted) {
                if (optIdx === currentQ.correctIndex) {
                  btnStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                } else if (selectedOption === optIdx) {
                  btnStyle = 'bg-red-100 border-red-500 text-red-950 font-bold';
                } else {
                  btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={optIdx}
                  id={`quiz-opt-btn-${optIdx}`}
                  disabled={isAnswerSubmitted}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`p-4 rounded-xl border text-xs sm:text-sm text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-white/80 border border-slate-200 font-bold text-xs flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {isAnswerSubmitted && optIdx === currentQ.correctIndex && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswerSubmitted && selectedOption === optIdx && optIdx !== currentQ.correctIndex && (
                    <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Funny Live Reaction Box */}
          {funnyFeedback && (
            <div className={`p-4 rounded-xl text-xs space-y-1 animate-in zoom-in-95 ${
              selectedOption === currentQ.correctIndex
                ? 'bg-emerald-50 text-emerald-950 border border-emerald-200'
                : 'bg-amber-50 text-amber-950 border border-amber-200'
            }`}>
              <div className="font-extrabold text-sm">{funnyFeedback}</div>
              <p className="text-2xs opacity-90">
                <strong>Concept:</strong> {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
            {!isAnswerSubmitted ? (
              <button
                id="quiz-submit-answer-btn"
                disabled={selectedOption === null}
                onClick={handleSubmitAnswer}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
              >
                Submit Answer
              </button>
            ) : (
              <button
                id="quiz-next-question-btn"
                onClick={handleNextQuestion}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{isLast ? 'See Final Score' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ---------------- RESULT SCREEN ----------------
  const total = quizQuestions.length;
  const accuracy = total > 0 ? Math.round((score / total) * 100) : 0;

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12 animate-in zoom-in-95 duration-300">
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl text-center space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-amber-400/30">
          <Trophy className="w-8 h-8" />
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            {accuracy >= 80 ? '🔥 Mashallah, Karachi Board Topper Energy!' : accuracy >= 50 ? '👏 Good Job! Solid Practice!' : '💪 Keep Going! Review and Retake!'}
          </h2>
          <p className="text-xs text-slate-500">
            {accuracy >= 80 ? '“Bro, that answer was cooking! BSEK papers will be child’s play!”' : '“Oops! Some questions were tricky, but revision makes perfect.”'}
          </p>
        </div>

        {/* Score & XP Cards */}
        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5">
            <span className="text-2xs font-bold text-slate-400 block">SCORE</span>
            <span className="text-xl sm:text-2xl font-black text-slate-900">
              {score} / {total}
            </span>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3.5">
            <span className="text-2xs font-bold text-emerald-700 block">ACCURACY</span>
            <span className="text-xl sm:text-2xl font-black text-emerald-600">
              {accuracy}%
            </span>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5">
            <span className="text-2xs font-bold text-amber-700 block">XP EARNED</span>
            <span className="text-xl sm:text-2xl font-black text-amber-600">
              +{earnedXP}
            </span>
          </div>
        </div>

        {isSaving && (
          <div className="text-2xs text-slate-400 animate-pulse">
            Saving persistent progress to 9Study Hub server...
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-100">
          <button
            id="quiz-play-again-btn"
            onClick={startQuiz}
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Play Again</span>
          </button>

          <button
            onClick={() => setGameState('lobby')}
            className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition-colors cursor-pointer"
          >
            Change Difficulty
          </button>

          <button
            onClick={() => onNavigateTab('progress')}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
          >
            View My Progress
          </button>
        </div>
      </div>

      {/* Answer Review */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
        <h3 className="font-bold text-slate-900 text-sm">
          Review Quiz Questions & Solutions
        </h3>

        <div className="space-y-3">
          {quizQuestions.map((q, idx) => {
            const ans = userAnswers.find(a => a.questionId === q.id);
            const isCorrect = ans?.isCorrect;

            return (
              <div key={q.id} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5 text-xs">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-bold text-slate-900">
                    {idx + 1}. {q.question}
                  </span>
                  {isCorrect ? (
                    <span className="text-3xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md shrink-0">
                      ✓ Correct
                    </span>
                  ) : (
                    <span className="text-3xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded-md shrink-0">
                      ✗ Incorrect
                    </span>
                  )}
                </div>

                <div className="text-2xs text-slate-600">
                  Correct Answer: <strong className="text-emerald-700">{q.options[q.correctIndex]}</strong>
                </div>
                <div className="text-3xs text-slate-500">
                  {q.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
