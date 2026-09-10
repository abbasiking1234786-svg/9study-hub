import { UserProfile } from '../types';

const API_BASE = '/api';

function getHeaders() {
  const token = localStorage.getItem('hub_auth_token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
}

export async function loginUser(email: string, password: string): Promise<{ token: string; user: UserProfile }> {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || 'Failed to login');
  }

  localStorage.setItem('hub_auth_token', data.token);
  return data;
}

export async function registerUser(payload: {
  name: string;
  email: string;
  password: string;
  board: string;
  school?: string;
  role?: string;
}): Promise<{ token: string; user: UserProfile }> {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || 'Failed to register');
  }

  localStorage.setItem('hub_auth_token', data.token);
  return data;
}

export async function fetchCurrentUser(): Promise<UserProfile | null> {
  const token = localStorage.getItem('hub_auth_token');
  if (!token) return null;

  try {
    const res = await fetch(`${API_BASE}/auth/me`, {
      headers: getHeaders()
    });
    if (!res.ok) {
      localStorage.removeItem('hub_auth_token');
      return null;
    }
    const data = await res.json();
    return data.user;
  } catch {
    return null;
  }
}

export async function logoutUser(): Promise<void> {
  try {
    await fetch(`${API_BASE}/auth/logout`, {
      method: 'POST',
      headers: getHeaders()
    });
  } catch (err) {
    console.error('Logout error:', err);
  } finally {
    localStorage.removeItem('hub_auth_token');
  }
}

export async function submitQuizResult(payload: {
  subjectId: string;
  subjectTitle: string;
  chapterTitle?: string;
  difficulty: string;
  score: number;
  totalQuestions: number;
  xpEarned: number;
  accuracy: number;
}): Promise<{ user: UserProfile; quizRecord: any }> {
  const res = await fetch(`${API_BASE}/student/quiz-submit`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || 'Failed to record quiz');
  }
  return data;
}

export async function toggleChapterProgress(chapterId: string): Promise<{ user: UserProfile; completedChapters: string[] }> {
  const res = await fetch(`${API_BASE}/student/toggle-chapter`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ chapterId })
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || 'Failed to update chapter');
  }
  return data;
}

export async function fetchAdminStudents(): Promise<any[]> {
  const res = await fetch(`${API_BASE}/admin/students`, {
    headers: getHeaders()
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || 'Admin access forbidden');
  }
  return data.students;
}

export async function fetchAdminStats(): Promise<any> {
  const res = await fetch(`${API_BASE}/admin/stats`, {
    headers: getHeaders()
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || 'Admin access forbidden');
  }
  return data;
}
