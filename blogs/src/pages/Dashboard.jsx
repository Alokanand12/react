import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function Dashboard() {
  const { user, getMyArticles, deleteArticle, updateArticle } = useAuth();
  const navigate = useNavigate();
  const myArticles = getMyArticles();
  const [menuOpen, setMenuOpen] = useState(null);

  const publishedCount = myArticles.filter(a => a.status === 'published').length;
  const draftCount = myArticles.filter(a => a.status === 'draft').length;

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this article permanently?')) {
      deleteArticle(id);
      setMenuOpen(null);
    }
  };

  const toggleStatus = (article) => {
    updateArticle(article.id, {
      status: article.status === 'published' ? 'draft' : 'published',
    });
    setMenuOpen(null);
  };

  return (
    <div className="container page-wrapper fade-in">
      {/* Dashboard Header */}
      <div className="dashboard-header fade-up">
        <div className="dashboard-header-left">
          <h1>Dashboard</h1>
          <p>Welcome back, {user?.name}. Manage your published articles and drafts.</p>
        </div>
        <Link to="/create" className="btn btn-primary">+ Write New Article</Link>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid fade-up">
        <div className="stat-card">
          <span className="stat-title">Total Articles</span>
          <div className="stat-value">{myArticles.length}</div>
        </div>
        <div className="stat-card">
          <span className="stat-title">Published</span>
          <div className="stat-value" style={{ color: 'var(--success)' }}>{publishedCount}</div>
        </div>
        <div className="stat-card">
          <span className="stat-title">Drafts</span>
          <div className="stat-value" style={{ color: 'var(--secondary)' }}>{draftCount}</div>
        </div>
      </div>

      <div className="divider fade-up" />

      <h2 className="dashboard-subtitle fade-up">Your Articles</h2>

      {myArticles.length === 0 ? (
        <div className="empty-state card fade-in">
          <div className="icon">📝</div>
          <h3>No articles written yet</h3>
          <p>Share your ideas, tutorials, or stories by writing your very first blog article.</p>
          <Link to="/create" className="btn btn-primary">Write Your First Article</Link>
        </div>
      ) : (
        <div className="articles-list fade-up">
          {myArticles.map(article => (
            <div key={article.id} className="dashboard-article-card">
              <div className="article-info" onClick={() => navigate(`/article/${article.id}`)}>
                <div className="article-info-title-row">
                  <h3>{article.title}</h3>
                  <span className={`tag ${article.status === 'published' ? 'badge-published' : 'badge-draft'}`}>
                    {article.status === 'published' ? 'Published' : 'Draft'}
                  </span>
                </div>
                <p className="article-info-summary">{article.summary}</p>
                <span className="article-info-date">Last updated: {formatDate(article.updatedAt)}</span>
              </div>

              {/* Action Menu dropdown */}
              <div className="article-menu">
                <button
                  className="menu-trigger"
                  onClick={() => setMenuOpen(menuOpen === article.id ? null : article.id)}
                  aria-label="Article Actions Menu"
                >
                  ⋯
                </button>
                {menuOpen === article.id && (
                  <div className="dropdown-menu fade-in">
                    <Link to={`/article/${article.id}`} className="dropdown-item" onClick={() => setMenuOpen(null)}>👁️ View</Link>
                    <Link to={`/edit/${article.id}`} className="dropdown-item" onClick={() => setMenuOpen(null)}>✏️ Edit</Link>
                    <button onClick={() => toggleStatus(article)} className="dropdown-item">
                      {article.status === 'published' ? '📥 Unpublish' : '🚀 Publish'}
                    </button>
                    <button onClick={() => handleDelete(article.id)} className="dropdown-item dropdown-item-danger">🗑️ Delete</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
