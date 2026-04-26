import { Link } from 'react-router-dom';

const SECTIONS = [
	{
		title: 'Acceptance of Terms',
		body: 'By accessing or using any Floating Monk product, website, or service, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.',
	},
	{
		title: 'Who We Are',
		body: 'Floating Monk is an independent engineering collective — not a registered corporation. We build software products for public use, including My Smart Translator, Plumber-search, and Dream Reader.',
	},
	{
		title: 'Use of Our Services',
		items: [
			'You may use our products for personal or professional purposes within the bounds of applicable law.',
			'You may not use our services to engage in illegal activity, harassment, or abuse.',
			'You may not attempt to reverse-engineer, scrape, or exploit our infrastructure.',
			'Subscription access is granted to the individual purchaser and may not be shared or resold.',
		],
	},
	{
		title: 'Intellectual Property',
		body: 'All code, design, branding, and content created by Floating Monk remains the intellectual property of Floating Monk. You may not copy, reproduce, or distribute our work without explicit written permission.',
	},
	{
		title: 'Subscriptions & Payments',
		items: [
			'Subscription fees are billed in advance on a recurring basis.',
			'You may cancel your subscription at any time; access continues until the end of the billing period.',
			'We do not offer refunds for partial billing periods.',
			'Pricing may change with 30 days notice communicated via email.',
		],
	},
	{
		title: 'Disclaimer of Warranties',
		body: 'Our services are provided "as is" without warranties of any kind. We do not guarantee uninterrupted availability or error-free operation. Use at your own risk.',
	},
	{
		title: 'Limitation of Liability',
		body: 'Floating Monk is not liable for any indirect, incidental, or consequential damages arising from your use of our products. Our total liability is limited to the amount you paid us in the 12 months prior to the claim.',
	},
	{
		title: 'Changes to These Terms',
		body: 'We may update these Terms at any time. Continued use of our services after changes constitutes acceptance of the updated Terms. We will notify active subscribers of material changes by email.',
	},
	{
		title: 'Contact',
		contact: true,
	},
];

export default function TermsOfService() {
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
					<span className='material-symbols-outlined text-4xl text-primary'>gavel</span>
				</div>
				<h1 className='text-headline-lg font-space-grotesk text-on-surface mb-2'>Terms of Service</h1>
				<p className='text-on-surface-variant font-inter'>Floating Monk · Effective April 2026</p>
				<div className='h-1 w-24 bg-primary-container mt-6' />
			</div>

			<div className='space-y-6 font-inter text-on-surface-variant'>
				{SECTIONS.map(({ title, body, items, contact }) => (
					<section key={title} className='glass-card rounded-xl p-8'>
						<h2 className='font-space-grotesk text-on-surface text-xl font-semibold mb-4'>{title}</h2>
						{body && <p className='text-body-md leading-relaxed'>{body}</p>}
						{items && (
							<ul className='space-y-3 text-body-md'>
								{items.map(item => (
									<li key={item} className='flex gap-3'>
										<span className='text-primary font-bold shrink-0 mt-0.5'>—</span>
										<span>{item}</span>
									</li>
								))}
							</ul>
						)}
						{contact && (
							<p className='text-body-md leading-relaxed'>
								For questions about these Terms, contact us at{' '}
								<a href='mailto:admin@floating-monk.org' className='text-primary hover:underline'>
									admin@floating-monk.org
								</a>
								. We aim to respond within 48 hours.
							</p>
						)}
					</section>
				))}

				<p className='text-xs text-on-surface-variant/50 font-space-grotesk uppercase tracking-widest text-center pt-4'>
					Last updated: April 2026 · Version 1.0
				</p>
			</div>
		</main>
	);
}
