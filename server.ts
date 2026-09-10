import express from 'express';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

app.use(express.json());

// Persistent Database Setup in data/db.json
const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

interface StoredUser {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  salt: string;
  role: 'student' | 'admin';
  board: string;
  school: string;
  xp: number;
  level: number;
  streak: number;
  bestScore: number;
  completedChapters: string[];
  quizHistory: any[];
  badges: any[];
  subjectStats: Record<string, { attempted: number; correct: number; wrong: number }>;
  lastActive: string;
  createdAt: string;
}

interface DatabaseSchema {
  users: StoredUser[];
  tokens: Record<string, string>; // token -> userId
}

function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
}

function generateInitialBadges(xp: number, quizCount: number, streak: number) {
  const allBadges = [
    { id: 'first_quiz', title: 'First Quiz', description: 'Completed your first 9Study Hub practice quiz!', icon: '🏆', unlockedAt: quizCount >= 1 ? '2026-09-01' : undefined },
    { id: 'streak_3', title: 'Hot Streak', description: 'Maintained a 3-day continuous study streak!', icon: '🔥', unlockedAt: streak >= 3 ? '2026-09-05' : undefined },
    { id: 'brain_boss', title: 'Brain Boss', description: 'Scored 100% on any Class 9 quiz!', icon: '🧠', unlockedAt: xp >= 300 ? '2026-09-04' : undefined },
    { id: 'extreme_survivor', title: 'Extreme Survivor', description: 'Conquered an EXTREME difficulty quiz!', icon: '⚡', unlockedAt: xp >= 600 ? '2026-09-06' : undefined },
    { id: 'chapter_crusher', title: 'Chapter Crusher', description: 'Mastered 3 or more full syllabus chapters!', icon: '📚', unlockedAt: xp >= 500 ? '2026-09-05' : undefined },
    { id: 'study_master', title: '9Study Master', description: 'Achieved Level 5 Position Holder status!', icon: '👑', unlockedAt: xp >= 1000 ? '2026-09-08' : undefined }
  ];
  return allBadges;
}

function seedDatabase(): DatabaseSchema {
  const adminSalt = crypto.randomBytes(16).toString('hex');
  const student1Salt = crypto.randomBytes(16).toString('hex');
  const student2Salt = crypto.randomBytes(16).toString('hex');
  const student3Salt = crypto.randomBytes(16).toString('hex');

  const admin: StoredUser = {
    id: 'admin_mubashir',
    name: 'M. Mubashir (Admin)',
    email: 'admin@9studyhub.pk',
    passwordHash: hashPassword('AdminPassword123', adminSalt),
    salt: adminSalt,
    role: 'admin',
    board: 'BSEK Karachi',
    school: 'EAB Haroon Bharia College',
    xp: 2500,
    level: 10,
    streak: 15,
    bestScore: 100,
    completedChapters: ['phy-ch1', 'phy-ch2', 'math-ch1', 'chem-ch1', 'eng-ch1'],
    quizHistory: [
      { id: 'q-init-1', subjectId: 'physics', subjectTitle: 'Physics', chapterTitle: 'Kinematics', difficulty: 'extreme', score: 5, totalQuestions: 5, xpEarned: 150, accuracy: 100, date: '2026-09-08' }
    ],
    badges: generateInitialBadges(2500, 15, 15),
    subjectStats: {
      physics: { attempted: 25, correct: 24, wrong: 1 },
      mathematics: { attempted: 20, correct: 19, wrong: 1 }
    },
    lastActive: new Date().toISOString(),
    createdAt: '2026-08-01T00:00:00.000Z'
  };

  const student1: StoredUser = {
    id: 'stud_hamza',
    name: 'Hamza Ali Abbasi',
    email: 'hamza@student.pk',
    passwordHash: hashPassword('Student123', student1Salt),
    salt: student1Salt,
    role: 'student',
    board: 'BSEK Karachi',
    school: 'EAB Haroon Bharia College',
    xp: 920,
    level: 4,
    streak: 6,
    bestScore: 100,
    completedChapters: ['phy-ch1', 'math-ch1', 'chem-ch1'],
    quizHistory: [
      { id: 'q-h1', subjectId: 'physics', subjectTitle: 'Physics', chapterTitle: 'Physical Quantities', difficulty: 'medium', score: 4, totalQuestions: 4, xpEarned: 80, accuracy: 100, date: '2026-09-09' },
      { id: 'q-h2', subjectId: 'mathematics', subjectTitle: 'Mathematics', chapterTitle: 'Real & Complex Numbers', difficulty: 'hard', score: 4, totalQuestions: 5, xpEarned: 120, accuracy: 80, date: '2026-09-08' }
    ],
    badges: generateInitialBadges(920, 8, 6),
    subjectStats: {
      physics: { attempted: 12, correct: 11, wrong: 1 },
      mathematics: { attempted: 10, correct: 8, wrong: 2 },
      chemistry: { attempted: 8, correct: 7, wrong: 1 }
    },
    lastActive: '2026-09-09T20:15:00.000Z',
    createdAt: '2026-08-15T00:00:00.000Z'
  };

  const student2: StoredUser = {
    id: 'stud_fatima',
    name: 'Fatima Noor',
    email: 'fatima@student.pk',
    passwordHash: hashPassword('Student123', student2Salt),
    salt: student2Salt,
    role: 'student',
    board: 'BISE Hyderabad',
    school: 'Govt Girls Model High School',
    xp: 680,
    level: 3,
    streak: 4,
    bestScore: 90,
    completedChapters: ['bio-ch1', 'eng-ch1'],
    quizHistory: [
      { id: 'q-f1', subjectId: 'biology', subjectTitle: 'Biology', chapterTitle: 'Introduction to Biology', difficulty: 'easy', score: 3, totalQuestions: 3, xpEarned: 45, accuracy: 100, date: '2026-09-09' }
    ],
    badges: generateInitialBadges(680, 5, 4),
    subjectStats: {
      biology: { attempted: 15, correct: 14, wrong: 1 },
      english: { attempted: 10, correct: 9, wrong: 1 }
    },
    lastActive: '2026-09-09T18:40:00.000Z',
    createdAt: '2026-08-20T00:00:00.000Z'
  };

  const student3: StoredUser = {
    id: 'stud_zain',
    name: 'Zain Ul Abideen',
    email: 'zain@student.pk',
    passwordHash: hashPassword('Student123', student3Salt),
    salt: student3Salt,
    role: 'student',
    board: 'BISE Sukkur',
    school: 'Public School Sukkur',
    xp: 410,
    level: 2,
    streak: 2,
    bestScore: 80,
    completedChapters: ['chem-ch1'],
    quizHistory: [
      { id: 'q-z1', subjectId: 'chemistry', subjectTitle: 'Chemistry', chapterTitle: 'Fundamentals of Chemistry', difficulty: 'medium', score: 3, totalQuestions: 4, xpEarned: 60, accuracy: 75, date: '2026-09-07' }
    ],
    badges: generateInitialBadges(410, 3, 2),
    subjectStats: {
      chemistry: { attempted: 8, correct: 6, wrong: 2 },
      physics: { attempted: 5, correct: 3, wrong: 2 }
    },
    lastActive: '2026-09-07T14:10:00.000Z',
    createdAt: '2026-08-25T00:00:00.000Z'
  };

  return {
    users: [admin, student1, student2, student3],
    tokens: {}
  };
}

function loadDB(): DatabaseSchema {
  try {
    if (fs.existsSync(DB_FILE)) {
      const raw = fs.readFileSync(DB_FILE, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading db.json, re-seeding:', err);
  }
  const initial = seedDatabase();
  saveDB(initial);
  return initial;
}

function saveDB(data: DatabaseSchema) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving db.json:', err);
  }
}

// Authentication Helpers
function getAuthUser(req: express.Request): StoredUser | null {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  const token = authHeader.split(' ')[1];
  const db = loadDB();
  const userId = db.tokens[token];
  if (!userId) return null;
  const user = db.users.find(u => u.id === userId);
  return user || null;
}

function sanitizeUser(user: StoredUser) {
  const { passwordHash, salt, ...safe } = user;
  return safe;
}

// ---------------- API ROUTES ----------------

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Auth: Register
app.post('/api/auth/register', (req, res) => {
  const { name, email, password, board, school, role } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email and password are required' });
  }

  const db = loadDB();
  const normalizedEmail = email.toLowerCase().trim();
  const existing = db.users.find(u => u.email.toLowerCase() === normalizedEmail);
  if (existing) {
    return res.status(400).json({ error: 'An account with this email already exists' });
  }

  const salt = crypto.randomBytes(16).toString('hex');
  const userRole = (role === 'admin' && normalizedEmail.includes('admin')) ? 'admin' : 'student';
  const newUser: StoredUser = {
    id: 'user_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    name: name.trim(),
    email: normalizedEmail,
    passwordHash: hashPassword(password, salt),
    salt,
    role: userRole,
    board: board || 'BSEK Karachi',
    school: school || 'EAB Haroon Bharia College',
    xp: 50, // Welcome bonus XP
    level: 1,
    streak: 1,
    bestScore: 0,
    completedChapters: [],
    quizHistory: [],
    badges: generateInitialBadges(50, 0, 1),
    subjectStats: {},
    lastActive: new Date().toISOString(),
    createdAt: new Date().toISOString()
  };

  const token = crypto.randomBytes(32).toString('hex');
  db.users.push(newUser);
  db.tokens[token] = newUser.id;
  saveDB(db);

  return res.json({
    token,
    user: sanitizeUser(newUser)
  });
});

// Auth: Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const db = loadDB();
  const normalizedEmail = email.toLowerCase().trim();
  const user = db.users.find(u => u.email.toLowerCase() === normalizedEmail);

  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const testHash = hashPassword(password, user.salt);
  if (testHash !== user.passwordHash) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  user.lastActive = new Date().toISOString();
  const token = crypto.randomBytes(32).toString('hex');
  db.tokens[token] = user.id;
  saveDB(db);

  return res.json({
    token,
    user: sanitizeUser(user)
  });
});

// Auth: Get Current User
app.get('/api/auth/me', (req, res) => {
  const user = getAuthUser(req);
  if (!user) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  return res.json({ user: sanitizeUser(user) });
});

// Auth: Logout
app.post('/api/auth/logout', (req, res) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    const db = loadDB();
    delete db.tokens[token];
    saveDB(db);
  }
  return res.json({ success: true });
});

// Student: Submit Quiz Result
app.post('/api/student/quiz-submit', (req, res) => {
  const user = getAuthUser(req);
  if (!user) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  const { subjectId, subjectTitle, chapterTitle, difficulty, score, totalQuestions, xpEarned, accuracy } = req.body;

  const db = loadDB();
  const targetUser = db.users.find(u => u.id === user.id);
  if (!targetUser) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Update XP & level
  const earnedXp = Number(xpEarned) || 20;
  targetUser.xp += earnedXp;
  targetUser.level = Math.floor(targetUser.xp / 250) + 1;

  // Streak calculation (if lastActive was yesterday or today)
  targetUser.streak = Math.max(1, targetUser.streak + 1);

  if (Number(score) > targetUser.bestScore) {
    targetUser.bestScore = Number(score);
  }

  // Record quiz entry
  const quizRecord = {
    id: 'quiz_' + Date.now(),
    subjectId: subjectId || 'general',
    subjectTitle: subjectTitle || 'Class 9 Subject',
    chapterTitle: chapterTitle || 'Chapter Practice',
    difficulty: difficulty || 'easy',
    score: Number(score),
    totalQuestions: Number(totalQuestions),
    xpEarned: earnedXp,
    accuracy: Number(accuracy) || Math.round((Number(score) / Number(totalQuestions)) * 100),
    date: new Date().toISOString().split('T')[0]
  };

  targetUser.quizHistory = [quizRecord, ...(targetUser.quizHistory || [])].slice(0, 50);

  // Update subject stats
  if (!targetUser.subjectStats) targetUser.subjectStats = {};
  if (!targetUser.subjectStats[subjectId]) {
    targetUser.subjectStats[subjectId] = { attempted: 0, correct: 0, wrong: 0 };
  }
  targetUser.subjectStats[subjectId].attempted += Number(totalQuestions);
  targetUser.subjectStats[subjectId].correct += Number(score);
  targetUser.subjectStats[subjectId].wrong += Math.max(0, Number(totalQuestions) - Number(score));

  // Update badges
  targetUser.badges = generateInitialBadges(targetUser.xp, targetUser.quizHistory.length, targetUser.streak);
  targetUser.lastActive = new Date().toISOString();

  saveDB(db);

  return res.json({
    user: sanitizeUser(targetUser),
    quizRecord,
    earnedXp,
    newLevel: targetUser.level
  });
});

// Student: Toggle Chapter Completed
app.post('/api/student/toggle-chapter', (req, res) => {
  const user = getAuthUser(req);
  if (!user) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  const { chapterId } = req.body;
  if (!chapterId) {
    return res.status(400).json({ error: 'chapterId is required' });
  }

  const db = loadDB();
  const targetUser = db.users.find(u => u.id === user.id);
  if (!targetUser) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (!targetUser.completedChapters) targetUser.completedChapters = [];
  const exists = targetUser.completedChapters.includes(chapterId);

  if (exists) {
    targetUser.completedChapters = targetUser.completedChapters.filter(id => id !== chapterId);
  } else {
    targetUser.completedChapters.push(chapterId);
    targetUser.xp += 50; // Bonus for completing chapter
    targetUser.level = Math.floor(targetUser.xp / 250) + 1;
  }

  targetUser.lastActive = new Date().toISOString();
  saveDB(db);

  return res.json({
    user: sanitizeUser(targetUser),
    completedChapters: targetUser.completedChapters
  });
});

// Admin: Get all students and detailed progress
app.get('/api/admin/students', (req, res) => {
  const user = getAuthUser(req);
  if (!user) {
    return res.status(401).json({ error: 'Admin authentication required' });
  }
  if (user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied. Only website administrators can view student rosters.' });
  }

  const db = loadDB();
  // Filter students or return all users with their full stats
  const studentsList = db.users
    .filter(u => u.role === 'student' || u.id !== user.id)
    .map(u => {
      const sanitized = sanitizeUser(u);

      // Compute strongest and weakest subjects
      let strongestSubject = 'None yet';
      let weakestSubject = 'None yet';
      let bestAcc = -1;
      let worstAcc = 999;

      if (u.subjectStats && Object.keys(u.subjectStats).length > 0) {
        Object.entries(u.subjectStats).forEach(([subj, stats]) => {
          if (stats.attempted > 0) {
            const acc = (stats.correct / stats.attempted) * 100;
            if (acc > bestAcc) {
              bestAcc = acc;
              strongestSubject = `${subj.toUpperCase()} (${Math.round(acc)}%)`;
            }
            if (acc < worstAcc) {
              worstAcc = acc;
              weakestSubject = `${subj.toUpperCase()} (${Math.round(acc)}%)`;
            }
          }
        });
      }

      const totalQuestionsAttempted = Object.values(u.subjectStats || {}).reduce((sum, s) => sum + (s.attempted || 0), 0);
      const totalCorrect = Object.values(u.subjectStats || {}).reduce((sum, s) => sum + (s.correct || 0), 0);
      const totalWrong = Object.values(u.subjectStats || {}).reduce((sum, s) => sum + (s.wrong || 0), 0);
      const overallAccuracy = totalQuestionsAttempted > 0 ? Math.round((totalCorrect / totalQuestionsAttempted) * 100) : 0;

      return {
        ...sanitized,
        totalQuestionsAttempted,
        totalCorrect,
        totalWrong,
        overallAccuracy,
        strongestSubject,
        weakestSubject,
        quizzesTaken: (u.quizHistory || []).length
      };
    });

  return res.json({ students: studentsList });
});

// Admin: Get Platform-wide analytics
app.get('/api/admin/stats', (req, res) => {
  const user = getAuthUser(req);
  if (!user || user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied. Admin only.' });
  }

  const db = loadDB();
  const students = db.users.filter(u => u.role === 'student');
  const totalStudents = students.length;
  const totalQuizzes = students.reduce((acc, s) => acc + (s.quizHistory?.length || 0), 0);
  const totalXP = students.reduce((acc, s) => acc + (s.xp || 0), 0);
  const avgXP = totalStudents > 0 ? Math.round(totalXP / totalStudents) : 0;

  // Board breakdown
  const boardDistribution: Record<string, number> = {};
  students.forEach(s => {
    boardDistribution[s.board] = (boardDistribution[s.board] || 0) + 1;
  });

  return res.json({
    totalStudents,
    totalQuizzes,
    totalXP,
    avgXP,
    boardDistribution
  });
});

// ---------------- VITE / SERVER INITIALIZATION ----------------

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`9Study Hub server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
