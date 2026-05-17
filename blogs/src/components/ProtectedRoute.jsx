import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// role: 'author' | 'reader' | undefined (any logged-in user)
export default function ProtectedRoute({ children, role }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}
