import { useAuth } from '../context/AuthContext';
import ArticleCard from '../components/ArticleCard';
import './Home.css';

export default function Home() {
  const { getPublishedArticles } = useAuth();
  const articles = getPublishedArticles();

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Welcome to <span>Inkwell</span>
          </h1>
          <p className="hero-desc">
            Discover thoughtful articles on technology, programming, and software engineering from passionate writers.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container" style={{ paddingBottom: '80px' }}>
        
        {/* Latest Articles Header (Heading on Left, count on Right matching screenshot) */}
        <div className="home-section-header">
          <h2 className="home-section-title">Latest Articles</h2>
          <span className="home-section-count">
            {articles.length} article{articles.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Grid / Empty State */}
        {articles.length === 0 ? (
          <div className="empty-state card">
            <h3>No articles found</h3>
            <p>Wait for authors to publish some articles!</p>
          </div>
        ) : (
          <div className="articles-grid">
            {articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
