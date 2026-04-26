import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute() {
	const { session } = useAuth();
	const location = useLocation();

	// Still loading session
	if (session === undefined) return null;

	if (!session) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	return <Outlet />;
}
