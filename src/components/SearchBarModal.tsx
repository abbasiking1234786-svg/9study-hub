import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, FileText, FileQuestion, Sparkles, ArrowRight } from 'lucide-react';
import { Subject } from '../types';

interface SearchBarModalProps {
  isOpen: boolean;
  onClose: () => void;
  subjects: Subject[];
  onNavigateToContent: (subjectId: string, chapterId: string, subTab?: string) => void;
}

export const SearchBarModal: React.FC<SearchBarModalProps> = ({
  isOpen,
  onClose,
  subjects,
  onNavigateToContent
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Example quick search prompts requested by user
  const quickSearches = [
    'Physics Chapter 3',
    'Biology short questions',
    'Math formulas',
    'English past papers',
    'Chemistry MCQs'
  ];

  // Perform search across subjects, chapters, notes, MCQs, formulas, questions
  const q = query.toLowerCase().trim();

  const results: {
    type: string;
    title: string;
    subtitle: string;
    subjectId: string;
    chapterId: string;
    subTab?: string;
  }[] = [];

  if (q.length > 1) {
    subjects.forEach(s => {
      // Check subject title
      const subjectMatches = s.title.toLowerCase().includes(q) || s.id.includes(q);

      s.chapters.forEach(ch => {
        const chapterTitleMatches = ch.title.toLowerCase().includes(q) || `chapter ${ch.number}`.includes(q) || `ch ${ch.number}`.includes(q);

        if (subjectMatches || chapterTitleMatches) {
          results.push({
            type: 'Chapter',
            title: `${s.title} • Chapter ${ch.number}: ${ch.title}`,
            subtitle: ch.description,
            subjectId: s.id,
            chapterId: ch.id,
            subTab: 'notes'
          });
        }

        // Check if query is looking for MCQs
        if (q.includes('mcq') && (subjectMatches || chapterTitleMatches)) {
          results.push({
            type: 'MCQs',
            title: `${s.title} Ch ${ch.number} MCQs (${ch.mcqs.length} questions)`,
            subtitle: 'Board examination multiple choice practice with instant explanations',
            subjectId: s.id,
            chapterId: ch.id,
            subTab: 'mcqs'
          });
        }

        // Check if query is looking for short questions
        if (q.includes('short') && (subjectMatches || chapterTitleMatches)) {
          results.push({
            type: 'Short Questions',
            title: `${s.title} Ch ${ch.number} Short Questions`,
            subtitle: `${ch.shortQuestions.length} Board standard short answers`,
            subjectId: s.id,
            chapterId: ch.id,
            subTab: 'short'
          });
        }

        // Check if query is looking for formulas
        if (q.includes('formula') && (subjectMatches || chapterTitleMatches || ch.formulas.length > 0)) {
          results.push({
            type: 'Formulas',
            title: `${s.title} Ch ${ch.number} Formulas & SI Units`,
            subtitle: ch.formulas.map(f => f.formula).join(', ') || 'Formulas & Definitions',
            subjectId: s.id,
            chapterId: ch.id,
            subTab: 'formulas'
          });
        }

        // Check if query is looking for past papers
        if ((q.includes('past') || q.includes('paper')) && (subjectMatches || chapterTitleMatches)) {
          results.push({
            type: 'Past Papers',
            title: `${s.title} Ch ${ch.number} Past Paper Questions`,
            subtitle: 'Verified Karachi and Sindh Board past questions with solutions',
            subjectId: s.id,
            chapterId: ch.id,
            subTab: 'pastpapers'
          });
        }

        // Search in MCQ texts
        ch.mcqs.forEach(m => {
          if (m.question.toLowerCase().includes(q)) {
            results.push({
              type: 'MCQ Match',
              title: m.question,
              subtitle: `${s.title} • Ch ${ch.number}`,
              subjectId: s.id,
              chapterId: ch.id,
              subTab: 'mcqs'
            });
          }
        });

        // Search in short questions
        ch.shortQuestions.forEach(sq => {
          if (sq.question.toLowerCase().includes(q) || sq.answer.toLowerCase().includes(q)) {
            results.push({
              type: 'Question Match',
              title: sq.question,
              subtitle: `${s.title} • Ch ${ch.number}`,
              subjectId: s.id,
              chapterId: ch.id,
              subTab: 'short'
            });
          }
        });
      });
    });
  }

  const handleSelectResult = (item: typeof results[0]) => {
    onNavigateToContent(item.subjectId, item.chapterId, item.subTab);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 p-4">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0 ml-1" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search e.g. 'Physics Chapter 3', 'Math formulas', 'Biology short questions'..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-slate-500 hover:bg-slate-100 rounded-lg"
          >
            Esc
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="p-3 bg-slate-50 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto text-2xs">
          <span className="text-slate-400 font-semibold shrink-0">Try searching:</span>
          {quickSearches.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 rounded-lg whitespace-nowrap transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-1.5">
          {query.trim().length > 1 ? (
            results.length > 0 ? (
              results.slice(0, 12).map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectResult(item)}
                  className="p-3 rounded-xl hover:bg-emerald-50/70 border border-transparent hover:border-emerald-200 transition-all cursor-pointer flex items-center justify-between gap-3 group"
                >
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-3xs uppercase font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 group-hover:bg-emerald-100 group-hover:text-emerald-800">
                        {item.type}
                      </span>
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-2xs text-slate-500 truncate">
                      {item.subtitle}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-slate-400 text-xs">
                No results found for "{query}". Try checking the spelling or use the suggestion chips above.
              </div>
            )
          ) : (
            <div className="p-8 text-center text-slate-400 text-xs">
              Type at least 2 characters to search across all 9 subjects, formulas, MCQs, and past papers.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
