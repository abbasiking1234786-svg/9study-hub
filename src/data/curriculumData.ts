import { Subject } from '../types';
import { PHYSICS_SUBJECT } from './physicsData';
import { MATH_SUBJECT } from './mathData';
import { CHEMISTRY_SUBJECT } from './chemistryData';
import { BIOLOGY_SUBJECT } from './biologyData';
import { COMPUTER_SUBJECT } from './computerData';
import { 
  ENGLISH_SUBJECT, 
  URDU_SUBJECT, 
  ISLAMIAT_SUBJECT, 
  PAK_STUDIES_SUBJECT, 
  SINDHI_SUBJECT 
} from './humanitiesData';

export const SINDH_SUBJECTS: Subject[] = [
  PHYSICS_SUBJECT,
  MATH_SUBJECT,
  CHEMISTRY_SUBJECT,
  BIOLOGY_SUBJECT,
  COMPUTER_SUBJECT,
  ENGLISH_SUBJECT,
  URDU_SUBJECT,
  ISLAMIAT_SUBJECT,
  PAK_STUDIES_SUBJECT,
  SINDHI_SUBJECT
];

export const SINDH_BOARDS = [
  'BSEK Karachi',
  'BISE Hyderabad',
  'BISE Sukkur',
  'BISE Larkana',
  'BISE Mirpurkhas',
  'FBISE Islamabad'
] as const;

export const DEFAULT_BADGES = [
  { id: 'first_quiz', title: 'Quiz Novice', description: 'Completed your first 9Study Hub practice quiz!', icon: '🏆', xpBonus: 50 },
  { id: 'streak_3', title: 'Hot Streak', description: 'Maintained a 3-day continuous study streak!', icon: '🔥', xpBonus: 100 },
  { id: 'brain_boss', title: 'Brain Boss', description: 'Scored 100% on any Class 9 quiz!', icon: '🧠', xpBonus: 150 },
  { id: 'extreme_survivor', title: 'Extreme Survivor', description: 'Conquered an EXTREME difficulty quiz!', icon: '⚡', xpBonus: 200 },
  { id: 'chapter_crusher', title: 'Chapter Crusher', description: 'Mastered 3 or more full syllabus chapters!', icon: '📚', xpBonus: 150 },
  { id: 'study_master', title: '9Study Master', description: 'Achieved Level 5 Position Holder status!', icon: '👑', xpBonus: 300 }
];

export const FUNNY_QUIZ_MESSAGES = {
  correct: [
    'Bro, that answer was cooking! 🔥',
    'Big brain moment 🧠✨',
    'Absolute Pakistani board topper energy! 🏆',
    'BSEK examiners are already shaking! 😂',
    'Cooking with high heat! Chef special! 🍳🔥',
    'MashaAllah, textbook level precision! 💯',
    'Mashhoor student moment! Take a bow! 👏',
    'One more! You got this! 🚀'
  ],
  wrong: [
    'Oops! The textbook is judging you 😂',
    'Bro is guessing like it’s a ludo game 🎲',
    'Chai break time? Refocus and strike back! ☕',
    'Even the question paper felt that one 💀',
    'Ammi’s chappal warning detected! 🩴😂',
    'Don’t worry, revision karlo sab set ho jayega! 💪',
    'Wrong, but respect the confidence! 🫡'
  ],
  streak: [
    '🔥 3 IN A ROW! You’re on absolute fire!',
    '⚡ 5 STREAK! Unstoppable study machine!',
    '👑 10 STREAK! Karachi Board Position Holder confirmed!'
  ],
  extremeModeWarning: '⚡ EXTREME MODE ACTIVATED! Tough board calculations ahead. No room for silly mistakes! 💀'
};
