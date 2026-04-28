import { Link, useSearchParams } from 'react-router-dom';

export default function SubscriptionReturn() {
	const [searchParams] = useSearchParams();
	const status = searchParams.get('status');
	const isSuccess = status === 'success';

	return (
		<main className='max-w-2xl mx-auto px-8 py-[120px]'>
			<div className='glass-card rounded-xl p-12 text-center'>
				<div className='flex justify-center mb-6'>
					<span
						className={`material-symbols-outlined text-6xl ${
							isSuccess ? 'text-primary' : 'text-on-surface-variant'
						}`}
					>
						{isSuccess ? 'check_circle' : 'cancel'}
					</span>
				</div>

				<h1 className='text-headline-lg font-space-grotesk text-on-surface mb-4'>
					{isSuccess ? 'Subscription Activated' : 'Checkout Canceled'}
				</h1>

				<p className='text-on-surface-variant font-inter text-body-md leading-relaxed mb-8'>
					{isSuccess
						? 'Thanks for subscribing to My Smart Translator. You can now close this tab and return to the extension — your premium features will be available shortly.'
						: 'No charges were made. You can close this tab and return to the extension whenever you are ready to subscribe.'}
				</p>

				<div className='flex flex-col sm:flex-row gap-3 justify-center'>
					<button
						type='button'
						onClick={() => window.close()}
						className='px-6 py-3 bg-primary text-on-primary font-space-grotesk uppercase text-label-sm tracking-widest rounded hover:opacity-90 transition-opacity'
					>
						Close This Tab
					</button>
					<Link
						to='/'
						className='px-6 py-3 border border-outline text-on-surface font-space-grotesk uppercase text-label-sm tracking-widest rounded hover:bg-surface-variant transition-colors'
					>
						Back to Home
					</Link>
				</div>
			</div>
		</main>
	);
}
