import React from 'react';
import { User, School, MapPin, Mail, Award, Flame, Zap, Shield, LogOut, CheckCircle2 } from 'lucide-react';
import { UserProfile, BoardType } from '../types';
import { SINDH_BOARDS } from '../data/curriculumData';

interface ProfileViewProps {
  user: UserProfile;
  currentBoard: BoardType;
  setCurrentBoard: (board: BoardType) => void;
  onLogout: () => void;
  onNavigateTab: (tab: string) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  user,
  currentBoard,
  setCurrentBoard,
  onLogout,
  onNavigateTab
}) => {
  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12 animate-in fade-in duration-300">
      {/* Profile Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white font-black text-2xl flex items-center justify-center shadow-md shadow-emerald-600/20">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                  {user.name}
                </h1>
                {user.role === 'admin' ? (
                  <span className="text-3xs uppercase font-bold bg-purple-100 text-purple-800 border border-purple-300 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Shield className="w-3 h-3 text-purple-700" /> Admin
                  </span>
                ) : (
                  <span className="text-3xs uppercase font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-md">
                    Student
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> {user.email}
              </p>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-xl text-xs font-bold transition-colors cursor-pointer self-start sm:self-auto"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Academic Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <span className="text-2xs font-bold text-slate-400 block uppercase">EXAMINATION BOARD</span>
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 text-sm">{currentBoard}</span>
              <select
                aria-label="Change active Sindh board"
                value={currentBoard}
                onChange={(e) => setCurrentBoard(e.target.value as BoardType)}
                className="bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs font-semibold cursor-pointer"
              >
                {SINDH_BOARDS.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <p className="text-3xs text-slate-500">
              Syllabus, chapters, and past questions adjust to your chosen board.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <span className="text-2xs font-bold text-slate-400 block uppercase">INSTITUTION</span>
            <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <School className="w-4 h-4 text-emerald-600" />
              <span>{user.school || 'EAB Haroon Bharia College'}</span>
            </div>
            <p className="text-3xs text-slate-500">
              Class 9 Matriculation Batch
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-center">
            <span className="text-2xs font-bold text-emerald-800 block">TOTAL XP</span>
            <span className="text-xl sm:text-2xl font-black text-emerald-700 flex items-center justify-center gap-1 mt-1">
              <Zap className="w-4 h-4" /> {user.xp}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 text-center">
            <span className="text-2xs font-bold text-amber-800 block">STUDY LEVEL</span>
            <span className="text-xl sm:text-2xl font-black text-amber-700 flex items-center justify-center gap-1 mt-1">
              <Award className="w-4 h-4" /> Lvl {user.level}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 text-center">
            <span className="text-2xs font-bold text-rose-800 block">STREAK</span>
            <span className="text-xl sm:text-2xl font-black text-rose-700 flex items-center justify-center gap-1 mt-1">
              <Flame className="w-4 h-4 fill-rose-600" /> {user.streak}d
            </span>
          </div>
        </div>

        {/* Admin Portal Shortcut if Admin */}
        {user.role === 'admin' && (
          <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs">
              <Shield className="w-5 h-5 text-purple-700 shrink-0" />
              <div>
                <strong className="text-purple-900 block">Administrator Account Verified</strong>
                <span className="text-purple-700 text-2xs">You have full access to student roster, analytics, and tracking.</span>
              </div>
            </div>
            <button
              onClick={() => onNavigateTab('admin')}
              className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-xl text-xs transition-colors shrink-0 cursor-pointer"
            >
              Open Admin Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
