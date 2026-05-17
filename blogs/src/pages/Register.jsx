import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

export default function Register() {
  const { register, user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'reader', // 'reader' or 'author'
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  // If already logged in, redirect
  if (user) {
    navigate('/', { replace: true });
    return null;
  }

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full Name is required';
    else if (form.name.trim().length < 2) e.name = 'Name must be at least 2 characters';

    if (!form.email.trim()) e.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address';

    if (!form.password) e.password = 'Password is required';
    else if (form.password.length < 6) e.password = 'Password must be at least 6 characters';

    if (!form.confirmPassword) e.confirmPassword = 'Confirm your password';
    else if (form.password !== form.confirmPassword) e.confirmPassword = 'Passwords do not match';

    return e;
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setErrors(err => ({ ...err, [e.target.name]: '' }));
    setApiError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const result = register(form);
      setLoading(false);
      if (result.success) {
        navigate('/', { replace: true });
      } else {
        setApiError(result.error);
      }
    }, 500);
  };

  return (
    <div className="auth-container fade-in">
      <div className="auth-card fade-up">
        <div className="auth-header">
          <div className="auth-icon">✍️</div>
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join Inkwell to start reading or writing</p>
        </div>

        {apiError && (
          <div className="alert alert-error">
            {apiError}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="reg-name" className="form-label">Full Name</label>
            <input
              id="reg-name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              className="form-input"
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="reg-email" className="form-label">Email Address</label>
            <input
              id="reg-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="form-input"
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="reg-password" className="form-label">Password</label>
            <div className="pass-wrapper">
              <input
                id="reg-password"
                name="password"
                type={showPass ? 'text' : 'password'}
                placeholder="Minimum 6 characters"
                value={form.password}
                onChange={handleChange}
                className="form-input"
              />
              <button
                type="button"
                className="pass-toggle"
                onClick={() => setShowPass(s => !s)}
                aria-label="Toggle Password Visibility"
              >
                {showPass ? '🙈' : '👁️'}
              </button>
            </div>
            {errors.password && <span className="form-error">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="reg-confirm" className="form-label">Confirm Password</label>
            <input
              id="reg-confirm"
              name="confirmPassword"
              type="password"
              placeholder="Re-enter password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="form-input"
            />
            {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">I want to join as a...</label>
            <div className="role-selectors">
              <button
                type="button"
                className={`role-card ${form.role === 'reader' ? 'active' : ''}`}
                onClick={() => setForm(f => ({ ...f, role: 'reader' }))}
              >
                <span className="role-emoji">📖</span>
                <span className="role-name">Reader</span>
                <span className="role-desc">Read, find great articles</span>
              </button>
              <button
                type="button"
                className={`role-card ${form.role === 'author' ? 'active' : ''}`}
                onClick={() => setForm(f => ({ ...f, role: 'author' }))}
              >
                <span className="role-emoji">✍️</span>
                <span className="role-name">Author</span>
                <span className="role-desc">Publish articles, share ideas</span>
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
            {loading ? <span className="spinner" /> : 'Create Account'}
          </button>
        </form>

        <div className="divider" />
        <p className="auth-footer">
          Already have an account?{' '}
          <Link to="/login" className="auth-link">Sign in →</Link>
        </p>
      </div>
    </div>
  );
}
