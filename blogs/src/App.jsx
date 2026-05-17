import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ArticleDetail from './pages/ArticleDetail';
import Dashboard from './pages/Dashboard';
import CreateArticle from './pages/CreateArticle';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Navbar />
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/article/:id" element={<ArticleDetail />} />

            {/* Author only */}
            <Route path="/dashboard" element={
              <ProtectedRoute role="author"><Dashboard /></ProtectedRoute>
            } />
            <Route path="/create" element={
              <ProtectedRoute role="author"><CreateArticle /></ProtectedRoute>
            } />
            <Route path="/edit/:id" element={
              <ProtectedRoute role="author"><CreateArticle /></ProtectedRoute>
            } />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
