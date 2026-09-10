import React, { useState } from 'react';
import { Sparkles, Shield, User, Lock, Mail, School, ArrowRight, CheckCircle2, Flame, Award } from 'lucide-react';
import { SINDH_BOARDS } from '../data/curriculumData';
import { BoardType, UserProfile } from '../types';
import { loginUser, registerUser } from '../services/api';

interface AuthScreenProps {
  onAuthSuccess: (user: UserProfile) => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [school, setSchool] = useState('EAB Haroon Bharia College');
  const [board, setBoard] = useState<BoardType>('BSEK Karachi');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isLogin) {
        const res = await loginUser(email, password);
        onAuthSuccess(res.user);
      } else {
        const res = await registerUser({
          name,
          email,
          password,
          board,
          school
        });
        onAuthSuccess(res.user);
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoStudentLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await loginUser('hamza@student.pk', 'Student123');
      onAuthSuccess(res.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDemoAdminLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await loginUser('admin@9studyhub.pk', 'AdminPassword123');
      onAuthSuccess(res.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-emerald-950 text-slate-100 flex flex-col justify-between p-4 sm:p-6 md:p-8">
      {/* Top Attribution Header */}
      <header className="max-w-4xl mx-auto w-full text-center pt-2 pb-6">
        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          Sindh & Pakistan Examination Boards Portal
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
          9Study Hub
        </h1>
        <p className="text-sm sm:text-base font-medium text-emerald-200">
          Created by <span className="text-amber-300 font-bold">M. Mubashir</span> (EAB Haroon Bharia College)
        </p>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-lg mx-auto">
          "Mushkil topic ko easy bana do." Complete Class 9 syllabus, exam notes, past papers, and a 4-level funny quiz game!
        </p>
      </header>

      {/* Main Authentication Card */}
      <main className="max-w-md w-full mx-auto bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-emerald-950/50">
        {/* Tab Switcher */}
        <div className="flex bg-slate-800/90 p-1 rounded-xl mb-6 border border-slate-700">
          <button
            type="button"
            id="auth-tab-login"
            onClick={() => { setIsLogin(true); setError(null); }}
            className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              isLogin 
                ? 'bg-emerald-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Student Login
          </button>
          <button
            type="button"
            id="auth-tab-signup"
            onClick={() => { setIsLogin(false); setError(null); }}
            className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              !isLogin 
                ? 'bg-emerald-600 text-white shadow-md' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Create Account
          </button>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-300 text-xs p-3 rounded-lg mb-4 flex items-start gap-2">
            <span className="font-bold shrink-0">⚠️ Error:</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    id="signup-name-input"
                    type="text"
                    required
                    placeholder="e.g. Muhammad Bilal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-sm text-white focus:outline-hidden focus:border-emerald-500 placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Select Board
                  </label>
                  <select
                    id="signup-board-select"
                    value={board}
                    onChange={(e) => setBoard(e.target.value as BoardType)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-hidden focus:border-emerald-500 cursor-pointer"
                  >
                    {SINDH_BOARDS.map((b) => (
                      <option key={b} value={b} className="bg-slate-900 text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    School / College
                  </label>
                  <div className="relative">
                    <School className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      id="signup-school-input"
                      type="text"
                      placeholder="School name"
                      value={school}
                      onChange={(e) => setSchool(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-sm text-white focus:outline-hidden focus:border-emerald-500 placeholder:text-slate-500"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                id="auth-email-input"
                type="email"
                required
                placeholder="student@9studyhub.pk"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-sm text-white focus:outline-hidden focus:border-emerald-500 placeholder:text-slate-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                id="auth-password-input"
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-sm text-white focus:outline-hidden focus:border-emerald-500 placeholder:text-slate-500"
              />
            </div>
          </div>

          <button
            id="auth-submit-btn"
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-700/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <span>Connecting to 9Study Hub...</span>
            ) : (
              <>
                <span>{isLogin ? 'Enter 9Study Hub' : 'Register & Start Learning'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Quick Test Logins */}
        <div className="mt-6 pt-5 border-t border-slate-800">
          <div className="text-2xs uppercase tracking-wider text-slate-400 font-bold text-center mb-3">
            Quick One-Click Test Accounts
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              id="demo-student-login-btn"
              type="button"
              onClick={handleDemoStudentLogin}
              disabled={loading}
              className="flex items-center justify-center gap-1.5 p-2 bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 rounded-xl text-xs font-medium transition-colors"
            >
              <User className="w-3.5 h-3.5 text-emerald-400" />
              <span>Demo Student</span>
            </button>

            <button
              id="demo-admin-login-btn"
              type="button"
              onClick={handleDemoAdminLogin}
              disabled={loading}
              className="flex items-center justify-center gap-1.5 p-2 bg-purple-950/50 hover:bg-purple-900/50 text-purple-200 border border-purple-800/60 rounded-xl text-xs font-bold transition-colors"
            >
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Admin (M. Mubashir)</span>
            </button>
          </div>
        </div>

        {/* Learning perks */}
        <div className="mt-5 bg-slate-800/50 rounded-xl p-3 border border-slate-700/50 text-2xs text-slate-400 space-y-1.5">
          <div className="flex items-center gap-1.5 text-emerald-300 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Sindh Boards Verified Syllabus & Past Papers</span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-300 font-medium">
            <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>4-Level Extreme Quiz Game with XP & Streaks</span>
          </div>
          <div className="flex items-center gap-1.5 text-purple-300 font-medium">
            <Award className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span>Persistent Student Progress & Live Admin Monitoring</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-400 py-4">
        © 2026 9Study Hub. Created by M. Mubashir (EAB Haroon Bharia College). All rights reserved.
      </footer>
    </div>
  );
};
