import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

// ── helpers ──────────────────────────────────────────────
const LS = {
  get: (k) => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v)),
};

const SAMPLE_ARTICLES = [
  {
    id: 'sample-1',
    title: 'Getting Started with React Hooks',
    summary: 'Learn how React Hooks can simplify your component logic and make your code more reusable.',
    content: `React Hooks revolutionized the way we write React components. Introduced in React 16.8, Hooks allow you to use state and other React features without writing a class component.\n\n## Why Hooks?\n\nBefore Hooks, if you wanted to use state in a component, you had to use a class component. This led to complex lifecycle methods and hard-to-follow code.\n\n## The useState Hook\n\nThe most basic Hook is useState. It lets you add state to functional components:\n\n\`\`\`jsx\nconst [count, setCount] = useState(0);\n\`\`\`\n\n## The useEffect Hook\n\nuseEffect lets you perform side effects in function components — data fetching, subscriptions, or manually changing the DOM.`,
    tags: ['React', 'JavaScript', 'Web Development'],
    authorId: 'sample-author',
    authorName: 'Sarah Chen',
    status: 'published',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: 'sample-2',
    title: 'Building Scalable APIs with Node.js',
    summary: 'Explore best practices for creating robust and scalable REST APIs using Node.js and Express.',
    content: `Building scalable APIs is a crucial skill for backend developers. Node.js with Express provides a powerful foundation for creating REST APIs.\n\n## Setting Up Express\n\nFirst, install the necessary packages and create a basic server structure.\n\n## Middleware\n\nMiddleware functions are the backbone of Express applications. They can modify request/response objects, end the request-response cycle, or call the next middleware.\n\n## Error Handling\n\nProper error handling is essential for production APIs. Always use try-catch blocks and centralized error handling middleware.`,
    tags: ['Node.js', 'API', 'Backend'],
    authorId: 'sample-author',
    authorName: 'Sarah Chen',
    status: 'published',
    createdAt: '2024-01-20T10:00:00Z',
    updatedAt: '2024-01-20T10:00:00Z',
  },
  {
    id: 'sample-3',
    title: 'The Art of Clean Code',
    summary: 'Discover the principles and practices that separate good code from great code.',
    content: `Writing clean code is an art that every developer should master. Clean code is not just about making things work; it's about making them maintainable.\n\n## Meaningful Names\n\nUse intention-revealing names for variables, functions, and classes. The name should tell you why it exists, what it does, and how it's used.\n\n## Small Functions\n\nFunctions should do one thing. They should do it well. They should do it only.\n\n## Comments\n\nDon't comment bad code — rewrite it. Comments should explain WHY, not WHAT.`,
    tags: ['Programming', 'Best Practices', 'Software Engineering'],
    authorId: 'sample-author2',
    authorName: 'Marcus Johnson',
    status: 'published',
    createdAt: '2024-02-01T10:00:00Z',
    updatedAt: '2024-02-01T10:00:00Z',
  },
];

// ── Provider ─────────────────────────────────────────────
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => LS.get('blog_user'));
  const [users, setUsers] = useState(() => LS.get('blog_users') || []);
  const [articles, setArticles] = useState(() => {
    const saved = LS.get('blog_articles');
    return saved && saved.length > 0 ? saved : SAMPLE_ARTICLES;
  });

  // Persist changes
  useEffect(() => { LS.set('blog_articles', articles); }, [articles]);
  useEffect(() => { LS.set('blog_users', users); }, [users]);
  useEffect(() => {
    if (user) LS.set('blog_user', user);
    else localStorage.removeItem('blog_user');
  }, [user]);

  // ── AUTH ─────────────────────────────────────────────
  const register = ({ name, email, password, role }) => {
    const exists = users.find(u => u.email === email);
    if (exists) return { success: false, error: 'Email already registered!' };
    const newUser = { id: `user-${Date.now()}`, name, email, password, role };
    const updated = [...users, newUser];
    setUsers(updated);
    setUser(newUser);
    return { success: true };
  };

  const login = ({ email, password }) => {
    const found = users.find(u => u.email === email && u.password === password);
    if (!found) return { success: false, error: 'Invalid email or password!' };
    setUser(found);
    return { success: true };
  };

  const logout = () => setUser(null);

  // ── ARTICLES ─────────────────────────────────────────
  const createArticle = ({ title, summary, content, tags, status }) => {
    if (!user) return { success: false, error: 'Login required!' };
    const article = {
      id: `article-${Date.now()}`,
      title,
      summary,
      content,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      authorId: user.id,
      authorName: user.name,
      status,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setArticles(prev => [article, ...prev]);
    return { success: true, article };
  };

  const updateArticle = (id, updates) => {
    setArticles(prev =>
      prev.map(a => a.id === id
        ? { ...a, ...updates, tags: typeof updates.tags === 'string' ? updates.tags.split(',').map(t => t.trim()).filter(Boolean) : updates.tags, updatedAt: new Date().toISOString() }
        : a
      )
    );
    return { success: true };
  };

  const deleteArticle = (id) => {
    setArticles(prev => prev.filter(a => a.id !== id));
  };

  const getPublishedArticles = () => articles.filter(a => a.status === 'published');
  const getMyArticles = () => articles.filter(a => a.authorId === user?.id);
  const getArticleById = (id) => articles.find(a => a.id === id);

  return (
    <AuthContext.Provider value={{
      user, users, articles,
      register, login, logout,
      createArticle, updateArticle, deleteArticle,
      getPublishedArticles, getMyArticles, getArticleById,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
