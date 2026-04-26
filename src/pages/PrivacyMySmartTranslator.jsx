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
				<p className='text-on-surface-variant font-inter'>Data Privacy Policy v2.4</p>
				<div className='h-1 w-24 bg-primary-container mt-6' />
			</div>

			<div className='space-y-10 font-inter text-on-surface-variant'>
				<section className='glass-card rounded-xl p-8'>
					<h2 className='font-space-grotesk text-on-surface text-xl font-semibold mb-4'>Overview</h2>
					<p className='text-body-md leading-relaxed'>
						My Smart Translator is a browser extension developed by Floating Monk that provides
						context-aware semantic translation directly in your browser. We are committed to protecting your
						privacy and being transparent about how your data is handled.
					</p>
				</section>

				<section className='glass-card rounded-xl p-8'>
					<h2 className='font-space-grotesk text-on-surface text-xl font-semibold mb-4'>
						Information We Collect
					</h2>
					<ul className='space-y-3 text-body-md'>
						<li className='flex gap-3'>
							<span className='material-symbols-outlined text-primary mt-0.5 shrink-0'>check_circle</span>
							<span>
								<strong className='text-on-surface'>Selected text:</strong> Text you highlight for
								translation is processed in real-time and is never stored permanently on our servers.
							</span>
						</li>
						<li className='flex gap-3'>
							<span className='material-symbols-outlined text-primary mt-0.5 shrink-0'>check_circle</span>
							<span>
								<strong className='text-on-surface'>Language preferences:</strong> Your source and
								target language preferences are stored locally in your browser.
							</span>
						</li>
						<li className='flex gap-3'>
							<span className='material-symbols-outlined text-primary mt-0.5 shrink-0'>check_circle</span>
							<span>
								<strong className='text-on-surface'>Anonymous usage analytics:</strong> Aggregate,
								anonymized usage statistics to help us improve the extension. No personally identifiable
								information is included.
							</span>
						</li>
					</ul>
				</section>

				<section className='glass-card rounded-xl p-8'>
					<h2 className='font-space-grotesk text-on-surface text-xl font-semibold mb-4'>
						How We Use Your Data
					</h2>
					<p className='text-body-md leading-relaxed mb-4'>
						Data processed by My Smart Translator is used solely to provide the translation service.
						Specifically:
					</p>
					<ul className='space-y-3 text-body-md'>
						<li className='flex gap-3'>
							<span className='text-primary font-bold shrink-0'>—</span>
							Text submitted for translation is sent to our secure translation API over HTTPS and is not
							retained after the response is returned.
						</li>
						<li className='flex gap-3'>
							<span className='text-primary font-bold shrink-0'>—</span>
							We do not sell, trade, or share your data with third parties for marketing purposes.
						</li>
						<li className='flex gap-3'>
							<span className='text-primary font-bold shrink-0'>—</span>
							We do not build individual user profiles or track browsing behavior.
						</li>
					</ul>
				</section>

				<section className='glass-card rounded-xl p-8'>
					<h2 className='font-space-grotesk text-on-surface text-xl font-semibold mb-4'>Cross-Device Sync</h2>
					<p className='text-body-md leading-relaxed'>
						If you choose to enable cross-device sync via a Monk Account, your language preferences and
						translation history (if enabled) are encrypted and stored on our servers. You can delete this
						data at any time from your account settings. Sync is opt-in and can be disabled at any time.
					</p>
				</section>

				<section className='glass-card rounded-xl p-8'>
					<h2 className='font-space-grotesk text-on-surface text-xl font-semibold mb-4'>Data Retention</h2>
					<p className='text-body-md leading-relaxed'>
						Translation requests are not logged or retained beyond the duration of the API call. Local
						browser storage data remains on your device until you uninstall the extension or clear browser
						data. Account-linked data is retained until you delete your Monk Account.
					</p>
				</section>

				<section className='glass-card rounded-xl p-8'>
					<h2 className='font-space-grotesk text-on-surface text-xl font-semibold mb-4'>Your Rights</h2>
					<ul className='space-y-3 text-body-md'>
						{[
							'Access the data we hold about you',
							'Request deletion of your account and associated data',
							'Opt out of anonymous analytics at any time via extension settings',
							'Export your data in a portable format',
						].map(right => (
							<li key={right} className='flex gap-3'>
								<span className='material-symbols-outlined text-primary mt-0.5 shrink-0'>shield</span>
								<span>{right}</span>
							</li>
						))}
					</ul>
				</section>

				<section className='glass-card rounded-xl p-8'>
					<h2 className='font-space-grotesk text-on-surface text-xl font-semibold mb-4'>Contact</h2>
					<p className='text-body-md leading-relaxed'>
						For any privacy-related questions or requests, contact our Data Privacy team at{' '}
						<a href='mailto:admin@floating-monk.org' className='text-primary hover:underline'>
							admin@floating-monk.org
						</a>
						. We aim to respond to all inquiries within 48 hours.
					</p>
				</section>

				<p className='text-xs text-on-surface-variant/50 font-space-grotesk uppercase tracking-widest text-center pt-4'>
					Last updated: April 2026 · Version 2.4
				</p>
			</div>
		</main>
	);
}
