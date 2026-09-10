import React from 'react';
import { 
  Flame, 
  TrendingUp, 
  Zap, 
  Award, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  AlertCircle, 
  BookOpen 
} from 'lucide-react';
import { UserProfile, Subject } from '../types';

interface ProgressViewProps {
  user: UserProfile;
  subjects: Subject[];
  onStartQuiz: (subjectId?: string) => void;
  onSelectSubject: (subjectId: string) => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  user,
  subjects,
  onStartQuiz,
  onSelectSubject
}) => {
  const totalChapters = subjects.reduce((acc, s) => acc + s.chapters.length, 0);
  const completedChaptersCount = user.completedChapters?.length || 0;
  const overallPercentage = totalChapters > 0 
    ? Math.min(100, Math.round((completedChaptersCount / totalChapters) * 100))
    : 0;

  // Compute subject-wise progress
  const subjectProgressList = subjects.map(s => {
    const done = s.chapters.filter(ch => user.completedChapters?.includes(ch.id)).length;
    const pct = s.chapters.length > 0 ? Math.round((done / s.chapters.length) * 100) : 0;
    return {
      id: s.id,
      title: s.title,
      urduTitle: s.urduTitle,
      done,
      total: s.chapters.length,
      pct
    };
  });

  // Calculate strong vs weak subjects based on quiz history
  const subjectStats: Record<string, { totalScore: number; totalQuestions: number; attempts: number }> = {};
  user.quizHistory?.forEach(q => {
    if (!subjectStats[q.subjectTitle]) {
      subjectStats[q.subjectTitle] = { totalScore: 0, totalQuestions: 0, attempts: 0 };
    }
    subjectStats[q.subjectTitle].totalScore += q.score;
    subjectStats[q.subjectTitle].totalQuestions += q.totalQuestions;
    subjectStats[q.subjectTitle].attempts += 1;
  });

  const analyzedSubjects = Object.entries(subjectStats).map(([title, data]) => {
    const acc = data.totalQuestions > 0 ? Math.round((data.totalScore / data.totalQuestions) * 100) : 0;
    return { title, acc, attempts: data.attempts };
  });

  const strongSubjects = analyzedSubjects.filter(s => s.acc >= 75);
  const weakSubjects = analyzedSubjects.filter(s => s.acc < 75);

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-850 rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-4">
        <div>
          <span className="text-2xs uppercase tracking-wider font-bold text-amber-300 bg-emerald-900/60 px-3 py-1 rounded-full border border-emerald-600/40">
            Student Analytics & Metrics
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight mt-2">
            My Study Progress & Quiz Performance
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
            Keep track of your completed chapters, daily streaks, strong topics, and test results.
          </p>
        </div>

        {/* Top 4 Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="bg-emerald-900/50 border border-emerald-600/30 rounded-2xl p-4">
            <span className="text-2xs font-bold text-emerald-200 block">SYLLABUS PROGRESS</span>
            <span className="text-2xl font-black text-white flex items-center gap-1.5 mt-1">
              <TrendingUp className="w-5 h-5 text-emerald-300" /> {overallPercentage}%
            </span>
            <span className="text-3xs text-emerald-200 mt-1 block">{completedChaptersCount}/{totalChapters} Chapters</span>
          </div>

          <div className="bg-emerald-900/50 border border-emerald-600/30 rounded-2xl p-4">
            <span className="text-2xs font-bold text-emerald-200 block">TOTAL STUDY XP</span>
            <span className="text-2xl font-black text-amber-300 flex items-center gap-1.5 mt-1">
              <Zap className="w-5 h-5" /> {user.xp} XP
            </span>
            <span className="text-3xs text-emerald-200 mt-1 block">Level {user.level} Student</span>
          </div>

          <div className="bg-emerald-900/50 border border-emerald-600/30 rounded-2xl p-4">
            <span className="text-2xs font-bold text-emerald-200 block">ACTIVE STREAK</span>
            <span className="text-2xl font-black text-amber-400 flex items-center gap-1.5 mt-1">
              <Flame className="w-5 h-5 fill-amber-400" /> {user.streak} Days
            </span>
            <span className="text-3xs text-emerald-200 mt-1 block">Consistent learner</span>
          </div>

          <div className="bg-emerald-900/50 border border-emerald-600/30 rounded-2xl p-4">
            <span className="text-2xs font-bold text-emerald-200 block">QUIZZES PLAYED</span>
            <span className="text-2xl font-black text-white flex items-center gap-1.5 mt-1">
              <Award className="w-5 h-5 text-amber-300" /> {user.quizHistory?.length || 0}
            </span>
            <span className="text-3xs text-emerald-200 mt-1 block">Exam simulations</span>
          </div>
        </div>
      </div>

      {/* Strong vs Weak Subjects Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Strong Subjects */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Strong Subjects (Accuracy &gt;= 75%)</span>
          </div>
          {strongSubjects.length > 0 ? (
            <div className="space-y-2">
              {strongSubjects.map((s, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs">
                  <span className="font-bold text-slate-800">{s.title}</span>
                  <span className="font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                    {s.acc}% ({s.attempts} tests)
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-400 py-4">
              Take more quizzes to calculate your strongest subjects!
            </p>
          )}
        </div>

        {/* Needs Improvement */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>Needs Extra Revision (Accuracy &lt; 75%)</span>
          </div>
          {weakSubjects.length > 0 ? (
            <div className="space-y-2">
              {weakSubjects.map((s, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50/60 border border-amber-100 text-xs">
                  <span className="font-bold text-slate-800">{s.title}</span>
                  <span className="font-extrabold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">
                    {s.acc}% ({s.attempts} tests)
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-400 py-4">
              No weak subjects detected. Excellent work!
            </p>
          )}
        </div>
      </div>

      {/* Subject-wise Detailed Breakdown */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-600" />
          Subject-Wise Completion Breakdown
        </h2>

        <div className="space-y-3">
          {subjectProgressList.map(subj => (
            <div 
              key={subj.id}
              onClick={() => onSelectSubject(subj.id)}
              className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-100/70 transition-all cursor-pointer space-y-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">{subj.title}</span>
                  <span className="font-urdu text-xs text-slate-400 ml-2">{subj.urduTitle}</span>
                </div>
                <div className="text-xs font-bold text-slate-700">
                  {subj.done} of {subj.total} Chapters ({subj.pct}%)
                </div>
              </div>

              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${subj.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Quiz History Log */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-slate-600" />
            Complete Quiz History
          </h2>
          <button
            onClick={() => onStartQuiz()}
            className="text-xs font-bold text-emerald-700 hover:underline cursor-pointer"
          >
            Play New Quiz
          </button>
        </div>

        {user.quizHistory && user.quizHistory.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 text-2xs uppercase tracking-wider">
                  <th className="py-2.5 px-3">Subject / Topic</th>
                  <th className="py-2.5 px-3">Difficulty</th>
                  <th className="py-2.5 px-3">Score</th>
                  <th className="py-2.5 px-3">Accuracy</th>
                  <th className="py-2.5 px-3">XP Earned</th>
                  <th className="py-2.5 px-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {user.quizHistory.map((q, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80">
                    <td className="py-3 px-3 font-bold text-slate-900">
                      {q.subjectTitle}
                      <span className="block text-3xs text-slate-400 font-normal">{q.chapterTitle}</span>
                    </td>
                    <td className="py-3 px-3 uppercase text-3xs font-bold">
                      <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-200">
                        {q.difficulty}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-semibold">
                      {q.score} / {q.totalQuestions}
                    </td>
                    <td className="py-3 px-3 font-bold">
                      <span className={q.accuracy >= 75 ? 'text-emerald-600' : 'text-amber-600'}>
                        {q.accuracy}%
                      </span>
                    </td>
                    <td className="py-3 px-3 text-amber-600 font-bold">
                      +{q.xpEarned} XP
                    </td>
                    <td className="py-3 px-3 text-slate-400 text-2xs">
                      {new Date(q.timestamp).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-slate-400 text-xs">
            No quiz records found yet. Play a quiz game to start building your statistics!
          </div>
        )}
      </div>
    </div>
  );
};
