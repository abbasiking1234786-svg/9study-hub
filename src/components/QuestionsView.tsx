import React, { useState } from 'react';
import { 
  FileQuestion, 
  Search, 
  BookOpen, 
  CheckCircle2, 
  Award, 
  HelpCircle, 
  Flame, 
  Layers, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Calendar
} from 'lucide-react';
import { Subject, BoardType } from '../types';

interface QuestionsViewProps {
  subjects: Subject[];
  currentBoard: BoardType;
  onStartQuiz: (subjectId?: string) => void;
}

type QuestionCategory = 
  | 'mcqs' 
  | 'main' 
  | 'short' 
  | 'long' 
  | 'pastpapers' 
  | 'past10years' 
  | 'important' 
  | 'revision';

export const QuestionsView: React.FC<QuestionsViewProps> = ({
  subjects,
  currentBoard,
  onStartQuiz
}) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('all');
  const [activeCategory, setActiveCategory] = useState<QuestionCategory>('mcqs');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = [
    { id: 'mcqs', label: '1. MCQs', icon: '🎯' },
    { id: 'main', label: '2. Main Questions', icon: '⭐' },
    { id: 'short', label: '3. Short Questions', icon: '❓' },
    { id: 'long', label: '4. Long Questions', icon: '📑' },
    { id: 'pastpapers', label: '5. Past Paper Questions', icon: '📜' },
    { id: 'past10years', label: '6. Past 10 Years Questions', icon: '🏛️' },
    { id: 'important', label: '7. Expected Exam Questions', icon: '🔥' },
    { id: 'revision', label: '8. Quick Revision', icon: '⚡' },
  ];

  // Aggregate questions across subjects according to selected subject
  const filteredSubjects = selectedSubjectId === 'all' 
    ? subjects 
    : subjects.filter(s => s.id === selectedSubjectId);

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-300">
      {/* Category Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Class 9 Sindh Boards Question Bank • {currentBoard}</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Comprehensive Exam Questions System
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Categorized by question type, subject, and chapter. High-yield, verified board examination preparation.
          </p>
        </div>

        {/* 8 Question Category Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {categories.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`q-cat-tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id as QuestionCategory)}
                className={`p-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer border text-left ${
                  isActive
                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/70'
                }`}
              >
                <span className="text-base shrink-0">{cat.icon}</span>
                <span className="truncate">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Subject Filter Pills & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            <button
              onClick={() => setSelectedSubjectId('all')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                selectedSubjectId === 'all' 
                  ? 'bg-slate-900 text-white' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Subjects
            </button>
            {subjects.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedSubjectId(s.id)}
                className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedSubjectId === s.id 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Question Text Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search in questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Render Categorized Content */}
      <div className="space-y-6">
        {filteredSubjects.map(subject => {
          return (
            <div key={subject.id} className="space-y-4">
              <div className="flex items-center gap-2 pb-1 border-b border-slate-200">
                <span className="w-3 h-3 rounded-full bg-emerald-600" />
                <h2 className="font-extrabold text-slate-900 text-base">
                  {subject.title}
                </h2>
                <span className="font-urdu text-sm text-slate-400">
                  {subject.urduTitle}
                </span>
              </div>

              {subject.chapters.map(ch => {
                // CATEGORY 1: MCQS
                if (activeCategory === 'mcqs') {
                  const items = ch.mcqs.filter(m => 
                    !searchQuery || m.question.toLowerCase().includes(searchQuery.toLowerCase())
                  );
                  if (items.length === 0) return null;

                  return (
                    <div key={ch.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                      <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                        Ch {ch.number}: {ch.title}
                      </div>

                      <div className="space-y-3 pt-1">
                        {items.map((m, idx) => (
                          <div key={m.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                            <div className="flex items-start justify-between gap-2">
                              <span className="font-bold text-slate-900 text-xs sm:text-sm">
                                {idx + 1}. {m.question}
                              </span>
                              {m.boardTag && (
                                <span className="text-3xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md shrink-0">
                                  {m.boardTag}
                                </span>
                              )}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                              {m.options.map((opt, oIdx) => (
                                <div 
                                  key={oIdx} 
                                  className={`text-xs p-2 rounded-lg border ${
                                    oIdx === m.correctIndex 
                                      ? 'bg-emerald-100/70 border-emerald-300 font-bold text-emerald-950' 
                                      : 'bg-white border-slate-200 text-slate-700'
                                  }`}
                                >
                                  <strong className="mr-1">{String.fromCharCode(65 + oIdx)}.</strong>
                                  {opt}
                                </div>
                              ))}
                            </div>

                            <div className="text-2xs text-slate-500 pt-1">
                              <strong>Explanation:</strong> {m.explanation}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                // CATEGORY 2: MAIN QUESTIONS
                if (activeCategory === 'main') {
                  const items = ch.mainQuestions.filter(mq => 
                    !searchQuery || mq.question.toLowerCase().includes(searchQuery.toLowerCase())
                  );
                  if (items.length === 0) return null;

                  return (
                    <div key={ch.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                      <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                        ⭐ Main Questions • Ch {ch.number}: {ch.title}
                      </div>

                      <div className="space-y-3">
                        {items.map((mq, idx) => (
                          <div key={mq.id} className="p-4 rounded-xl bg-amber-50/40 border border-amber-200/60 space-y-2">
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="font-bold text-slate-900 text-sm">
                                {idx + 1}. {mq.question}
                              </h4>
                              <span className="text-3xs bg-amber-200 text-amber-900 font-bold px-2 py-0.5 rounded-md shrink-0">
                                {mq.marks} Marks
                              </span>
                            </div>
                            <div className="text-xs text-slate-700 whitespace-pre-line leading-relaxed bg-white p-3 rounded-lg border border-amber-100">
                              {mq.answer}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                // CATEGORY 3: SHORT QUESTIONS
                if (activeCategory === 'short') {
                  const items = ch.shortQuestions.filter(sq => 
                    !searchQuery || sq.question.toLowerCase().includes(searchQuery.toLowerCase())
                  );
                  if (items.length === 0) return null;

                  return (
                    <div key={ch.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                      <div className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                        Short Questions • Ch {ch.number}: {ch.title}
                      </div>

                      <div className="space-y-3">
                        {items.map((sq, idx) => {
                          const isExpanded = expandedItems[sq.id] ?? true;
                          return (
                            <div key={sq.id} className="border border-slate-200 rounded-xl overflow-hidden">
                              <div 
                                onClick={() => toggleExpand(sq.id)}
                                className="p-3.5 bg-slate-50 hover:bg-slate-100/80 cursor-pointer flex items-center justify-between gap-3 text-xs"
                              >
                                <span className="font-bold text-slate-900">
                                  Q{idx + 1}: {sq.question}
                                </span>
                                <div className="flex items-center gap-2 shrink-0">
                                  <span className="text-3xs bg-purple-100 text-purple-800 font-semibold px-2 py-0.5 rounded-md">
                                    {sq.marks} Marks
                                  </span>
                                  {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                                </div>
                              </div>

                              {isExpanded && (
                                <div className="p-3.5 text-xs text-slate-700 bg-white border-t border-slate-200 whitespace-pre-line leading-relaxed">
                                  {sq.answer}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                // CATEGORY 4: LONG QUESTIONS
                if (activeCategory === 'long') {
                  const items = ch.longQuestions.filter(lq => 
                    !searchQuery || lq.question.toLowerCase().includes(searchQuery.toLowerCase())
                  );
                  if (items.length === 0) return null;

                  return (
                    <div key={ch.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        📑 Long / Detailed Section C Questions • Ch {ch.number}: {ch.title}
                      </div>

                      <div className="space-y-4">
                        {items.map((lq, idx) => (
                          <div key={lq.id} className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-2">
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="font-bold text-slate-900 text-sm">
                                Q{idx + 1}: {lq.question}
                              </h3>
                              <span className="text-3xs font-bold bg-purple-100 text-purple-900 px-2 py-0.5 rounded-md shrink-0">
                                {lq.marks} Marks
                              </span>
                            </div>
                            <div className="text-xs text-slate-700 bg-white p-3.5 rounded-lg border border-slate-200 whitespace-pre-line leading-relaxed">
                              {lq.answer}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                // CATEGORY 5 & 6: PAST PAPERS & PAST 10 YEARS
                if (activeCategory === 'pastpapers' || activeCategory === 'past10years') {
                  const items = ch.pastPaperQuestions.filter(pp => 
                    !searchQuery || pp.question.toLowerCase().includes(searchQuery.toLowerCase())
                  );
                  if (items.length === 0) return null;

                  return (
                    <div key={ch.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                      <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                        📜 Past Papers • Ch {ch.number}: {ch.title}
                      </div>

                      <div className="space-y-3">
                        {items.map(pp => (
                          <div key={pp.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <span className="font-bold text-xs bg-emerald-600 text-white px-2 py-0.5 rounded-md">
                                {pp.board} • {pp.year} (Section {pp.section})
                              </span>
                              <span className="text-2xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">
                                {pp.frequency}
                              </span>
                            </div>
                            <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                              {pp.question}
                            </h4>
                            <div className="text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200 whitespace-pre-line">
                              {pp.solution}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                // CATEGORY 7: IMPORTANT / EXPECTED EXAM QUESTIONS
                if (activeCategory === 'important') {
                  const importantShorts = ch.shortQuestions.filter(q => q.isImportant);
                  const importantLongs = ch.longQuestions.filter(q => q.isImportant);
                  if (importantShorts.length === 0 && importantLongs.length === 0) return null;

                  return (
                    <div key={ch.id} className="bg-white border border-amber-200 rounded-2xl p-5 shadow-xs space-y-3">
                      <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                        🔥 Most Expected Board Questions • Ch {ch.number}: {ch.title}
                      </div>

                      <div className="space-y-2">
                        {importantShorts.map(q => (
                          <div key={q.id} className="p-3 bg-amber-50/50 rounded-xl border border-amber-200/80 text-xs">
                            <div className="font-bold text-slate-900 mb-1">{q.question}</div>
                            <div className="text-2xs text-slate-600 leading-normal">{q.answer}</div>
                          </div>
                        ))}
                        {importantLongs.map(q => (
                          <div key={q.id} className="p-3 bg-purple-50/50 rounded-xl border border-purple-200/80 text-xs">
                            <div className="font-bold text-slate-900 mb-1">{q.question}</div>
                            <div className="text-2xs text-slate-600 leading-normal">{q.answer}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                // CATEGORY 8: QUICK REVISION
                if (activeCategory === 'revision') {
                  return (
                    <div key={ch.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-2">
                      <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                        ⚡ Quick Points • Ch {ch.number}: {ch.title}
                      </div>
                      <div className="space-y-1.5 text-xs text-slate-700">
                        {ch.quickRevision.map((pt, pidx) => (
                          <div key={pidx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
