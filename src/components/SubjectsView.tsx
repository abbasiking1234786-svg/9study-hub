import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Circle, 
  HelpCircle, 
  Lightbulb, 
  FileText, 
  Sparkles, 
  Gamepad2, 
  Check, 
  X, 
  ChevronRight, 
  ChevronLeft,
  Award, 
  ChevronDown, 
  Bookmark, 
  Calendar,
  Layers,
  Search,
  Eye,
  EyeOff,
  Flame,
  Zap
} from 'lucide-react';
import { Subject, Chapter, UserProfile, BoardType } from '../types';

interface SubjectsViewProps {
  subjects: Subject[];
  user: UserProfile;
  currentBoard: BoardType;
  selectedSubjectId: string;
  selectedChapterId?: string;
  onSelectSubject: (subjectId: string, chapterId?: string) => void;
  onToggleChapter: (chapterId: string) => void;
  onStartQuiz: (subjectId: string, difficulty?: string) => void;
}

export const SubjectsView: React.FC<SubjectsViewProps> = ({
  subjects,
  user,
  currentBoard,
  selectedSubjectId,
  selectedChapterId,
  onSelectSubject,
  onToggleChapter,
  onStartQuiz
}) => {
  const currentSubject = subjects.find(s => s.id === selectedSubjectId) || subjects[0];
  const currentChapterIndex = currentSubject.chapters.findIndex(c => c.id === selectedChapterId);
  const activeChapter = currentChapterIndex >= 0 
    ? currentSubject.chapters[currentChapterIndex] 
    : currentSubject.chapters[0];

  // Chapter sub-tabs: notes, mcqs, short, long, main, pastpapers, formulas, revision
  const [chapterTab, setChapterTab] = useState<'notes' | 'mcqs' | 'short' | 'long' | 'main' | 'pastpapers' | 'formulas' | 'revision'>('notes');
  
  // MCQ state for interactive practice inside chapter view
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  // Asan Mode toggle: highlights easy explanations, Urdu translations, and analogies
  const [easyMode, setEasyMode] = useState<boolean>(true);

  // Search/Filter query within active chapter
  const [filterQuery, setFilterQuery] = useState<string>('');

  // Toggle individual question answers
  const [openAnswers, setOpenAnswers] = useState<Record<string, boolean>>({});
  const [allAnswersOpen, setAllAnswersOpen] = useState<boolean>(true);

  const handleSelectOption = (mcqId: string, optionIdx: number) => {
    setSelectedAnswers(prev => ({ ...prev, [mcqId]: optionIdx }));
    setRevealedAnswers(prev => ({ ...prev, [mcqId]: true }));
  };

  const toggleAnswer = (id: string) => {
    setOpenAnswers(prev => ({
      ...prev,
      [id]: prev[id] !== undefined ? !prev[id] : !allAnswersOpen
    }));
  };

  const toggleAllAnswers = () => {
    const newState = !allAnswersOpen;
    setAllAnswersOpen(newState);
    const updated: Record<string, boolean> = {};
    activeChapter.shortQuestions.forEach(q => { updated[q.id] = newState; });
    activeChapter.longQuestions.forEach(q => { updated[q.id] = newState; });
    activeChapter.mainQuestions.forEach(q => { updated[q.id] = newState; });
    activeChapter.pastPaperQuestions.forEach(q => { updated[q.id] = newState; });
    setOpenAnswers(updated);
  };

  const isChapterCompleted = user.completedChapters?.includes(activeChapter.id);

  // Next and Previous chapters
  const prevChapter = currentChapterIndex > 0 ? currentSubject.chapters[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < currentSubject.chapters.length - 1 ? currentSubject.chapters[currentChapterIndex + 1] : null;

  // Filtered lists
  const query = filterQuery.toLowerCase().trim();
  const filteredNotes = activeChapter.notes.filter(n => 
    !query || n.heading.toLowerCase().includes(query) || n.content.toLowerCase().includes(query) || n.simpleExplanation.toLowerCase().includes(query)
  );
  const filteredMcqs = activeChapter.mcqs.filter(m => 
    !query || m.question.toLowerCase().includes(query) || m.options.some(o => o.toLowerCase().includes(query))
  );
  const filteredShort = activeChapter.shortQuestions.filter(q => 
    !query || q.question.toLowerCase().includes(query) || q.answer.toLowerCase().includes(query) || (q.urduQuestion && q.urduQuestion.includes(query))
  );
  const filteredLong = activeChapter.longQuestions.filter(l => 
    !query || l.question.toLowerCase().includes(query) || l.answer.toLowerCase().includes(query) || (l.urduQuestion && l.urduQuestion.includes(query))
  );
  const filteredMain = activeChapter.mainQuestions.filter(mq => 
    !query || mq.question.toLowerCase().includes(query) || mq.answer.toLowerCase().includes(query)
  );
  const filteredPastPapers = activeChapter.pastPaperQuestions.filter(pp => 
    !query || pp.question.toLowerCase().includes(query) || pp.solution.toLowerCase().includes(query) || String(pp.year).includes(query)
  );

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-300">
      {/* Subject Navigation Pills (All 9 Class Subjects) */}
      <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xs">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-xs">
          <span className="font-bold text-slate-700 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Class 9 Subjects (Sindh Board Syllabus)</span>
          </span>
          <span className="text-2xs text-slate-400 font-medium">
            Click any subject to view complete notes & all questions
          </span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
          {subjects.map(s => {
            const isCurrent = s.id === currentSubject.id;
            const completedCount = s.chapters.filter(c => user.completedChapters?.includes(c.id)).length;
            return (
              <button
                key={s.id}
                id={`subj-pill-${s.id}`}
                onClick={() => {
                  onSelectSubject(s.id, s.chapters[0]?.id);
                  setFilterQuery('');
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isCurrent 
                    ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30 ring-2 ring-emerald-600/30' 
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60'
                }`}
              >
                <span>{s.title}</span>
                <span className={`text-3xs px-1.5 py-0.5 rounded-full ${isCurrent ? 'bg-emerald-700 text-emerald-100' : 'bg-slate-200 text-slate-600'}`}>
                  {completedCount}/{s.chapters.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Chapter Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Left Sidebar: Chapter List for Selected Subject */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs lg:sticky lg:top-24 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <div className="text-2xs uppercase tracking-wider font-bold text-emerald-600">
                {currentSubject.title} Chapters
              </div>
              <div className="font-bold text-slate-900 text-sm">
                Chapters ({currentSubject.chapters.length})
              </div>
            </div>
            <span className="font-urdu text-sm font-semibold text-slate-400">
              {currentSubject.urduTitle}
            </span>
          </div>

          <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
            {currentSubject.chapters.map(ch => {
              const isActive = ch.id === activeChapter.id;
              const isDone = user.completedChapters?.includes(ch.id);

              return (
                <div
                  key={ch.id}
                  id={`chapter-item-${ch.id}`}
                  onClick={() => {
                    onSelectSubject(currentSubject.id, ch.id);
                    setFilterQuery('');
                  }}
                  className={`p-3 rounded-xl transition-all cursor-pointer flex items-start justify-between gap-2 border ${
                    isActive 
                      ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950 font-bold shadow-2xs' 
                      : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <button
                      type="button"
                      title={isDone ? 'Mark chapter as incomplete' : 'Mark chapter as completed'}
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleChapter(ch.id);
                      }}
                      className="mt-0.5 text-slate-400 hover:text-emerald-600 transition-colors"
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                      ) : (
                        <Circle className="w-4 h-4 text-slate-300 hover:text-emerald-500" />
                      )}
                    </button>
                    <div>
                      <div className="text-xs font-bold leading-tight">
                        Ch {ch.number}: {ch.title}
                      </div>
                      {ch.urduTitle && (
                        <div className="text-3xs text-slate-400 font-urdu mt-0.5">
                          {ch.urduTitle}
                        </div>
                      )}
                      <div className="text-3xs text-slate-500 mt-1 flex items-center gap-2">
                        <span>{ch.notes.length} Notes</span>
                        <span>•</span>
                        <span>{ch.mcqs.length} MCQs</span>
                        <span>•</span>
                        <span>{ch.shortQuestions.length} Short</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-emerald-600 translate-x-0.5' : 'text-slate-300'}`} />
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-2">
            <button
              onClick={() => onStartQuiz(currentSubject.id)}
              className="w-full py-2.5 px-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm shadow-amber-500/20 cursor-pointer"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Practice {currentSubject.title} Quiz</span>
            </button>
          </div>
        </div>

        {/* Right Content Area: Detailed Chapter Study Material */}
        <div className="lg:col-span-3 space-y-5">
          {/* Chapter Header Card with Asan Mode and Search */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs relative space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-emerald-700 font-bold mb-1">
                  <span className="bg-emerald-100 px-2 py-0.5 rounded-md">
                    {currentSubject.title} • Chapter {activeChapter.number}
                  </span>
                  <span className="text-slate-400 font-normal">
                    {currentBoard}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {activeChapter.title}
                </h2>
                {activeChapter.urduTitle && (
                  <p className="font-urdu text-slate-600 text-sm mt-0.5">
                    {activeChapter.urduTitle}
                  </p>
                )}
                <p className="text-xs text-slate-500 mt-1 max-w-2xl">
                  {activeChapter.description}
                </p>
              </div>

              {/* Action Buttons: Mark Complete & Asan Mode Toggle */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setEasyMode(!easyMode)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    easyMode
                      ? 'bg-amber-100 border-amber-300 text-amber-900 shadow-2xs'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600'
                  }`}
                  title="Toggle Easy Mode with Urdu explanations and real world analogies"
                >
                  <Sparkles className={`w-3.5 h-3.5 ${easyMode ? 'text-amber-600' : 'text-slate-400'}`} />
                  <span>آسان سمجھ موڈ (Easy Mode)</span>
                  <span className={`w-2 h-2 rounded-full ${easyMode ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                </button>

                <button
                  id="toggle-chapter-completed-btn"
                  onClick={() => onToggleChapter(activeChapter.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold text-xs transition-all cursor-pointer border ${
                    isChapterCompleted
                      ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                  }`}
                >
                  {isChapterCompleted ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Done (+50 XP)</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-3.5 h-3.5" />
                      <span>Mark Done</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Filter Search Bar within Chapter */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-slate-100">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={filterQuery}
                  onChange={(e) => setFilterQuery(e.target.value)}
                  placeholder="Filter in this chapter (e.g. Newton, formula)..."
                  className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                />
                {filterQuery && (
                  <button 
                    onClick={() => setFilterQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-2xs text-slate-500 ml-auto">
                <span>Material: </span>
                <span className="font-bold text-slate-800">{activeChapter.notes.length} Notes</span>
                <span>•</span>
                <span className="font-bold text-slate-800">{activeChapter.mcqs.length} MCQs</span>
                <span>•</span>
                <span className="font-bold text-slate-800">{activeChapter.shortQuestions.length} Short</span>
                <span>•</span>
                <span className="font-bold text-slate-800">{activeChapter.longQuestions.length} Long</span>
              </div>
            </div>

            {/* Chapter Sub-Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pt-3 border-t border-slate-100 no-scrollbar text-xs">
              {[
                { id: 'notes', label: '📖 Complete Notes', count: activeChapter.notes.length },
                { id: 'mcqs', label: '🎯 MCQs (All)', count: activeChapter.mcqs.length },
                { id: 'short', label: '❓ Short Questions', count: activeChapter.shortQuestions.length },
                { id: 'long', label: '📑 Long Questions', count: activeChapter.longQuestions.length },
                { id: 'main', label: '⭐ Main Questions', count: activeChapter.mainQuestions.length },
                { id: 'pastpapers', label: '📜 10-Year Past Papers', count: activeChapter.pastPaperQuestions.length },
                { id: 'formulas', label: '📐 Formulas & Definitions', count: activeChapter.formulas.length + activeChapter.definitions.length },
                { id: 'revision', label: '⚡ Quick Revision', count: activeChapter.quickRevision.length },
              ].map(tab => (
                <button
                  key={tab.id}
                  id={`chapter-subtab-${tab.id}`}
                  onClick={() => setChapterTab(tab.id as any)}
                  className={`px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer text-xs ${
                    chapterTab === tab.id
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/50'
                  }`}
                >
                  <span>{tab.label}</span>
                  {tab.count > 0 && (
                    <span className="ml-1.5 text-2xs opacity-80">({tab.count})</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* TAB 1: COMPLETE CHAPTER NOTES & EASY EXPLANATIONS */}
          {chapterTab === 'notes' && (
            <div className="space-y-4">
              {filteredNotes.length === 0 ? (
                <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-500 text-xs">
                  No notes found matching &ldquo;{filterQuery}&rdquo;. Try clearing the search filter.
                </div>
              ) : (
                filteredNotes.map((note, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                        {note.heading}
                      </h3>
                      <span className="text-3xs bg-slate-100 text-slate-600 font-bold px-2 py-0.5 rounded-md">
                        Concept #{idx + 1}
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line font-normal">
                      {note.content}
                    </div>

                    {/* "Mushkil topic ko easy bana do" Box */}
                    {easyMode && (
                      <div className="bg-emerald-50/90 border border-emerald-200 rounded-xl p-4 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-bold">
                          <Lightbulb className="w-4 h-4 text-emerald-600" />
                          <span>Mushkil Topic Ko Easy Bana Do (آسان سمجھ)</span>
                        </div>
                        <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                          {note.simpleExplanation}
                        </p>
                      </div>
                    )}

                    {/* Funny Real-World Pakistani Student Analogy */}
                    {easyMode && note.funnyRealWorldAnalogy && (
                      <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3 text-xs text-amber-950 flex items-start gap-2">
                        <span className="text-base shrink-0">😂</span>
                        <div>
                          <span className="font-bold text-amber-900">Pakistani Student Real-Life Hack: </span>
                          <span>{note.funnyRealWorldAnalogy}</span>
                        </div>
                      </div>
                    )}

                    {/* Key Exam Points */}
                    {note.keyPoints && note.keyPoints.length > 0 && (
                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        <div className="text-2xs uppercase tracking-wider font-bold text-slate-400">
                          Exam Highlights to Memorize for Board
                        </div>
                        <ul className="space-y-1 text-xs text-slate-700 list-disc list-inside font-medium">
                          {note.keyPoints.map((kp, kidx) => (
                            <li key={kidx} className="leading-normal">{kp}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 2: MCQS (ALL QUESTIONS WITH EXPLANATION) */}
          {chapterTab === 'mcqs' && (
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="font-bold">Class 9 Exam MCQs Practice: </span>
                  Choose an option to check your score and read detailed explanation.
                </div>
                <span className="text-2xs bg-blue-200 px-2.5 py-1 rounded-full font-bold text-blue-950 shrink-0">
                  {filteredMcqs.length} MCQs Available
                </span>
              </div>

              {filteredMcqs.length === 0 ? (
                <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-500 text-xs">
                  No MCQs matching &ldquo;{filterQuery}&rdquo;.
                </div>
              ) : (
                filteredMcqs.map((mcq, mIdx) => {
                  const isAnswered = revealedAnswers[mcq.id];
                  const selectedOpt = selectedAnswers[mcq.id];
                  const isCorrect = selectedOpt === mcq.correctIndex;

                  return (
                    <div key={mcq.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2.5">
                          <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center shrink-0">
                            {mIdx + 1}
                          </span>
                          <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                            {mcq.question}
                          </h4>
                        </div>
                        {mcq.boardTag && (
                          <span className="text-3xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-md shrink-0">
                            {mcq.boardTag}
                          </span>
                        )}
                      </div>

                      {/* Options Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {mcq.options.map((opt, optIdx) => {
                          let optStyle = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100';
                          if (isAnswered) {
                            if (optIdx === mcq.correctIndex) {
                              optStyle = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                            } else if (selectedOpt === optIdx) {
                              optStyle = 'bg-red-100 border-red-400 text-red-950 font-semibold';
                            } else {
                              optStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectOption(mcq.id, optIdx)}
                              className={`p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between gap-2 cursor-pointer ${optStyle}`}
                            >
                              <span>
                                <strong className="mr-1.5">{String.fromCharCode(65 + optIdx)}.</strong>
                                {opt}
                              </span>
                              {isAnswered && optIdx === mcq.correctIndex && (
                                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                              )}
                              {isAnswered && selectedOpt === optIdx && optIdx !== mcq.correctIndex && (
                                <X className="w-4 h-4 text-red-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Feedback Explanation */}
                      {isAnswered && (
                        <div className={`p-3 rounded-xl text-xs space-y-1 ${isCorrect ? 'bg-emerald-50 text-emerald-950 border border-emerald-200' : 'bg-red-50 text-red-950 border border-red-200'}`}>
                          <div className="font-bold">
                            {isCorrect ? '🔥 Bro, that answer was cooking!' : '😂 Oops! The textbook is judging you!'}
                          </div>
                          <p className="text-2xs opacity-90">
                            <strong>Explanation:</strong> {mcq.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* TAB 3: SHORT QUESTIONS (ALL QUESTIONS & STEP-BY-STEP SOLUTIONS) */}
          {chapterTab === 'short' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-purple-50 border border-purple-200 rounded-xl p-3.5 text-xs text-purple-950">
                <div>
                  <span className="font-bold">Class 9 Short Questions (Section B): </span>
                  Comprehensive question bank with full official marking schemes.
                </div>
                <button
                  onClick={toggleAllAnswers}
                  className="flex items-center gap-1 text-2xs font-bold bg-white text-purple-800 border border-purple-200 px-2.5 py-1 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer"
                >
                  {allAnswersOpen ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{allAnswersOpen ? 'Hide All Solutions' : 'Show All Solutions'}</span>
                </button>
              </div>

              {filteredShort.length === 0 ? (
                <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-500 text-xs">
                  No short questions matching &ldquo;{filterQuery}&rdquo;.
                </div>
              ) : (
                filteredShort.map((q, idx) => {
                  const isOpen = openAnswers[q.id] !== undefined ? openAnswers[q.id] : allAnswersOpen;
                  return (
                    <div key={q.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2.5">
                          <span className="w-6 h-6 rounded-md bg-purple-100 text-purple-800 font-bold text-xs flex items-center justify-center shrink-0">
                            Q{idx + 1}
                          </span>
                          <div>
                            <h4 className="font-bold text-slate-900 text-sm leading-snug">
                              {q.question}
                            </h4>
                            {q.urduQuestion && (
                              <p className="font-urdu text-slate-500 text-xs mt-0.5">
                                {q.urduQuestion}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {q.isImportant && (
                            <span className="text-3xs font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md">
                              ★ Most Important
                            </span>
                          )}
                          <span className="text-3xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-semibold">
                            {q.marks} Marks
                          </span>
                          <button
                            onClick={() => toggleAnswer(q.id)}
                            className="text-slate-400 hover:text-slate-700 p-1 rounded-md cursor-pointer"
                            title={isOpen ? 'Hide solution' : 'Reveal solution'}
                          >
                            {isOpen ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4 text-emerald-600" />}
                          </button>
                        </div>
                      </div>

                      {q.pastPaperInfo && (
                        <div className="text-3xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-1 rounded-md inline-block">
                          Repeated in: {q.pastPaperInfo}
                        </div>
                      )}

                      {isOpen && (
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-xs text-slate-800 whitespace-pre-line leading-relaxed animate-in fade-in duration-200">
                          <div className="font-bold text-emerald-800 mb-1 text-2xs uppercase tracking-wider flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Standard Board Solution:</span>
                          </div>
                          {q.answer}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* TAB 4: LONG QUESTIONS (FULL MARKS 8 DETAILED PROOFS) */}
          {chapterTab === 'long' && (
            <div className="space-y-4">
              <div className="bg-slate-900 text-white rounded-xl p-4 text-xs flex items-center justify-between">
                <div>
                  <span className="font-bold">Class 9 Long Questions (Section C): </span>
                  Comprehensive 8-mark derivations, proofs, experiments, and numericals.
                </div>
                <button
                  onClick={toggleAllAnswers}
                  className="flex items-center gap-1 text-2xs font-bold bg-slate-800 hover:bg-slate-700 text-emerald-300 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                >
                  {allAnswersOpen ? 'Hide All' : 'Show All'}
                </button>
              </div>

              {filteredLong.length === 0 ? (
                <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-500 text-xs">
                  No long questions matching &ldquo;{filterQuery}&rdquo;.
                </div>
              ) : (
                filteredLong.map((lq, idx) => {
                  const isOpen = openAnswers[lq.id] !== undefined ? openAnswers[lq.id] : allAnswersOpen;
                  return (
                    <div key={lq.id} className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
                      <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-lg">
                              Section C • {lq.marks} Marks
                            </span>
                            {lq.pastPaperInfo && (
                              <span className="text-2xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">
                                {lq.pastPaperInfo}
                              </span>
                            )}
                          </div>
                          <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                            Q{idx + 1}: {lq.question}
                          </h3>
                          {lq.urduQuestion && (
                            <p className="font-urdu text-slate-500 text-xs mt-1">
                              {lq.urduQuestion}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => toggleAnswer(lq.id)}
                          className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl cursor-pointer transition-colors shrink-0"
                        >
                          {isOpen ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                          <span>{isOpen ? 'Hide Proof' : 'View Proof'}</span>
                        </button>
                      </div>

                      {isOpen && (
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-slate-800 whitespace-pre-line leading-relaxed animate-in fade-in duration-200">
                          {lq.answer}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* TAB 5: MAIN QUESTIONS */}
          {chapterTab === 'main' && (
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 font-medium">
                ★ <strong>Main Exam Questions:</strong> High-probability concepts repeatedly examined by BSEK Karachi and Sindh Boards!
              </div>

              {filteredMain.length === 0 ? (
                <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-500 text-xs">
                  No main questions matching &ldquo;{filterQuery}&rdquo;.
                </div>
              ) : (
                filteredMain.map((mq, idx) => (
                  <div key={mq.id} className="bg-white border border-amber-200/80 rounded-2xl p-5 shadow-xs space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-bold text-slate-900 text-sm">
                        {idx + 1}. {mq.question}
                      </h4>
                      <span className="text-3xs font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md shrink-0">
                        {mq.marks} Marks
                      </span>
                    </div>

                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 text-xs text-slate-800 whitespace-pre-line leading-relaxed">
                      {mq.answer}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 6: PAST PAPERS (VERIFIED SINDH BOARDS 2014-2023) */}
          {chapterTab === 'pastpapers' && (
            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-950 font-medium flex items-center justify-between">
                <span>📜 <strong>Past 10 Years Verified Examination Questions:</strong> Arranged with exact board years and repeating frequency.</span>
                <span className="text-2xs bg-emerald-200 px-2 py-0.5 rounded-md font-bold">
                  {filteredPastPapers.length} Questions
                </span>
              </div>

              {filteredPastPapers.length === 0 ? (
                <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-500 text-xs">
                  No past paper questions matching &ldquo;{filterQuery}&rdquo;.
                </div>
              ) : (
                filteredPastPapers.map((pp) => (
                  <div key={pp.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="bg-emerald-700 text-white font-bold text-xs px-2.5 py-0.5 rounded-md">
                          {pp.board} • {pp.year}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          Section {pp.section}
                        </span>
                      </div>
                      <span className="text-2xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                        {pp.frequency}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-sm">
                      {pp.question}
                    </h4>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-800 whitespace-pre-line leading-relaxed">
                      <div className="font-bold text-emerald-800 text-2xs uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Official Marking Scheme Solution:</span>
                      </div>
                      {pp.solution}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 7: FORMULAS & DEFINITIONS */}
          {chapterTab === 'formulas' && (
            <div className="space-y-5">
              {/* Important Definitions */}
              {activeChapter.definitions.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-emerald-600" />
                    Important Definitions (1-2 Marks Board Format)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeChapter.definitions.map((def, idx) => (
                      <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-emerald-800 text-xs">{def.term}</span>
                          {def.urduTerm && (
                            <span className="font-urdu text-xs text-slate-400">{def.urduTerm}</span>
                          )}
                        </div>
                        <p className="text-xs text-slate-700 leading-normal">
                          {def.definition}
                        </p>
                        {def.examTip && (
                          <div className="text-3xs text-amber-800 bg-amber-50 p-1.5 rounded-md font-medium">
                            💡 Exam Tip: {def.examTip}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Formulas */}
              {activeChapter.formulas.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-600" />
                    Formulas & SI Units
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeChapter.formulas.map((form, idx) => (
                      <div key={idx} className="bg-white border border-purple-200 rounded-xl p-4 shadow-xs space-y-2">
                        <span className="font-bold text-purple-950 text-xs block">{form.name}</span>
                        <div className="bg-purple-50 text-purple-900 font-mono font-bold text-xs p-2 rounded-lg border border-purple-200/60">
                          {form.formula}
                        </div>
                        <div className="flex items-center justify-between text-2xs text-slate-500">
                          <span>Units: <strong className="text-slate-800">{form.units}</strong></span>
                        </div>
                        <p className="text-2xs text-slate-500">
                          {form.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Memory Tricks */}
              {activeChapter.memoryTricks.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    Memory Tricks & Mnemonics
                  </h3>
                  <div className="space-y-2">
                    {activeChapter.memoryTricks.map((trick, idx) => (
                      <div key={idx} className="bg-amber-50/80 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-950 space-y-1">
                        <div className="font-bold text-amber-900 flex items-center gap-1.5">
                          <span>💡 {trick.title}:</span>
                          <span className="font-mono bg-amber-200/70 px-2 py-0.5 rounded-sm">{trick.trick}</span>
                        </div>
                        <p className="text-2xs text-amber-900/90">{trick.explanation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 8: QUICK REVISION */}
          {chapterTab === 'revision' && (
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  Last-Minute Exam Quick Revision
                </h3>
                <span className="text-2xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full">
                  5-Minute Review
                </span>
              </div>

              <div className="space-y-2">
                {activeChapter.quickRevision.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800">
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-3xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="leading-relaxed font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Ready to test what you learned?</span>
                <button
                  onClick={() => onStartQuiz(currentSubject.id)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Gamepad2 className="w-4 h-4" />
                  <span>Launch Chapter Quiz</span>
                </button>
              </div>
            </div>
          )}

          {/* Bottom Sequential Navigation: Previous Chapter & Next Chapter */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs">
            {prevChapter ? (
              <button
                onClick={() => {
                  onSelectSubject(currentSubject.id, prevChapter.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold transition-all cursor-pointer shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous: Ch {prevChapter.number} ({prevChapter.title})</span>
              </button>
            ) : (
              <div />
            )}

            {nextChapter ? (
              <button
                onClick={() => {
                  onSelectSubject(currentSubject.id, nextChapter.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-emerald-600 bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all cursor-pointer shadow-xs"
              >
                <span>Next: Ch {nextChapter.number} ({nextChapter.title})</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => onStartQuiz(currentSubject.id)}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-amber-500 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold transition-all cursor-pointer shadow-xs"
              >
                <Zap className="w-4 h-4" />
                <span>Subject Mastered! Take Quiz</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
