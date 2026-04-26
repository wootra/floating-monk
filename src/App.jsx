import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyMySmartTranslator from './pages/PrivacyMySmartTranslator';

export default function App() {
	return (
		<div className='bg-background text-on-background font-inter overflow-x-hidden min-h-screen flex flex-col'>
			<Header />
			<div className='flex-1'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/privacy/my-smart-translator' element={<PrivacyMySmartTranslator />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}
