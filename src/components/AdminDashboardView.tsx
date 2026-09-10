import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Users, 
  TrendingUp, 
  Award, 
  Flame, 
  CheckCircle2, 
  AlertCircle, 
  Search, 
  Clock, 
  Eye, 
  X, 
  BookOpen, 
  Zap,
  RefreshCw,
  ShieldAlert
} from 'lucide-react';
import { UserProfile, Subject } from '../types';
import { fetchAdminStudents, fetchAdminStats } from '../services/api';

interface AdminDashboardViewProps {
  user: UserProfile;
  subjects: Subject[];
}

export const AdminDashboardView: React.FC<AdminDashboardViewProps> = ({
  user,
  subjects
}) => {
  const [students, setStudents] = useState<any[]>([]);
  const [stats, setStats] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);

  // Total chapters across subjects for percentage calculation
  const totalChaptersCount = subjects.reduce((acc, s) => acc + s.chapters.length, 0);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [studentsData, statsData] = await Promise.all([
        fetchAdminStudents(),
        fetchAdminStats()
      ]);
      setStudents(studentsData);
      setStats(statsData);
    } catch (err: any) {
      setError(err.message || 'Unauthorized: Only administrator can access this panel.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.role === 'admin') {
      loadData();
    }
  }, [user.role]);

  // If user is not admin, deny access immediately
  if (user.role !== 'admin') {
    return (
      <div className="max-w-md mx-auto my-12 bg-white border border-red-200 rounded-3xl p-8 shadow-xl text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-black text-slate-900">
          Access Denied (403)
        </h2>
        <p className="text-xs text-slate-600">
          You are currently logged in as a normal student. Only the administrator account (<code className="bg-slate-100 px-1 py-0.5 rounded-sm">M. Mubashir</code>) can access student records and the admin dashboard.
        </p>
      </div>
    );
  }

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.board?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-300">
      {/* Admin Header Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-purple-800/80 border border-purple-500/30 px-3 py-1 rounded-full text-xs font-bold text-amber-300 mb-2">
            <Shield className="w-3.5 h-3.5" />
            <span>Administrator Security Portal • 9Study Hub</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Student Monitoring & Analytics Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-purple-200 max-w-xl">
            Logged in as <strong className="text-white">{user.name}</strong>. Monitor real-time student registration, syllabus progress, and test accuracy.
          </p>
        </div>

        <button
          onClick={loadData}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2.5 bg-purple-700 hover:bg-purple-600 text-white rounded-xl text-xs font-bold transition-all shadow-md self-start md:self-auto cursor-pointer disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh Data</span>
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-2xl text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-2xs font-bold uppercase">TOTAL STUDENTS</span>
            <Users className="w-4 h-4 text-purple-600" />
          </div>
          <span className="text-2xl font-black text-slate-900">
            {stats?.totalStudents ?? students.length}
          </span>
          <span className="text-3xs text-slate-400 block mt-0.5">Registered accounts</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-2xs font-bold uppercase">QUIZ SESSIONS</span>
            <Award className="w-4 h-4 text-amber-500" />
          </div>
          <span className="text-2xl font-black text-slate-900">
            {stats?.totalQuizzesTaken ?? 0}
          </span>
          <span className="text-3xs text-slate-400 block mt-0.5">Attempted exam tests</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-2xs font-bold uppercase">AVG ACCURACY</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <span className="text-2xl font-black text-emerald-600">
            {stats?.avgAccuracy ?? 0}%
          </span>
          <span className="text-3xs text-slate-400 block mt-0.5">Board readiness rate</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-2xs font-bold uppercase">TOTAL PLATFORM XP</span>
            <Zap className="w-4 h-4 text-amber-500" />
          </div>
          <span className="text-2xl font-black text-amber-600">
            {stats?.totalPlatformXP ?? 0}
          </span>
          <span className="text-3xs text-slate-400 block mt-0.5">Accumulated points</span>
        </div>
      </div>

      {/* Student Roster Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden space-y-4 p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-base font-extrabold text-slate-900">
              Registered Student Roster
            </h2>
            <p className="text-xs text-slate-500">
              Click "Inspect" on any student to inspect their detailed subject scores, quiz answers, and activity.
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search student or board..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-purple-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 text-2xs uppercase tracking-wider">
                <th className="py-2.5 px-3">Student Name</th>
                <th className="py-2.5 px-3">Board / School</th>
                <th className="py-2.5 px-3">Progress</th>
                <th className="py-2.5 px-3">Level / XP</th>
                <th className="py-2.5 px-3">Streak</th>
                <th className="py-2.5 px-3">Tests & Accuracy</th>
                <th className="py-2.5 px-3">Last Active</th>
                <th className="py-2.5 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredStudents.map((s) => {
                const completedCount = s.completedChapters?.length || 0;
                const progressPct = totalChaptersCount > 0 
                  ? Math.min(100, Math.round((completedCount / totalChaptersCount) * 100))
                  : 0;

                const quizzesCount = s.quizHistory?.length || 0;
                let totalCorrect = 0;
                let totalQuestions = 0;
                s.quizHistory?.forEach((q: any) => {
                  totalCorrect += q.score;
                  totalQuestions += q.totalQuestions;
                });
                const acc = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

                return (
                  <tr key={s.id} className="hover:bg-slate-50/80">
                    <td className="py-3 px-3">
                      <div className="font-bold text-slate-900">{s.name}</div>
                      <div className="text-3xs text-slate-400">{s.email}</div>
                    </td>

                    <td className="py-3 px-3">
                      <div className="font-semibold text-slate-800">{s.board}</div>
                      <div className="text-3xs text-slate-500 truncate max-w-[150px]">{s.school || 'Haroon Bharia College'}</div>
                    </td>

                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className="bg-emerald-500 h-full rounded-full" 
                            style={{ width: `${progressPct}%` }}
                          />
                        </div>
                        <span className="font-bold text-slate-800 text-2xs">{progressPct}%</span>
                      </div>
                      <span className="text-3xs text-slate-400">{completedCount} chapters done</span>
                    </td>

                    <td className="py-3 px-3">
                      <div className="font-bold text-amber-600">Lvl {s.level}</div>
                      <div className="text-3xs text-slate-500">{s.xp} XP</div>
                    </td>

                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1 font-bold text-amber-500">
                        <Flame className="w-3.5 h-3.5 fill-amber-500" />
                        <span>{s.streak}d</span>
                      </span>
                    </td>

                    <td className="py-3 px-3">
                      <div className="font-bold text-slate-800">{quizzesCount} quizzes</div>
                      <div className="text-3xs text-slate-500">
                        Accuracy: <strong className={acc >= 75 ? 'text-emerald-600' : 'text-amber-600'}>{acc}%</strong> ({totalCorrect}/{totalQuestions})
                      </div>
                    </td>

                    <td className="py-3 px-3 text-2xs text-slate-400">
                      {new Date(s.lastActive || s.createdAt).toLocaleDateString()}
                    </td>

                    <td className="py-3 px-3 text-right">
                      <button
                        onClick={() => setSelectedStudent(s)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold rounded-lg text-2xs transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Student Inspection Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 space-y-5 animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <div className="text-2xs font-bold text-purple-600 uppercase tracking-wider">
                  STUDENT RECORD DOSSIER
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  {selectedStudent.name}
                </h3>
                <p className="text-xs text-slate-500">{selectedStudent.email} • {selectedStudent.board}</p>
              </div>

              <button
                onClick={() => setSelectedStudent(null)}
                className="p-2 rounded-xl text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="text-2xs text-slate-400 block">LEVEL</span>
                <span className="font-bold text-slate-900">{selectedStudent.level}</span>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl">
                <span className="text-2xs text-emerald-700 block">XP</span>
                <span className="font-bold text-emerald-700">{selectedStudent.xp}</span>
              </div>
              <div className="p-3 bg-amber-50 rounded-xl">
                <span className="text-2xs text-amber-700 block">STREAK</span>
                <span className="font-bold text-amber-700">{selectedStudent.streak} Days</span>
              </div>
              <div className="p-3 bg-purple-50 rounded-xl">
                <span className="text-2xs text-purple-700 block">COMPLETED</span>
                <span className="font-bold text-purple-700">{selectedStudent.completedChapters?.length || 0} Ch</span>
              </div>
            </div>

            {/* Quiz History */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Recent Quiz Attempts ({selectedStudent.quizHistory?.length || 0})
              </h4>
              {selectedStudent.quizHistory && selectedStudent.quizHistory.length > 0 ? (
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {selectedStudent.quizHistory.map((q: any, qIdx: number) => (
                    <div key={qIdx} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs flex items-center justify-between">
                      <div>
                        <span className="font-bold text-slate-900">{q.subjectTitle}</span>
                        <span className="text-2xs text-slate-500 block">{q.chapterTitle} • {q.difficulty.toUpperCase()}</span>
                      </div>
                      <div className="text-right">
                        <span className={`font-bold ${q.accuracy >= 75 ? 'text-emerald-600' : 'text-amber-600'}`}>
                          {q.score} / {q.totalQuestions} ({q.accuracy}%)
                        </span>
                        <div className="text-3xs text-slate-400">+{q.xpEarned} XP</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-400">No quizzes recorded for this student yet.</p>
              )}
            </div>

            {/* Badges Earned */}
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Earned Badges ({selectedStudent.badges?.length || 0})
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedStudent.badges?.map((b: any, bIdx: number) => (
                  <span key={bIdx} className="px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-lg text-xs font-bold text-amber-900 flex items-center gap-1">
                    <span>{b.icon}</span>
                    <span>{b.title}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedStudent(null)}
                className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
