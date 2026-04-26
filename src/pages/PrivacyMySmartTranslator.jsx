import { Link } from 'react-router-dom';

export default function PrivacyMySmartTranslator() {
	return (
		<main className='max-w-4xl mx-auto px-8 py-[80px]'>
			<div className='mb-12'>
				<Link
					to='/'
					className='inline-flex items-center gap-2 text-primary font-space-grotesk text-label-sm uppercase tracking-widest mb-8 hover:opacity-80 transition-opacity'
				>
					<span className='material-symbols-outlined text-sm'>arrow_back</span>
					Back to Home
				</Link>
				<div className='flex items-center gap-4 mb-4'>
					<span className='material-symbols-outlined text-4xl text-primary'>translate</span>
					<span className='px-3 py-1 bg-surface-variant text-primary text-[10px] uppercase font-bold tracking-widest rounded font-space-grotesk'>
						Browser Ext
					</span>
				</div>
				<h1 className='text-headline-lg font-space-grotesk text-on-surface mb-2'>My Smart Translator</h1>
				<p className='text-on-surface-variant font-inter'>Data Privacy Policy v1.0</p>
				<div className='h-1 w-24 bg-primary-container mt-6' />
			</div>

			<div className='space-y-10 font-inter text-on-surface-variant'>
				<section className='glass-card rounded-xl p-8'>
					<h2 className='font-space-grotesk text-on-surface text-xl font-semibold mb-4'>Overview</h2>
					<p className='text-body-md leading-relaxed'>
						My Smart Translator is a browser extension developed by Floating Monk that runs entirely on your
						local machine. All translation processing happens locally — no text you translate is ever sent
						to our servers or any third-party service.
					</p>
				</section>

				<section className='glass-card rounded-xl p-8'>
					<h2 className='font-space-grotesk text-on-surface text-xl font-semibold mb-4'>
						Information We Collect
					</h2>
					<p className='text-body-md leading-relaxed mb-6'>
						We collect only the minimum information required to verify your subscription status:
					</p>
					<ul className='space-y-3 text-body-md'>
						<li className='flex gap-3'>
							<span className='material-symbols-outlined text-primary mt-0.5 shrink-0'>check_circle</span>
							<span>
								<strong className='text-on-surface'>Email address</strong> — used solely to identify
								whether your account has an active subscription.
							</span>
						</li>
						<li className='flex gap-3'>
							<span className='material-symbols-outlined text-primary mt-0.5 shrink-0'>check_circle</span>
							<span>
								<strong className='text-on-surface'>Phone number</strong> — used solely to identify
								whether your account has an active subscription.
							</span>
						</li>
					</ul>
					<p className='text-body-md leading-relaxed mt-6'>
						This information is used for no other purpose. We do not analyze it, share it, or use it for
						marketing.
					</p>
				</section>

				<section className='glass-card rounded-xl p-8'>
					<h2 className='font-space-grotesk text-on-surface text-xl font-semibold mb-4'>
						What We Do Not Collect
					</h2>
					<ul className='space-y-3 text-body-md'>
						{[
							'The text you select or translate — ever',
							'Your browsing history or behavior',
							'Device identifiers or fingerprinting data',
							'Usage analytics or interaction logs',
						].map(item => (
							<li key={item} className='flex gap-3'>
								<span className='material-symbols-outlined text-red-400 mt-0.5 shrink-0'>block</span>
								<span>{item}</span>
							</li>
						))}
					</ul>
				</section>

				<section className='glass-card rounded-xl p-8'>
					<h2 className='font-space-grotesk text-on-surface text-xl font-semibold mb-4'>Local Processing</h2>
					<p className='text-body-md leading-relaxed'>
						All translation is performed entirely on your device using a local or pre-subscribed LLM. No
						translation request or result passes through Floating Monk's servers. Your text stays on your
						machine, period.
					</p>
				</section>

				<section className='glass-card rounded-xl p-8'>
					<h2 className='font-space-grotesk text-on-surface text-xl font-semibold mb-4'>Contact</h2>
					<p className='text-body-md leading-relaxed'>
						For any privacy-related questions, contact us at{' '}
						<a href='mailto:admin@floating-monk.org' className='text-primary hover:underline'>
							admin@floating-monk.org
						</a>
						. We aim to respond within 48 hours.
					</p>
				</section>

				<p className='text-xs text-on-surface-variant/50 font-space-grotesk uppercase tracking-widest text-center pt-4'>
					Last updated: April 2026 · Version 1.0
				</p>
			</div>
		</main>
	);
}
