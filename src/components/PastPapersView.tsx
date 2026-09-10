import React, { useState } from 'react';
import { 
  FileText, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Search
} from 'lucide-react';
import { Subject, BoardType } from '../types';
import { SINDH_BOARDS } from '../data/curriculumData';

interface PastPapersViewProps {
  subjects: Subject[];
  currentBoard: BoardType;
  setCurrentBoard: (board: BoardType) => void;
}

export const PastPapersView: React.FC<PastPapersViewProps> = ({
  subjects,
  currentBoard,
  setCurrentBoard
}) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(subjects[0]?.id || 'physics');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});

  const toggleSolution = (id: string) => {
    setExpandedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const years = ['all', '2023', '2022', '2021', '2019', '2018', '2017', '2016', '2015', '2014'];

  const currentSubject = subjects.find(s => s.id === selectedSubjectId) || subjects[0];

  // Collect past papers from chapters of selected subject
  let pastPaperItems: any[] = [];
  currentSubject.chapters.forEach(ch => {
    ch.pastPaperQuestions.forEach(pp => {
      pastPaperItems.push({
        ...pp,
        chapterNumber: ch.number,
        chapterTitle: ch.title
      });
    });
  });

  // Filter by year & search
  if (selectedYear !== 'all') {
    pastPaperItems = pastPaperItems.filter(pp => pp.year === selectedYear);
  }
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    pastPaperItems = pastPaperItems.filter(pp => 
      pp.question.toLowerCase().includes(q) || 
      pp.solution.toLowerCase().includes(q) ||
      pp.chapterTitle.toLowerCase().includes(q)
    );
  }

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Sindh Examination Boards Archive (10-Year Verified Questions)</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Class 9 Past Papers & Model Solutions
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Karachi (BSEK), Hyderabad, Sukkur, Larkana, and Mirpurkhas board examination patterns with official marking solutions.
            </p>
          </div>

          {/* Board Selector */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-2 rounded-xl text-xs shrink-0">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-bold text-slate-700">Target Board:</span>
            <select
              aria-label="Select Target Examination Board"
              value={currentBoard}
              onChange={(e) => setCurrentBoard(e.target.value as BoardType)}
              className="bg-white border border-slate-200 rounded-lg px-2 py-1 font-bold text-slate-800 cursor-pointer focus:outline-hidden"
            >
              {SINDH_BOARDS.map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Subject Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs border-t border-slate-100 pt-3">
          {subjects.map(s => {
            const isSelected = s.id === selectedSubjectId;
            return (
              <button
                key={s.id}
                id={`pastpaper-subj-${s.id}`}
                onClick={() => setSelectedSubjectId(s.id)}
                className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-emerald-600 text-white shadow-xs' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {s.title}
              </button>
            );
          })}
        </div>

        {/* Year Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-1.5 overflow-x-auto text-2xs font-semibold">
            <span className="text-slate-400 mr-1">Year:</span>
            {years.map(yr => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  selectedYear === yr 
                    ? 'bg-slate-900 text-white font-bold' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {yr === 'all' ? 'All Years' : yr}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search in past papers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Past Paper Questions Feed */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span>Showing <strong>{pastPaperItems.length}</strong> past examination questions for {currentSubject.title}</span>
          <span>{currentBoard}</span>
        </div>

        {pastPaperItems.length > 0 ? (
          <div className="space-y-4">
            {pastPaperItems.map((pp, idx) => {
              const isExpanded = expandedSolutions[pp.id] ?? true;

              return (
                <div key={pp.id || idx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-700 text-white font-bold text-xs px-2.5 py-0.5 rounded-md">
                        {pp.board} • {pp.year}
                      </span>
                      <span className="text-2xs font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                        Section {pp.section}
                      </span>
                      <span className="text-2xs text-slate-500">
                        Ch {pp.chapterNumber}: {pp.chapterTitle}
                      </span>
                    </div>

                    <span className="text-2xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                      {pp.frequency}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {pp.question}
                  </h3>

                  {/* Solution block with toggle */}
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleSolution(pp.id)}
                      className="text-2xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Model Solution' : 'View Model Solution & Scheme'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isExpanded && (
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-800 whitespace-pre-line leading-relaxed mt-2 animate-in fade-in duration-200">
                        <div className="font-bold text-emerald-800 text-2xs uppercase tracking-wider mb-1.5 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Standard Board Solution:</span>
                        </div>
                        {pp.solution}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-400 space-y-2">
            <FileText className="w-10 h-10 mx-auto text-slate-300" />
            <p className="text-xs">No questions matching your filters. Try selecting "All Years" or clearing search.</p>
          </div>
        )}
      </div>
    </div>
  );
};
