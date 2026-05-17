import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './ArticleDetail.css';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function readTime(content = '') {
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200));
}

export default function ArticleDetail() {
  const { id } = useParams();
  const { getArticleById, user, deleteArticle } = useAuth();
  const navigate = useNavigate();
  const article = getArticleById(id);

  if (!article) {
    return (
      <div className="container page-wrapper">
        <div className="empty-state card fade-in">
          <div className="icon">🔍</div>
          <h3>Article not found</h3>
          <p>The article you are trying to view does not exist or has been deleted.</p>
          <Link to="/" className="btn btn-primary">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const isOwner = user?.id === article.authorId;

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      deleteArticle(article.id);
      navigate('/dashboard');
    }
  };

  const renderContent = (text) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('## ')) {
        return <h2 key={i}>{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={i}>{line.slice(4)}</h3>;
      }
      if (line.startsWith('```')) {
        return null;
      }
      if (line.trim() === '') {
        return <br key={i} />;
      }
      const parts = line.split(/`([^`]+)`/g);
      return (
        <p key={i}>
          {parts.map((part, j) =>
            j % 2 === 1
              ? <code key={j}>{part}</code>
              : part
          )}
        </p>
      );
    });
  };

  return (
    <div className="container page-wrapper fade-in">
      <div className="article-detail-container fade-up">
        {/* Back Link */}
        <Link to="/" className="back-link">← Back to Articles</Link>

        {/* Tags */}
        <div className="detail-tags">
          {article.tags?.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        {/* Title */}
        <h1 className="detail-title">{article.title}</h1>

        {/* Meta Info */}
        <div className="detail-meta">
          <div className="meta-author">
            <div className="meta-author-avatar">
              {article.authorName?.charAt(0).toUpperCase()}
            </div>
            <span className="meta-author-name">{article.authorName}</span>
          </div>
          <span className="meta-sep">•</span>
          <span>📅 {formatDate(article.createdAt)}</span>
          <span className="meta-sep">•</span>
          <span>⏱ {readTime(article.content)} min read</span>
        </div>

        {/* Owner actions */}
        {isOwner && (
          <div className="owner-actions">
            <Link to={`/edit/${article.id}`} className="btn btn-outline btn-sm">✏️ Edit</Link>
            <button onClick={handleDelete} className="btn btn-danger btn-sm">🗑️ Delete</button>
          </div>
        )}

        <div className="divider" />

        {/* Body Content */}
        <div className="detail-content">
          {renderContent(article.content)}
        </div>

        <div className="divider" />

        <div className="detail-footer">
          <p>Written by <strong>{article.authorName}</strong> · Last updated {formatDate(article.updatedAt)}</p>
        </div>
      </div>
    </div>
  );
}
