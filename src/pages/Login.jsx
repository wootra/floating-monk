import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
	const { login } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname ?? '/board';

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		setError('');
		setLoading(true);
		try {
			await login(email, password);
			navigate(from, { replace: true });
		} catch (err) {
			setError(err.message ?? 'Login failed.');
		} finally {
			setLoading(false);
		}
	}

	return (
		<main className='min-h-[80vh] flex items-center justify-center px-6 py-20'>
			<div className='w-full max-w-md glass-card rounded-2xl p-10'>
				<h2 className='font-space-grotesk text-headline-md text-on-surface mb-2'>Member Sign In</h2>
				<p className='font-inter text-on-surface-variant text-sm mb-8'>
					Floating Monk members only. No public sign-up.
				</p>

				{error && (
					<div className='mb-6 px-4 py-3 bg-red-900/30 border border-red-500/30 rounded-lg text-red-400 font-inter text-sm'>
						{error}
					</div>
				)}

				<form onSubmit={handleSubmit} className='space-y-5'>
					<div>
						<label className='block font-space-grotesk text-label-sm uppercase tracking-widest text-on-surface-variant mb-2'>
							Email
						</label>
						<input
							type='email'
							required
							autoComplete='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							className='w-full bg-surface-container-low border border-white/10 rounded-lg px-4 py-3 font-inter text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary/60 transition-colors'
							placeholder='you@floating-monk.org'
						/>
					</div>
					<div>
						<label className='block font-space-grotesk text-label-sm uppercase tracking-widest text-on-surface-variant mb-2'>
							Password
						</label>
						<input
							type='password'
							required
							autoComplete='current-password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							className='w-full bg-surface-container-low border border-white/10 rounded-lg px-4 py-3 font-inter text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary/60 transition-colors'
							placeholder='••••••••'
						/>
					</div>
					<button
						type='submit'
						disabled={loading}
						className='w-full mt-2 py-3 bg-primary-container text-on-primary-container font-space-grotesk uppercase tracking-widest font-bold rounded-lg monk-glow transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'
					>
						{loading ? 'Signing in…' : 'Sign In'}
					</button>
				</form>
			</div>
		</main>
	);
}
