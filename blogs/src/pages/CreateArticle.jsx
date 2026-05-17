import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './CreateArticle.css';

export default function CreateArticle() {
  const { id } = useParams();
  const { createArticle, updateArticle, getArticleById, user } = useAuth();
  const navigate = useNavigate();

  const isEdit = Boolean(id);
  const existingArticle = isEdit ? getArticleById(id) : null;

  const [form, setForm] = useState({
    title: '',
    summary: '',
    content: '',
    tags: '',
    status: 'published',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (existingArticle) {
      setForm({
        title: existingArticle.title,
        summary: existingArticle.summary,
        content: existingArticle.content,
        tags: existingArticle.tags?.join(', ') || '',
        status: existingArticle.status,
      });
    }
  }, [existingArticle?.id]);

  // Authorization check
  if (isEdit && existingArticle && existingArticle.authorId !== user?.id) {
    navigate('/dashboard');
    return null;
  }

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = 'Article Title is required';
    else if (form.title.trim().length < 5) e.title = 'Title must be at least 5 characters long';

    if (!form.summary.trim()) e.summary = 'A summary description is required';
    else if (form.summary.trim().length < 10) e.summary = 'Summary must be at least 10 characters';

    if (!form.content.trim()) e.content = 'Main article content is required';
    else if (form.content.trim().length < 20) e.content = 'Content is too short (minimum 20 characters)';

    if (!form.tags.trim()) e.tags = 'Provide at least one tag';

    return e;
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setErrors(err => ({ ...err, [e.target.name]: '' }));
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
      if (isEdit) {
        updateArticle(id, form);
      } else {
        createArticle(form);
      }
      setLoading(false);
      navigate('/dashboard');
    }, 500);
  };

  const wordCount = form.content.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="container page-wrapper fade-in" style={{ maxWidth: '800px' }}>
      <div className="fade-up">
        {/* Header */}
        <div className="editor-header">
          <h1>{isEdit ? 'Edit Article' : 'Write New Article'}</h1>
          <p>{isEdit ? 'Make edits to your article details below.' : 'Publish a new piece of knowledge on Inkwell.'}</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Title */}
          <div className="form-group">
            <label htmlFor="art-title" className="form-label">Article Title</label>
            <input
              id="art-title"
              name="title"
              type="text"
              placeholder="e.g. Getting Started with React Hooks"
              value={form.title}
              onChange={handleChange}
              className="form-input"
              style={{ fontSize: '1.15rem', fontWeight: 600, padding: '13px 16px' }}
            />
            {errors.title && <span className="form-error">{errors.title}</span>}
          </div>

          {/* Summary */}
          <div className="form-group">
            <label htmlFor="art-summary" className="form-label">Brief Summary</label>
            <textarea
              id="art-summary"
              name="summary"
              rows="3"
              placeholder="Provide a engaging snippet that introduces your article to readers..."
              value={form.summary}
              onChange={handleChange}
              className="form-textarea"
              maxLength="300"
            />
            {errors.summary && <span className="form-error">{errors.summary}</span>}
            <span className="form-hint">{form.summary.length} / 300 characters</span>
          </div>

          {/* Content */}
          <div className="form-group">
            <label htmlFor="art-content" className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
              Article Body Content
              <span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: 'var(--text-dim)' }}>
                {wordCount} words · ~{Math.max(1, Math.ceil(wordCount / 200))} min read
              </span>
            </label>
            <textarea
              id="art-content"
              name="content"
              rows="15"
              placeholder="Write your main article content here. Use ## for headings, ` for inline code blocks."
              value={form.content}
              onChange={handleChange}
              className="form-textarea"
              style={{ minHeight: '350px', lineHeight: '1.75' }}
            />
            {errors.content && <span className="form-error">{errors.content}</span>}
          </div>

          {/* Tags */}
          <div className="form-group">
            <label htmlFor="art-tags" className="form-label">Tags (Comma-separated)</label>
            <input
              id="art-tags"
              name="tags"
              type="text"
              placeholder="e.g. React, WebDev, CSS"
              value={form.tags}
              onChange={handleChange}
              className="form-input"
            />
            {errors.tags && <span className="form-error">{errors.tags}</span>}
            <span className="form-hint">Separate tags with commas.</span>
          </div>

          {/* Tags Preview list */}
          {form.tags.trim() && (
            <div className="tags-preview">
              {form.tags.split(',').map(tag => tag.trim()).filter(Boolean).map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          )}

          {/* Status Select */}
          <div className="form-group">
            <label className="form-label">Publishing Status</label>
            <div className="status-toggle-group">
              <button
                type="button"
                className={`status-toggle-card ${form.status === 'published' ? 'active-pub' : ''}`}
                onClick={() => setForm(f => ({ ...f, status: 'published' }))}
              >
                🚀 Publish Now
              </button>
              <button
                type="button"
                className={`status-toggle-card ${form.status === 'draft' ? 'active-draft' : ''}`}
                onClick={() => setForm(f => ({ ...f, status: 'draft' }))}
              >
                📝 Save as Draft
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="editor-actions">
            <button type="button" onClick={() => navigate('/dashboard')} className="btn btn-outline">Cancel</button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? <span className="spinner" /> : isEdit ? 'Update Article' : 'Publish Article'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
