import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const profileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setProfileMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    };

    if (profileMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [profileMenuOpen]);

  const handleLogout = () => {
    logout();
    navigate('/');
    closeMenus();
  };

  const handleProfileToggle = () => {
    setProfileMenuOpen((open) => !open);
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Logo: Paper icon + Inkwell */}
        <Link to="/" className="navbar-logo" onClick={closeMenus}>
          <svg className="logo-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 5.5C4 4.673 4.673 4 5.5 4h9c.827 0 1.5.673 1.5 1.5v1.5H19c.553 0 1 .448 1 1v10c0 .552-.447 1-1 1H5c-.553 0-1-.448-1-1V5.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 4v4h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 11h8M8 15h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          <span className="logo-text">Inkwell</span>
        </Link>

        {/* Right side navigation & auth */}
        <div className="navbar-right">
          {/* Dashboard only if logged in as author */}
          {user?.role === 'author' && (
            <Link to="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}>Dashboard</Link>
          )}

          {/* Theme Toggle Button */}
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {user ? (
            <>
              <div className="profile-menu" ref={profileMenuRef}>
                <button className="profile-toggle" onClick={handleProfileToggle} aria-expanded={profileMenuOpen} type="button">
                  <span className="user-avatar" title={user.name}>
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  <span className="user-name" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-muted)' }}>{user.name}</span>
                  <span className={`profile-arrow ${profileMenuOpen ? 'open' : ''}`}>▾</span>
                </button>
                {profileMenuOpen && (
                  <div className="profile-dropdown">
                    {user.role === 'author' && (
                      <Link to="/dashboard" className="dropdown-item" onClick={() => setProfileMenuOpen(false)}>Dashboard</Link>
                    )}
                    <button onClick={handleLogout} className="dropdown-item dropdown-logout">⏻ Logout</button>
                  </div>
                )}
              </div>
              {user.role === 'author' && (
                <Link to="/create" className="btn-signup btn-sm">+ New Article</Link>
              )}
            </>
          ) : (
            <>
              <Link to="/login" className="btn-login">Login</Link>
              <Link to="/register" className="btn-signup">Sign Up</Link>
            </>
          )}
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)}>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link" onClick={() => setMenuOpen(false)}>🏠 Home</Link>
          {user?.role === 'author' && (
            <>
              <Link to="/dashboard" className="mobile-link" onClick={() => setMenuOpen(false)}>📊 Dashboard</Link>
              <Link to="/create" className="mobile-link" onClick={() => setMenuOpen(false)}>✏️ New Article</Link>
            </>
          )}
          <button onClick={() => { toggleTheme(); setMenuOpen(false); }} className="mobile-link">
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
          {user ? (
            <button onClick={handleLogout} className="mobile-link mobile-link-btn">⏻ Logout ({user.name})</button>
          ) : (
            <>
              <Link to="/login" className="mobile-link" onClick={() => setMenuOpen(false)}>🔑 Login</Link>
              <Link to="/register" className="mobile-link" onClick={() => setMenuOpen(false)}>📝 Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
