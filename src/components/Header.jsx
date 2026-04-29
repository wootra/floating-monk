import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo2-1.png';
import logoText from '../assets/logo3.png';
import { useAuth } from '../context/AuthContext';

export default function Header() {
	const location = useLocation();
	const { user, login, logout } = useAuth();
	const [open, setOpen] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const dropdownRef = useRef(null);

	// Close dropdown on outside click
	useEffect(() => {
		function handleClick(e) {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
				setOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClick);
		return () => document.removeEventListener('mousedown', handleClick);
	}, []);

	useEffect(() => {
		setMobileOpen(false);
	}, [location.pathname]);

	async function handleLogin(e) {
		e.preventDefault();
		setError('');
		setLoading(true);
		try {
			await login(email, password);
			setOpen(false);
			setEmail('');
			setPassword('');
		} catch (err) {
			setError(err.message ?? 'Login failed.');
		} finally {
			setLoading(false);
		}
	}

	async function handleLogout() {
		await logout();
		setOpen(false);
		setMobileOpen(false);
	}

	const initials = user?.email?.[0]?.toUpperCase() ?? '';

	return (
		<header className='bg-[#0A0A0A]/80 backdrop-blur-xl sticky top-0 z-50 border-b border-white/10 shadow-[0_0_20px_rgba(255,92,0,0.1)]'>
			<div className='flex items-center justify-between px-2 sm:px-8 py-4 w-full max-w-7xl mx-auto'>
				<div className='flex items-center sm:gap-4 pl-2 sm:pl-0'>
					<Link to='/'>
						<img src={logo} alt='Floating Monk' className='h-10 w-auto' />
					</Link>
					<img src={logoText} alt='Floating Monk' className='h-10 w-auto' />
				</div>
				<nav className='hidden md:flex items-center gap-8'>
					{/* Hash anchor links — scroll within home, never "active" */}
					{[{ label: 'Team', to: '/#team' }].map(({ label, to }) => (
						<a
							key={label}
							href={to}
							className='font-medium font-space-grotesk uppercase tracking-widest text-gray-400 hover:text-[#FF5C00] transition-all duration-200'
						>
							{label}
						</a>
					))}

					{/* Real routes — use NavLink for active state */}
					{[
						{ label: 'Portfolio', to: '/portfolio' },
						{ label: 'Guide', to: '/my-smart-translator/guide' },
						{ label: 'Support', to: '/board' },
						{ label: 'Privacy', to: '/privacy/my-smart-translator' },
					].map(({ label, to }) => (
						<NavLink
							key={label}
							to={to}
							className={({ isActive }) =>
								`font-medium font-space-grotesk uppercase tracking-widest hover:text-[#FF5C00] transition-all active:scale-95 duration-200 ${
									isActive
										? 'text-[#FF5C00] font-bold border-b-2 border-[#FF5C00] pb-1'
										: 'text-gray-400'
								}`
							}
						>
							{label}
						</NavLink>
					))}

					{/* Avatar / login trigger */}
					<div className='relative' ref={dropdownRef}>
						<button
							onClick={() => setOpen(v => !v)}
							className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
								user
									? 'bg-[#FF5C00]/20 border-[#FF5C00]/60 text-[#FF5C00] font-bold font-space-grotesk text-sm'
									: 'bg-white/5 border-white/20 text-gray-400 hover:border-[#FF5C00]/60 hover:text-[#FF5C00]'
							}`}
							aria-label='Account'
						>
							{user ? initials : <span className='material-symbols-outlined text-[18px]'>person</span>}
						</button>

						{open && (
							<div className='absolute right-0 top-12 w-72 bg-[#131313] border border-white/10 rounded-xl shadow-2xl overflow-hidden'>
								{user ? (
									/* Logged-in state */
									<div className='p-5'>
										<p className='font-space-grotesk text-xs uppercase tracking-widest text-on-surface-variant mb-1'>
											Signed in as
										</p>
										<p className='font-inter text-on-surface text-sm truncate mb-5'>{user.email}</p>
										<button
											onClick={handleLogout}
											className='w-full py-2 border border-white/10 rounded-lg font-space-grotesk text-xs uppercase tracking-widest text-gray-400 hover:border-[#FF5C00]/40 hover:text-[#FF5C00] transition-colors'
										>
											Sign Out
										</button>
									</div>
								) : (
									/* Login form */
									<form onSubmit={handleLogin} className='p-5 space-y-4'>
										<p className='font-space-grotesk text-xs uppercase tracking-widest text-on-surface-variant mb-1'>
											Member Sign In
										</p>
										{error && <p className='text-red-400 font-inter text-xs'>{error}</p>}
										<input
											type='email'
											required
											autoComplete='email'
											placeholder='Email'
											value={email}
											onChange={e => setEmail(e.target.value)}
											className='w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 font-inter text-sm text-on-surface placeholder-gray-600 focus:outline-none focus:border-[#FF5C00]/50 transition-colors'
										/>
										<input
											type='password'
											required
											autoComplete='current-password'
											placeholder='Password'
											value={password}
											onChange={e => setPassword(e.target.value)}
											className='w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 font-inter text-sm text-on-surface placeholder-gray-600 focus:outline-none focus:border-[#FF5C00]/50 transition-colors'
										/>
										<button
											type='submit'
											disabled={loading}
											className='w-full py-2 bg-[#FF5C00] text-white font-space-grotesk text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-[#FF5C00]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
										>
											{loading ? 'Signing in…' : 'Sign In'}
										</button>
									</form>
								)}
							</div>
						)}
					</div>
				</nav>

				<button
					type='button'
					onClick={() => setMobileOpen(v => !v)}
					className='md:hidden text-[#FF5C00]'
					aria-label='Toggle navigation menu'
					aria-expanded={mobileOpen}
				>
					<span className='material-symbols-outlined'>menu</span>
				</button>
			</div>

			{mobileOpen && (
				<>
					<div
						className='md:hidden fixed inset-0 z-40 bg-black/60'
						onClick={() => setMobileOpen(false)}
						aria-hidden='true'
					/>
					<div className='md:hidden fixed right-4 top-20 z-50 w-[min(90vw,320px)] rounded-2xl border border-white/10 bg-[#121212] shadow-2xl overflow-hidden'>
						<nav className='p-3'>
							{[
								{ label: 'Home', to: '/' },
								{ label: 'Team', href: '/#team' },
								{ label: 'Portfolio', to: '/portfolio' },
								{ label: 'Guide', to: '/my-smart-translator/guide' },
								{ label: 'Support', to: '/board' },
								{ label: 'Privacy', to: '/privacy/my-smart-translator' },
								{ label: 'Terms', to: '/terms' },
							].map(item =>
								item.href ? (
									<a
										key={item.label}
										href={item.href}
										className='block px-3 py-2 rounded-lg text-gray-300 font-space-grotesk text-xs uppercase tracking-widest hover:bg-white/5 hover:text-[#FF5C00] transition-colors'
									>
										{item.label}
									</a>
								) : (
									<NavLink
										key={item.label}
										to={item.to}
										className={({ isActive }) =>
											`block px-3 py-2 rounded-lg font-space-grotesk text-xs uppercase tracking-widest transition-colors ${
												isActive
													? 'text-[#FF5C00] bg-[#FF5C00]/10'
													: 'text-gray-300 hover:bg-white/5 hover:text-[#FF5C00]'
											}`
										}
									>
										{item.label}
									</NavLink>
								)
							)}
						</nav>
						<div className='border-t border-white/10 p-3'>
							{user ? (
								<div className='space-y-3'>
									<p className='text-xs font-inter text-on-surface-variant truncate'>{user.email}</p>
									<button
										type='button'
										onClick={handleLogout}
										className='w-full py-2 border border-white/10 rounded-lg font-space-grotesk text-xs uppercase tracking-widest text-gray-300 hover:border-[#FF5C00]/40 hover:text-[#FF5C00] transition-colors'
									>
										Sign Out
									</button>
								</div>
							) : (
								<Link
									to='/login'
									className='block w-full text-center py-2 bg-[#FF5C00] text-white font-space-grotesk text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-[#FF5C00]/90 transition-colors'
								>
									Sign In
								</Link>
							)}
						</div>
					</div>
				</>
			)}
		</header>
	);
}
