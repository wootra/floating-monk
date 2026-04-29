import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PrivacyMySmartTranslator from './pages/PrivacyMySmartTranslator';
import SubscriptionReturn from './pages/SubscriptionReturn';
import BulletinBoard from './pages/BulletinBoard';
import PostDetail from './pages/PostDetail';
import NewPost from './pages/NewPost';
import Login from './pages/Login';
import TermsOfService from './pages/TermsOfService';
import InstructionMySmartTranslator from './pages/InstructionMySmartTranslator';

export default function App() {
	return (
		<div className='bg-background text-on-background font-inter overflow-x-hidden min-h-screen flex flex-col'>
			<Header />
			<div className='flex-1'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/privacy/my-smart-translator' element={<PrivacyMySmartTranslator />} />
					<Route path='/my-smart-translator/guide' element={<InstructionMySmartTranslator />} />
					<Route path='/my-smart-translator/subscription/return' element={<SubscriptionReturn />} />
					<Route path='/terms' element={<TermsOfService />} />
					<Route path='/board' element={<BulletinBoard />} />
					<Route path='/board/:id' element={<PostDetail />} />
					<Route path='/login' element={<Login />} />
					<Route element={<ProtectedRoute />}>
						<Route path='/board/new' element={<NewPost />} />
					</Route>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}
