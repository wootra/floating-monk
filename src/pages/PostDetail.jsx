import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../context/AuthContext';

export default function PostDetail() {
	const { id } = useParams();
	const { user, isAdmin } = useAuth();

	const [post, setPost] = useState(null);
	const [replies, setReplies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	const [replyBody, setReplyBody] = useState('');
	const [replyLoading, setReplyLoading] = useState(false);
	const [replyError, setReplyError] = useState('');

	useEffect(() => {
		let cancelled = false;
		async function fetchData() {
			setLoading(true);
			setError('');

			const [{ data: postData, error: postErr }, { data: repliesData, error: repliesErr }] = await Promise.all([
				supabase.from('posts').select('*').eq('id', id).single(),
				supabase.from('replies').select('*').eq('post_id', id).order('created_at', { ascending: true }),
			]);

			if (!cancelled) {
				if (postErr || repliesErr) {
					setError((postErr ?? repliesErr).message);
				} else {
					setPost(postData);
					setReplies(repliesData ?? []);
				}
				setLoading(false);
			}
		}
		fetchData();
		return () => {
			cancelled = true;
		};
	}, [id]);

	async function handleReply(e) {
		e.preventDefault();
		setReplyError('');
		setReplyLoading(true);
		try {
			const { data, error } = await supabase
				.from('replies')
				.insert({
					post_id: Number(id),
					author_id: user.id,
					author_name: user.email,
					body: replyBody.trim(),
				})
				.select()
				.single();
			if (error) throw error;
			setReplies(prev => [...prev, data]);
			setReplyBody('');
		} catch (err) {
			setReplyError(err.message ?? 'Failed to post reply.');
		} finally {
			setReplyLoading(false);
		}
	}

	function formatDate(iso) {
		return new Date(iso).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		});
	}

	return (
		<main className='max-w-3xl mx-auto px-6 py-20'>
			<Link
				to='/board'
				className='flex items-center gap-1 text-on-surface-variant hover:text-primary font-space-grotesk text-label-sm uppercase tracking-widest transition-colors mb-10'
			>
				<span className='material-symbols-outlined text-sm'>arrow_back</span>
				Back to Board
			</Link>

			{loading ? (
				<div className='space-y-4 animate-pulse'>
					<div className='h-8 bg-white/10 rounded w-3/4' />
					<div className='h-4 bg-white/5 rounded w-1/3' />
					<div className='h-32 bg-white/5 rounded mt-8' />
				</div>
			) : error ? (
				<div className='px-4 py-3 bg-red-900/30 border border-red-500/30 rounded-lg text-red-400 font-inter text-sm'>
					{error}
				</div>
			) : post ? (
				<>
					{/* Post */}
					<article className='glass-card rounded-2xl p-8 mb-10'>
						<h2 className='font-space-grotesk text-headline-md text-on-surface mb-6'>{post.title}</h2>
						<p className='font-inter text-on-surface-variant leading-relaxed mb-8 whitespace-pre-wrap'>
							{post.body}
						</p>
						<div className='flex items-center gap-4 text-on-surface-variant font-inter text-xs uppercase tracking-widest border-t border-white/5 pt-5'>
							<span className='flex items-center gap-1'>
								<span className='material-symbols-outlined text-sm'>person</span>
								{post.author_name}
							</span>
							<span className='flex items-center gap-1'>
								<span className='material-symbols-outlined text-sm'>calendar_today</span>
								{formatDate(post.created_at)}
							</span>
						</div>
					</article>

					{/* Replies */}
					<section>
						<h3 className='font-space-grotesk text-label-sm uppercase tracking-[0.4em] text-primary mb-6'>
							{replies.length === 0
								? 'No replies yet'
								: `${replies.length} ${replies.length === 1 ? 'Reply' : 'Replies'}`}
						</h3>

						{replies.length > 0 && (
							<div className='space-y-4 mb-10'>
								{replies.map(reply => (
									<div
										key={reply.id}
										className='flex gap-4 glass-card rounded-xl p-6 border-l-2 border-primary/40'
									>
										<div className='w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 mt-0.5'>
											<span className='font-space-grotesk text-primary text-xs font-bold'>
												{reply.author_name[0]?.toUpperCase()}
											</span>
										</div>
										<div className='flex-1 min-w-0'>
											<div className='flex items-center gap-3 mb-2'>
												<span className='font-space-grotesk text-xs uppercase tracking-widest text-primary'>
													Admin
												</span>
												<span className='text-on-surface-variant font-inter text-xs'>
													{formatDate(reply.created_at)}
												</span>
											</div>
											<p className='font-inter text-on-surface text-sm leading-relaxed whitespace-pre-wrap'>
												{reply.body}
											</p>
										</div>
									</div>
								))}
							</div>
						)}

						{/* Admin reply form */}
						{isAdmin && (
							<form onSubmit={handleReply} className='glass-card rounded-xl p-6 space-y-4'>
								<p className='font-space-grotesk text-label-sm uppercase tracking-widest text-on-surface-variant'>
									Post a Reply
								</p>
								{replyError && <p className='text-red-400 font-inter text-xs'>{replyError}</p>}
								<textarea
									required
									rows={4}
									value={replyBody}
									onChange={e => setReplyBody(e.target.value)}
									placeholder='Write your reply…'
									className='w-full bg-surface-container-low border border-white/10 rounded-lg px-4 py-3 font-inter text-on-surface text-sm placeholder-on-surface-variant/40 focus:outline-none focus:border-primary/60 transition-colors resize-y'
								/>
								<div className='flex justify-end'>
									<button
										type='submit'
										disabled={replyLoading}
										className='px-6 py-2 bg-primary-container text-on-primary-container font-space-grotesk text-xs uppercase tracking-widest font-bold rounded-lg monk-glow transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'
									>
										{replyLoading ? 'Posting…' : 'Post Reply'}
									</button>
								</div>
							</form>
						)}
					</section>
				</>
			) : null}
		</main>
	);
}
