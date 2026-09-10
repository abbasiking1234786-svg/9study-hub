import React, { useState, useEffect } from 'react';
import { 
  fetchCurrentUser, 
  logoutUser, 
  toggleChapterProgress, 
  submitQuizResult 
} from './services/api';
import { UserProfile, BoardType } from './types';
import { SINDH_SUBJECTS } from './data/curriculumData';
import { Header } from './components/Header';
import { AuthScreen } from './components/AuthScreen';
import { DashboardView } from './components/DashboardView';
import { SubjectsView } from './components/SubjectsView';
import { QuestionsView } from './components/QuestionsView';
import { QuizGameView } from './components/QuizGameView';
import { PastPapersView } from './components/PastPapersView';
import { ProgressView } from './components/ProgressView';
import { AchievementsView } from './components/AchievementsView';
import { ProfileView } from './components/ProfileView';
import { AdminDashboardView } from './components/AdminDashboardView';
import { SearchBarModal } from './components/SearchBarModal';
import { Sparkles, Heart } from 'lucide-react';

export default function App() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>('home');
  const [currentBoard, setCurrentBoard] = useState<BoardType>('BSEK Karachi');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('physics');
  const [selectedChapterId, setSelectedChapterId] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Check auth session on launch
  useEffect(() => {
    async function checkAuth() {
      try {
        const currentUser = await fetchCurrentUser();
        if (currentUser) {
          setUser(currentUser);
          if (currentUser.board) {
            setCurrentBoard(currentUser.board as BoardType);
          }
        }
      } catch (err) {
        console.error('Session check failed:', err);
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, []);

  // Keyboard shortcut Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleAuthSuccess = (authenticatedUser: UserProfile) => {
    setUser(authenticatedUser);
    if (authenticatedUser.board) {
      setCurrentBoard(authenticatedUser.board as BoardType);
    }
    setActiveTab('home');
  };

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
    setActiveTab('home');
  };

  const handleToggleChapter = async (chapterId: string) => {
    try {
      const res = await toggleChapterProgress(chapterId);
      setUser(res.user);
    } catch (err) {
      console.error('Failed to toggle chapter:', err);
    }
  };

  const handleSubmitQuiz = async (payload: {
    subjectId: string;
    subjectTitle: string;
    chapterTitle?: string;
    difficulty: string;
    score: number;
    totalQuestions: number;
    xpEarned: number;
    accuracy: number;
  }) => {
    try {
      const res = await submitQuizResult(payload);
      setUser(res.user);
    } catch (err) {
      console.error('Failed to save quiz result:', err);
    }
  };

  const handleNavigateToContent = (subjectId: string, chapterId: string) => {
    setSelectedSubjectId(subjectId);
    setSelectedChapterId(chapterId);
    setActiveTab('subjects');
  };

  const handleStartQuizFromAnywhere = (subjectId?: string) => {
    if (subjectId) {
      setSelectedSubjectId(subjectId);
    }
    setActiveTab('quiz');
  };

  // Initial Loading Splash
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 space-y-4 text-center">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center font-black text-2xl animate-pulse shadow-xl shadow-emerald-500/20">
          9
        </div>
        <div>
          <h1 className="text-2xl font-black tracking-tight text-white">
            9Study Hub
          </h1>
          <p className="text-xs text-emerald-300 font-semibold mt-0.5">
            Created by M. Mubashir (EAB Haroon Bharia College)
          </p>
        </div>
        <p className="text-xs text-slate-400 animate-pulse">
          Loading Class 9 syllabus, exam notes, and game engine...
        </p>
      </div>
    );
  }

  // Not authenticated -> Show Welcome Auth Screen (Login / Register)
  if (!user) {
    return <AuthScreen onAuthSuccess={handleAuthSuccess} />;
  }

  // Authenticated -> Render Full 9Study Hub Portal
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
      {/* Top Header */}
      <Header
        user={user}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentBoard={currentBoard}
        setCurrentBoard={setCurrentBoard}
        onOpenSearch={() => setIsSearchOpen(true)}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 pt-6 flex-1">
        {activeTab === 'home' && (
          <DashboardView
            user={user}
            subjects={SINDH_SUBJECTS}
            onSelectSubject={(subjId, chId) => {
              setSelectedSubjectId(subjId);
              setSelectedChapterId(chId);
              setActiveTab('subjects');
            }}
            onStartQuiz={handleStartQuizFromAnywhere}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'subjects' && (
          <SubjectsView
            subjects={SINDH_SUBJECTS}
            user={user}
            currentBoard={currentBoard}
            selectedSubjectId={selectedSubjectId}
            selectedChapterId={selectedChapterId}
            onSelectSubject={(subjId, chId) => {
              setSelectedSubjectId(subjId);
              setSelectedChapterId(chId);
            }}
            onToggleChapter={handleToggleChapter}
            onStartQuiz={(subjId) => {
              setSelectedSubjectId(subjId);
              setActiveTab('quiz');
            }}
          />
        )}

        {activeTab === 'questions' && (
          <QuestionsView
            subjects={SINDH_SUBJECTS}
            currentBoard={currentBoard}
            onStartQuiz={handleStartQuizFromAnywhere}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizGameView
            subjects={SINDH_SUBJECTS}
            user={user}
            initialSubjectId={selectedSubjectId}
            onSubmitQuiz={handleSubmitQuiz}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'pastpapers' && (
          <PastPapersView
            subjects={SINDH_SUBJECTS}
            currentBoard={currentBoard}
            setCurrentBoard={setCurrentBoard}
          />
        )}

        {activeTab === 'progress' && (
          <ProgressView
            user={user}
            subjects={SINDH_SUBJECTS}
            onStartQuiz={handleStartQuizFromAnywhere}
            onSelectSubject={(subjId) => {
              setSelectedSubjectId(subjId);
              setActiveTab('subjects');
            }}
          />
        )}

        {activeTab === 'achievements' && (
          <AchievementsView
            user={user}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileView
            user={user}
            currentBoard={currentBoard}
            setCurrentBoard={setCurrentBoard}
            onLogout={handleLogout}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'admin' && (
          <AdminDashboardView
            user={user}
            subjects={SINDH_SUBJECTS}
          />
        )}
      </main>

      {/* Global Search Bar Modal */}
      <SearchBarModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        subjects={SINDH_SUBJECTS}
        onNavigateToContent={handleNavigateToContent}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="space-y-0.5 text-center sm:text-left">
            <div className="font-extrabold text-slate-800 text-sm flex items-center justify-center sm:justify-start gap-1.5">
              <span>9Study Hub</span>
              <span className="text-3xs bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded-sm">
                Class 9 Sindh
              </span>
            </div>
            <p>
              Created by <strong className="text-slate-700">M. Mubashir</strong> (EAB Haroon Bharia College)
            </p>
            <p className="text-3xs text-emerald-700 font-semibold">
              “Mushkil topic ko easy bana do.” Complete Class 9 Sindh Board Exam Preparation Portal.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button 
              onClick={() => setActiveTab('subjects')}
              className="hover:text-emerald-600 transition-colors"
            >
              All 9 Subjects
            </button>
            <span>•</span>
            <button 
              onClick={() => setActiveTab('questions')}
              className="hover:text-emerald-600 transition-colors"
            >
              Question Bank
            </button>
            <span>•</span>
            <button 
              onClick={() => setActiveTab('quiz')}
              className="hover:text-emerald-600 transition-colors"
            >
              4-Level Quiz Game
            </button>
            <span>•</span>
            <button 
              onClick={() => setActiveTab('pastpapers')}
              className="hover:text-emerald-600 transition-colors"
            >
              Past Papers
            </button>
            {user.role === 'admin' && (
              <>
                <span>•</span>
                <button 
                  onClick={() => setActiveTab('admin')}
                  className="font-bold text-purple-700 hover:text-purple-900 transition-colors"
                >
                  Admin Portal
                </button>
              </>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
