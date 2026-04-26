import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo2-1.png';
import logoText from '../assets/logo3.png';
import { useAuth } from '../context/AuthContext';

export default function Header() {
	const { user, login, logout } = useAuth();
	const [open, setOpen] = useState(false);
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
	}

	const initials = user?.email?.[0]?.toUpperCase() ?? '';

	return (
		<header className='bg-[#0A0A0A]/80 backdrop-blur-xl sticky top-0 z-50 border-b border-white/10 shadow-[0_0_20px_rgba(255,92,0,0.1)]'>
			<div className='flex items-center justify-between px-8 py-4 w-full max-w-7xl mx-auto'>
				<Link to='/' className='flex items-center gap-4'>
					<img src={logo} alt='Floating Monk' className='h-10 w-auto' />
					<img src={logoText} alt='Floating Monk' className='h-10 w-auto' />
				</Link>

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

				<button className='md:hidden text-[#FF5C00]'>
					<span className='material-symbols-outlined'>menu</span>
				</button>
			</div>
		</header>
	);
}
