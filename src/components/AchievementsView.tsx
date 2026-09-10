import React from 'react';
import { Trophy, Award, Sparkles, Flame, CheckCircle, Lock, Zap } from 'lucide-react';
import { UserProfile } from '../types';
import { DEFAULT_BADGES } from '../data/curriculumData';

interface AchievementsViewProps {
  user: UserProfile;
  onNavigateTab: (tab: string) => void;
}

export const AchievementsView: React.FC<AchievementsViewProps> = ({
  user,
  onNavigateTab
}) => {
  const earnedBadgeIds = new Set(user.badges?.map(b => b.id) || []);

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-300">
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-emerald-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-amber-700/60 border border-amber-300/30 px-3 py-1 rounded-full text-xs font-bold text-amber-100">
          <Trophy className="w-4 h-4 text-amber-200" />
          <span>9Study Hall of Fame & Badges</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
          Student Trophies & Milestones
        </h1>
        <p className="text-xs sm:text-sm text-amber-50 max-w-xl">
          Unlock badges as you complete chapters, maintain your daily study streaks, and conquer Extreme Quiz difficulty!
        </p>
      </div>

      {/* Gamification Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-black text-xl">
            🏆
          </div>
          <div>
            <span className="text-2xs font-bold text-slate-400 block">BADGES UNLOCKED</span>
            <span className="text-xl font-black text-slate-900">
              {earnedBadgeIds.size} of {DEFAULT_BADGES.length}
            </span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-xl">
            ⚡
          </div>
          <div>
            <span className="text-2xs font-bold text-slate-400 block">PLAYER LEVEL</span>
            <span className="text-xl font-black text-slate-900">
              Level {user.level} ({user.xp} XP)
            </span>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-black text-xl">
            🔥
          </div>
          <div>
            <span className="text-2xs font-bold text-slate-400 block">DAILY STREAK</span>
            <span className="text-xl font-black text-slate-900">
              {user.streak} Days Active
            </span>
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" />
          All Available Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEFAULT_BADGES.map(badge => {
            const isUnlocked = earnedBadgeIds.has(badge.id);

            return (
              <div
                key={badge.id}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  isUnlocked
                    ? 'bg-amber-50/40 border-amber-300/80 shadow-xs'
                    : 'bg-slate-50/50 border-slate-200/80 opacity-70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{badge.icon}</span>
                    {isUnlocked ? (
                      <span className="text-3xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Unlocked
                      </span>
                    ) : (
                      <span className="text-3xs font-bold bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Lock className="w-3 h-3" /> Locked
                      </span>
                    )}
                  </div>

                  <h3 className="font-black text-slate-900 text-sm mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {badge.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-2xs">
                  <span className="font-bold text-amber-600">+{badge.xpBonus} Bonus XP</span>
                  {!isUnlocked && (
                    <button
                      onClick={() => onNavigateTab('quiz')}
                      className="text-emerald-700 font-bold hover:underline cursor-pointer"
                    >
                      Play to Unlock &rarr;
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
