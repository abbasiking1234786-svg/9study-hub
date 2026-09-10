import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  FileQuestion, 
  Gamepad2, 
  FileText, 
  Flame, 
  Trophy, 
  User, 
  ShieldCheck, 
  LogOut, 
  Search, 
  Menu, 
  X,
  Sparkles,
  MapPin
} from 'lucide-react';
import { UserProfile, BoardType } from '../types';
import { SINDH_BOARDS } from '../data/curriculumData';

interface HeaderProps {
  user: UserProfile;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentBoard: BoardType;
  setCurrentBoard: (board: BoardType) => void;
  onOpenSearch: () => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  activeTab,
  setActiveTab,
  currentBoard,
  setCurrentBoard,
  onOpenSearch,
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, emoji: '🏠' },
    { id: 'subjects', label: 'Subjects', icon: BookOpen, emoji: '📚' },
    { id: 'questions', label: 'Questions', icon: FileQuestion, emoji: '📝' },
    { id: 'quiz', label: 'Quiz', icon: Gamepad2, emoji: '🎮', highlight: true },
    { id: 'pastpapers', label: 'Past Papers', icon: FileText, emoji: '📄' },
    { id: 'progress', label: 'Progress', icon: Flame, emoji: '🔥' },
    { id: 'achievements', label: 'Achievements', icon: Trophy, emoji: '🏆' },
    { id: 'profile', label: 'Profile', icon: User, emoji: '👤' },
  ];

  if (user.role === 'admin') {
    navItems.push({
      id: 'admin',
      label: 'Admin Dashboard',
      icon: ShieldCheck,
      emoji: '👑',
      highlight: false
    });
  }

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-xs">
      {/* Top Banner with Required Attribution and Board Selector */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-tight text-amber-300 flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-amber-300" />
              9Study Hub
            </span>
            <span className="hidden sm:inline text-emerald-200">|</span>
            <span className="text-emerald-100 font-medium">
              Created by <span className="text-white font-semibold underline decoration-amber-400 decoration-2 underline-offset-2">M. Mubashir</span> (EAB Haroon Bharia College)
            </span>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {/* Board Selector */}
            <div className="flex items-center gap-1 bg-emerald-900/60 rounded-lg px-2.5 py-1 border border-emerald-600/40 text-xs">
              <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span className="text-emerald-200 hidden md:inline">Board:</span>
              <select
                aria-label="Select Sindh Examination Board"
                value={currentBoard}
                onChange={(e) => setCurrentBoard(e.target.value as BoardType)}
                className="bg-transparent text-white font-semibold cursor-pointer focus:outline-hidden text-xs"
              >
                {SINDH_BOARDS.map((b) => (
                  <option key={b} value={b} className="bg-emerald-900 text-white">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Quick Streak & XP Widget */}
            <div className="flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-400/30 rounded-lg px-2 py-1 font-bold text-xs">
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>{user.streak}d streak</span>
            </div>

            <div className="flex items-center gap-1 bg-teal-900/60 text-emerald-200 rounded-lg px-2 py-1 font-semibold text-xs border border-teal-600/30">
              <span className="text-amber-300 font-bold">{user.xp}</span> XP
              <span className="text-xs bg-emerald-700 text-white px-1.5 py-0.2 rounded-sm ml-1">Lvl {user.level}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white font-black text-xl shadow-md shadow-emerald-500/20 border border-emerald-400/40">
              9
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 flex items-center gap-1.5">
                9Study Hub
                <span className="text-2xs uppercase tracking-wider bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded-md">
                  Sindh Class 9
                </span>
              </div>
              <div className="text-2xs text-slate-500 hidden sm:block">
                Exam Prep & Funny Learning Game
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              const isAdmin = item.id === 'admin';
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? isAdmin
                        ? 'bg-purple-700 text-white shadow-xs'
                        : 'bg-emerald-600 text-white shadow-xs shadow-emerald-600/20'
                      : isAdmin
                      ? 'text-purple-700 hover:bg-purple-50 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  } ${item.highlight && !isActive ? 'ring-1 ring-amber-400/50 bg-amber-50/50 text-amber-900' : ''}`}
                >
                  <span className="text-sm">{item.emoji}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Buttons: Search & Profile/Logout */}
          <div className="flex items-center gap-2">
            <button
              id="global-search-trigger-btn"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-500 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors border border-slate-200"
              title="Search syllabus, formulas, MCQs"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden md:inline">Search...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-3xs font-mono bg-white text-slate-500 rounded-sm border border-slate-200">
                Ctrl+K
              </kbd>
            </button>

            <button
              id="header-logout-btn"
              onClick={onLogout}
              className="flex items-center gap-1.5 px-2.5 py-2 text-xs font-semibold text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              title="Sign out of 9Study Hub"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-nav-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1.5 shadow-lg animate-in slide-in-from-top-2">
          <div className="px-2 py-1 text-xs text-slate-500 font-medium border-b border-slate-100 mb-2">
            Student: <span className="font-bold text-slate-900">{user.name}</span> ({user.role})
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const isAdmin = item.id === 'admin';
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? isAdmin
                        ? 'bg-purple-700 text-white'
                        : 'bg-emerald-600 text-white'
                      : isAdmin
                      ? 'bg-purple-50 text-purple-800'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-base">{item.emoji}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
