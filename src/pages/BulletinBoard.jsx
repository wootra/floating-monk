import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/AuthContext';

const PAGE_SIZE = 20;

export default function BulletinBoard() {
	const { user } = useAuth();
	const [posts, setPosts] = useState([]);
	const [count, setCount] = useState(0);
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	const totalPages = Math.max(1, Math.ceil(count / PAGE_SIZE));

	useEffect(() => {
		let cancelled = false;
		async function fetchPosts() {
			setLoading(true);
			setError('');

			const from = page * PAGE_SIZE;
			const to = from + PAGE_SIZE - 1;

			const {
				data,
				error,
				count: total,
			} = await supabase
				.from('posts')
				.select('*', { count: 'exact' })
				.order('created_at', { ascending: false })
				.range(from, to);

			if (!cancelled) {
				if (error) {
					setError(error.message);
				} else {
					setPosts(data ?? []);
					setCount(total ?? 0);
				}
				setLoading(false);
			}
		}
		fetchPosts();
		return () => {
			cancelled = true;
		};
	}, [page]);

	function formatDate(iso) {
		return new Date(iso).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		});
	}

	return (
		<main className='max-w-4xl mx-auto px-6 py-20'>
			{/* Header */}
			<div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12'>
				<div>
					<span className='text-primary font-space-grotesk text-label-sm uppercase tracking-[0.4em] mb-3 block'>
						Community
					</span>
					<h2 className='text-headline-lg font-space-grotesk text-on-surface'>Bulletin Board</h2>
					<p className='text-on-surface-variant font-inter mt-2'>
						Questions &amp; answers from the Floating Monk community.
					</p>
				</div>
				{user && (
					<Link
						to='/board/new'
						className='flex items-center gap-2 px-6 py-3 bg-primary-container text-on-primary-container font-space-grotesk text-label-sm uppercase tracking-widest font-bold rounded-full monk-glow transition-all active:scale-95 whitespace-nowrap'
					>
						<span className='material-symbols-outlined text-sm'>edit</span>
						Write a Post
					</Link>
				)}
			</div>

			{/* Error */}
			{error && (
				<div className='mb-8 px-4 py-3 bg-red-900/30 border border-red-500/30 rounded-lg text-red-400 font-inter text-sm'>
					{error}
				</div>
			)}

			{/* Post list */}
			{loading ? (
				<div className='space-y-4'>
					{Array.from({ length: 5 }).map((_, i) => (
						<div key={i} className='glass-card rounded-xl p-6 animate-pulse'>
							<div className='h-4 bg-white/10 rounded w-3/4 mb-3' />
							<div className='h-3 bg-white/5 rounded w-1/2' />
						</div>
					))}
				</div>
			) : posts.length === 0 ? (
				<div className='glass-card rounded-xl p-12 text-center'>
					<span className='material-symbols-outlined text-4xl text-on-surface-variant mb-4 block'>forum</span>
					<p className='font-inter text-on-surface-variant'>No posts yet. Be the first to ask.</p>
				</div>
			) : (
				<div className='space-y-3'>
					{posts.map(post => (
						<Link
							key={post.id}
							to={`/board/${post.id}`}
							className='block glass-card rounded-xl p-6 hover:border-primary/30 border border-transparent transition-colors group'
						>
							<h3 className='font-space-grotesk text-on-surface text-lg font-medium mb-2 group-hover:text-primary transition-colors'>
								{post.title}
							</h3>
							<p className='font-inter text-on-surface-variant text-sm line-clamp-2 mb-4'>{post.body}</p>
							<div className='flex items-center gap-4 text-on-surface-variant font-inter text-xs uppercase tracking-widest'>
								<span className='flex items-center gap-1'>
									<span className='material-symbols-outlined text-sm'>person</span>
									{post.author_name}
								</span>
								<span className='flex items-center gap-1'>
									<span className='material-symbols-outlined text-sm'>calendar_today</span>
									{formatDate(post.created_at)}
								</span>
								<span className='ml-auto flex items-center gap-1 text-primary/60'>
									<span className='material-symbols-outlined text-sm'>forum</span>
									View
								</span>
							</div>
						</Link>
					))}
				</div>
			)}

			{/* Pagination */}
			{!loading && totalPages > 1 && (
				<div className='flex items-center justify-between mt-10'>
					<button
						onClick={() => setPage(p => Math.max(0, p - 1))}
						disabled={page === 0}
						className='flex items-center gap-2 px-5 py-2 font-space-grotesk text-label-sm uppercase tracking-widest border border-white/10 rounded-lg hover:border-primary/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed'
					>
						<span className='material-symbols-outlined text-sm'>arrow_back</span>
						Previous
					</button>
					<span className='font-inter text-on-surface-variant text-sm'>
						Page {page + 1} of {totalPages}
					</span>
					<button
						onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
						disabled={page >= totalPages - 1}
						className='flex items-center gap-2 px-5 py-2 font-space-grotesk text-label-sm uppercase tracking-widest border border-white/10 rounded-lg hover:border-primary/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed'
					>
						Next
						<span className='material-symbols-outlined text-sm'>arrow_forward</span>
					</button>
				</div>
			)}
		</main>
	);
}
