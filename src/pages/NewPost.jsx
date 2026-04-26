import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/AuthContext';

export default function NewPost() {
	const { user } = useAuth();
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		setError('');
		setLoading(true);
		try {
			const { error } = await supabase.from('posts').insert({
				author_id: user.id,
				author_name: user.email,
				title: title.trim(),
				body: body.trim(),
			});
			if (error) throw error;
			navigate('/board');
		} catch (err) {
			setError(err.message ?? 'Failed to post.');
		} finally {
			setLoading(false);
		}
	}

	return (
		<main className='max-w-2xl mx-auto px-6 py-20'>
			<div className='mb-10'>
				<Link
					to='/board'
					className='flex items-center gap-1 text-on-surface-variant hover:text-primary font-space-grotesk text-label-sm uppercase tracking-widest transition-colors mb-6'
				>
					<span className='material-symbols-outlined text-sm'>arrow_back</span>
					Back to Board
				</Link>
				<span className='text-primary font-space-grotesk text-label-sm uppercase tracking-[0.4em] mb-3 block'>
					New Post
				</span>
				<h2 className='text-headline-lg font-space-grotesk text-on-surface'>Write a Post</h2>
			</div>

			{error && (
				<div className='mb-6 px-4 py-3 bg-red-900/30 border border-red-500/30 rounded-lg text-red-400 font-inter text-sm'>
					{error}
				</div>
			)}

			<form onSubmit={handleSubmit} className='glass-card rounded-2xl p-8 space-y-6'>
				<div>
					<label className='block font-space-grotesk text-label-sm uppercase tracking-widest text-on-surface-variant mb-2'>
						Title
					</label>
					<input
						type='text'
						required
						maxLength={200}
						value={title}
						onChange={e => setTitle(e.target.value)}
						className='w-full bg-surface-container-low border border-white/10 rounded-lg px-4 py-3 font-inter text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary/60 transition-colors'
						placeholder='Your question or topic…'
					/>
				</div>
				<div>
					<label className='block font-space-grotesk text-label-sm uppercase tracking-widest text-on-surface-variant mb-2'>
						Body
					</label>
					<textarea
						required
						rows={8}
						value={body}
						onChange={e => setBody(e.target.value)}
						className='w-full bg-surface-container-low border border-white/10 rounded-lg px-4 py-3 font-inter text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-primary/60 transition-colors resize-y'
						placeholder='Describe your question or share your thoughts…'
					/>
				</div>
				<div className='flex gap-4 justify-end'>
					<Link
						to='/board'
						className='px-6 py-3 font-space-grotesk text-label-sm uppercase tracking-widest border border-white/10 rounded-lg hover:border-white/30 transition-colors'
					>
						Cancel
					</Link>
					<button
						type='submit'
						disabled={loading}
						className='px-8 py-3 bg-primary-container text-on-primary-container font-space-grotesk text-label-sm uppercase tracking-widest font-bold rounded-lg monk-glow transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'
					>
						{loading ? 'Posting…' : 'Post'}
					</button>
				</div>
			</form>
		</main>
	);
}
