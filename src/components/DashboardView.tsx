import React from 'react';
import { 
  Flame, 
  Trophy, 
  BookOpen, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Gamepad2, 
  Brain, 
  Sparkles,
  Award,
  TrendingUp,
  Zap
} from 'lucide-react';
import { UserProfile, Subject } from '../types';
import { SINDH_SUBJECTS } from '../data/curriculumData';

interface DashboardViewProps {
  user: UserProfile;
  subjects: Subject[];
  onSelectSubject: (subjectId: string, chapterId?: string) => void;
  onStartQuiz: (subjectId?: string) => void;
  onNavigateTab: (tab: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  user,
  subjects,
  onSelectSubject,
  onStartQuiz,
  onNavigateTab
}) => {
  // Total chapters across subjects
  const totalChaptersCount = subjects.reduce((acc, s) => acc + s.chapters.length, 0);
  const completedChaptersCount = user.completedChapters?.length || 0;
  const overallProgressPercent = totalChaptersCount > 0 
    ? Math.min(100, Math.round((completedChaptersCount / totalChaptersCount) * 100))
    : 0;

  // Next level progress: each level requires 250 XP
  const xpCurrentLevel = user.xp % 250;
  const xpForNextLevel = 250;
  const levelProgressPercent = Math.min(100, Math.round((xpCurrentLevel / xpForNextLevel) * 100));

  // Determine recommended next topic (first incomplete chapter in first subject)
  let recommendedSubject = subjects[0];
  let recommendedChapter = subjects[0]?.chapters[0];
  for (const s of subjects) {
    const uncompleted = s.chapters.find(c => !user.completedChapters?.includes(c.id));
    if (uncompleted) {
      recommendedSubject = s;
      recommendedChapter = uncompleted;
      break;
    }
  }

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-300">
      {/* Welcome Banner */}
      <section className="bg-gradient-to-r from-emerald-700 via-teal-700 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-emerald-800/80 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold text-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Target: {user.board} Position Holder 🎯</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Welcome to 9Study Hub 👋, <span className="text-amber-300">{user.name.split(' ')[0]}</span>!
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
              Pakistani Class 9 exam prep made easy and fun! "Mushkil topic ko easy bana do." Study notes, practice MCQs and level up your brain.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              id="dashboard-continue-learning-btn"
              onClick={() => onSelectSubject(recommendedSubject.id, recommendedChapter?.id)}
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-5 py-3 rounded-2xl shadow-lg shadow-amber-400/20 transition-all hover:scale-105 active:scale-95 cursor-pointer text-sm"
            >
              <span>Continue Learning</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="dashboard-play-quiz-btn"
              onClick={() => onStartQuiz()}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-2xl border border-emerald-400/30 transition-all hover:scale-105 cursor-pointer text-sm"
            >
              <Gamepad2 className="w-4 h-4 text-amber-300" />
              <span>Play Quiz Game</span>
            </button>
          </div>
        </div>

        {/* Level & XP Quick Bar */}
        <div className="mt-6 pt-5 border-t border-emerald-600/40 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-emerald-200 text-2xs block">CURRENT LEVEL</span>
            <span className="text-lg font-black text-white flex items-center gap-1">
              <Award className="w-4 h-4 text-amber-300" /> Level {user.level}
            </span>
          </div>

          <div>
            <span className="text-emerald-200 text-2xs block">TOTAL XP</span>
            <span className="text-lg font-black text-amber-300 flex items-center gap-1">
              <Zap className="w-4 h-4" /> {user.xp} XP
            </span>
          </div>

          <div>
            <span className="text-emerald-200 text-2xs block">CURRENT STREAK</span>
            <span className="text-lg font-black text-amber-400 flex items-center gap-1">
              <Flame className="w-4 h-4 fill-amber-400" /> {user.streak} Days
            </span>
          </div>

          <div>
            <span className="text-emerald-200 text-2xs block">SYLLABUS PROGRESS</span>
            <span className="text-lg font-black text-white flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-emerald-300" /> {overallProgressPercent}%
            </span>
          </div>
        </div>

        {/* Level XP Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-2xs text-emerald-200 mb-1">
            <span>Progress to Level {user.level + 1}</span>
            <span>{xpCurrentLevel} / {xpForNextLevel} XP</span>
          </div>
          <div className="w-full bg-emerald-950/60 rounded-full h-2.5 overflow-hidden p-0.5 border border-emerald-600/30">
            <div 
              className="bg-gradient-to-r from-amber-400 to-amber-300 h-full rounded-full transition-all duration-500" 
              style={{ width: `${levelProgressPercent}%` }}
            />
          </div>
        </div>
      </section>

      {/* Recommended Topic / Next Step Card */}
      {recommendedChapter && (
        <section className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg shrink-0">
              Ch {recommendedChapter.number}
            </div>
            <div>
              <div className="text-2xs font-bold text-emerald-600 uppercase tracking-wider">
                RECOMMENDED NEXT TOPIC • {recommendedSubject.title}
              </div>
              <h2 className="text-base font-bold text-slate-900">
                {recommendedChapter.title}
              </h2>
              <p className="text-xs text-slate-500 line-clamp-1">
                {recommendedChapter.description}
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectSubject(recommendedSubject.id, recommendedChapter.id)}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer shrink-0"
          >
            <span>Study Notes & MCQs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </section>
      )}

      {/* All 9 Subjects Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              All 9 Class Subjects (Sindh Board Curriculum)
            </h2>
            <p className="text-xs text-slate-500">
              Click any subject to access chapter notes, formulas, MCQs, short/long questions, and past papers.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('subjects')}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subj) => {
            const completedCount = subj.chapters.filter(c => user.completedChapters?.includes(c.id)).length;
            const progress = subj.chapters.length > 0 ? Math.round((completedCount / subj.chapters.length) * 100) : 0;

            return (
              <div
                key={subj.id}
                id={`dashboard-subj-card-${subj.id}`}
                onClick={() => onSelectSubject(subj.id)}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`px-2.5 py-1 rounded-lg text-xs font-bold ${subj.bgColor}`}>
                      {subj.title}
                    </div>
                    <span className="font-urdu text-sm font-semibold text-slate-400">
                      {subj.urduTitle}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors text-base mb-1">
                    {subj.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                    {subj.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-2xs text-slate-500">
                    <span>{completedCount} of {subj.chapters.length} chapters completed</span>
                    <span className="font-bold text-slate-700">{progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Funny Pakistani Study Tip & Recent Quizzes */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Funny Motivation Card */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-amber-800 text-xs font-bold mb-2">
              <Brain className="w-4 h-4 text-amber-600" />
              <span>9Study Brain Hack 💡</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">
              "Bhai, ratta lagane se position nahi aati!"
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sindh Board examiners love students who write neat definitions, SI units, and step-by-step formulas. Use our <strong>"Mushkil topic ko easy bana do"</strong> explanations to understand the concept first, then test yourself in ⚡ Extreme Quiz mode!
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-center justify-between">
            <span className="text-2xs text-amber-700 font-semibold">Tip: Solve 10 MCQs daily</span>
            <button
              onClick={() => onStartQuiz()}
              className="text-xs font-bold text-amber-800 hover:text-amber-900 flex items-center gap-1 cursor-pointer"
            >
              <span>Practice Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Recent Quizzes / Activity */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-500" />
              <span>Recent Quiz Activity</span>
            </h3>
            <button
              onClick={() => onNavigateTab('progress')}
              className="text-2xs font-semibold text-emerald-600 hover:underline"
            >
              Full History
            </button>
          </div>

          {user.quizHistory && user.quizHistory.length > 0 ? (
            <div className="space-y-2">
              {user.quizHistory.slice(0, 3).map((q, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                  <div>
                    <div className="font-bold text-slate-800">{q.subjectTitle}</div>
                    <div className="text-2xs text-slate-500">{q.chapterTitle || 'Quiz'} • Difficulty: {q.difficulty.toUpperCase()}</div>
                  </div>
                  <div className="text-right">
                    <span className={`font-bold ${q.accuracy >= 80 ? 'text-emerald-600' : 'text-amber-600'}`}>
                      {q.score}/{q.totalQuestions} ({q.accuracy}%)
                    </span>
                    <div className="text-3xs text-slate-400">+{q.xpEarned} XP</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-xs text-slate-400">
              <Gamepad2 className="w-8 h-8 mx-auto mb-1 text-slate-300" />
              No quizzes completed yet. Take your first quiz to earn points!
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
