import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<main className='relative'>
			{/* Hero Section */}
			<section className='relative min-h-[707px] flex flex-col items-center justify-center text-center px-6 py-[120px] overflow-hidden'>
				<div className='absolute inset-0 z-0 opacity-20 pointer-events-none'>
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/20 rounded-full blur-[120px]' />
				</div>
				<div className='relative z-10 max-w-4xl mx-auto'>
					<span className='text-primary font-space-grotesk text-label-sm uppercase tracking-[0.4em] mb-6 block'>
						Digital Enlightenment
					</span>
					<h2 className='text-headline-xl font-space-grotesk text-on-surface mb-8'>FLOATING MONK</h2>
					<p className='text-body-lg font-inter text-on-surface-variant max-w-2xl mx-auto mb-12'>
						A collective of digital craftsmen dedicated to high-precision engineering and focused
						technological innovation. We bridge the gap between complex mechanics and serene user
						experiences.
					</p>
					<button className='px-10 py-4 bg-primary-container text-on-primary-container font-space-grotesk text-body-md rounded-full uppercase tracking-widest font-bold monk-glow transition-all active:scale-95'>
						Explore Collective
					</button>
				</div>
			</section>

			{/* Team Section */}
			<section id='team' className='max-w-7xl mx-auto px-8 py-[120px]'>
				<div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-4'>
					<div>
						<h3 className='text-headline-lg font-space-grotesk text-on-surface'>The Collective</h3>
						<p className='text-on-surface-variant max-w-md font-inter'>
							Our team is a fusion of divergent thinkers, united by the pursuit of technological mastery.
						</p>
					</div>
					<span className='text-primary font-space-grotesk text-label-sm uppercase tracking-widest'>
						Est. 2024
					</span>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-12 gap-[24px]'>
					{/* Lead */}
					<div className='md:col-span-8 glass-card rounded-xl overflow-hidden flex flex-col md:flex-row group'>
						<div className='md:w-1/2 h-64 md:h-auto overflow-hidden'>
							<img
								alt='Portrait of a creative lead'
								className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700'
								src='https://lh3.googleusercontent.com/aida-public/AB6AXuD4-nkMhV_SjXdMk8jWA51JnVtMZ2wUQKeIm9esKfPON_IaEd_K4vMlD_HlB3Zu0l9ETXSYAY2bLJN8A3ELPGgtMpV2QZTLRnfRyDLgXEavCjtzJAHa3CCu6m5zMQi3hXP7auto6g9hWAKaNAV5vv0V6HrEPC7V9tCEP9aXf5tvK-LwKAtNSFGRFdwXKpQC8khDjATQi_Xjv4jQp5wFC3l7FeeizhefKdrRa5udUzqy604Q32n6ejF-R1dZJ8i8b0AhVQmzLiJApDwX'
							/>
						</div>
						<div className='md:w-1/2 p-[32px] flex flex-col justify-center'>
							<span className='text-primary font-space-grotesk text-label-sm uppercase mb-2'>
								Lead Architect
							</span>
							<h4 className='text-headline-md font-space-grotesk mb-4'>Julian Thorne</h4>
							<p className='text-on-surface-variant font-inter'>
								Spearheading the fusion of minimal aesthetics with high-performance systems. A visionary
								in digital equilibrium.
							</p>
						</div>
					</div>

					{/* Member 2 */}
					<div className='md:col-span-4 glass-card rounded-xl p-[32px] flex flex-col justify-between group'>
						<div className='w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 mb-6'>
							<img
								alt='Elena Vance'
								className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all'
								src='https://lh3.googleusercontent.com/aida-public/AB6AXuBNAQ4SDh1-mGq_C3F3mcjCqQoWmELxQWjptpTya4t7zFkXIXzhqSfNOFBubbCHT24WmqNJjeR9EEi71k0ynLofuoiOB2pCXjbRxXjbKOwCICOFlVjQNV90mhHipZbiU026umt4fgb1yieB68YEdug6l-QIzI4TMKJnsBBHJL2I_fIsxdmaj_3ce5vWfzSq4igyOw_GiZQWbljfX9Ctg47R0PN77Rn9jnM04sG6OJo-guIdiqrH5x1AiiYsdz3xfa_r7lWbyvjUbc3d'
							/>
						</div>
						<div>
							<span className='text-primary font-space-grotesk text-label-sm uppercase mb-2'>
								Systems Design
							</span>
							<h4 className='font-space-grotesk text-2xl font-medium mb-2'>Elena Vance</h4>
							<p className='text-on-surface-variant font-inter text-sm'>
								Specializing in fluid interface dynamics and responsive system frameworks.
							</p>
						</div>
					</div>

					{/* Member 3 */}
					<div className='md:col-span-4 glass-card rounded-xl p-[32px] flex flex-col justify-between group'>
						<div className='w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 mb-6'>
							<img
								alt='Marcus Chen'
								className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all'
								src='https://lh3.googleusercontent.com/aida-public/AB6AXuBRoQqrHNqlljk3Cb2u4XPnXluwaB7CsZmMl1Q09pSzZV9YspTqsr-mvI-rAMUvojx5TzKkcUL5957SIRnW_BqIMNvvjomYPz8aDQrAZIc_G2bCbbFwHEyXn8mwpXiUkD7P7Epyxw0qnlYmDiOr8E7ULUkIqQbbAsiy1mY-WLdJf74wBqWyucYuTazddMq4iI88GFW0ylwwSrMJNSSKDW9lNBWFbiQF6sNiQqLLAbEyE2ekMAZQHtS5RPtmfT2l81rXvq2La9GTDiHx'
							/>
						</div>
						<div>
							<span className='text-primary font-space-grotesk text-label-sm uppercase mb-2'>
								Backend Zen
							</span>
							<h4 className='font-space-grotesk text-2xl font-medium mb-2'>Marcus Chen</h4>
							<p className='text-on-surface-variant font-inter text-sm'>
								Master of logic flow and high-frequency data distribution architectures.
							</p>
						</div>
					</div>

					{/* Stat */}
					<div className='md:col-span-8 bg-surface-container-highest/50 border border-white/5 rounded-xl p-[32px] flex items-center justify-center relative overflow-hidden'>
						<div className='absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent' />
						<div className='relative z-10 text-center'>
							<p className='text-headline-xl font-space-grotesk text-primary opacity-50 mb-0'>12+</p>
							<p className='font-space-grotesk text-label-sm uppercase tracking-[0.3em] text-on-surface'>
								Visionary Contributors
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Portfolio Section */}
			<section id='portfolio' className='bg-surface-container-lowest py-[120px]'>
				<div className='max-w-7xl mx-auto px-8'>
					<div className='mb-16'>
						<h3 className='text-headline-lg font-space-grotesk text-on-surface mb-4'>Portfolio</h3>
						<div className='h-1 w-24 bg-primary-container' />
					</div>
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-[24px]'>
						{[
							{
								icon: 'search',
								tag: 'Web Service',
								title: 'Plumber-search',
								desc: 'A hyper-local geolocation engine for trade professionals. Engineered for speed and precision in high-pressure environments.',
								cta: 'Explore Case Study',
								href: '#',
							},
							{
								icon: 'translate',
								tag: 'Browser Ext',
								title: 'My Smart Translation',
								desc: 'Context-aware semantic translation tool that lives in your browser. Bridges cultural gaps with machine learning intelligence.',
								cta: 'View Extension',
								href: '#',
							},
							{
								icon: 'auto_stories',
								tag: 'E-Reader',
								title: 'Dream Reader',
								desc: 'An immersive reading application designed for deep focus. Features adaptive typography and circadian lighting sync.',
								cta: 'Launch Reader',
								href: '#',
							},
						].map(({ icon, tag, title, desc, cta, href }) => (
							<div
								key={title}
								className='glass-card rounded-xl p-8 flex flex-col h-full border-t-2 border-t-primary/20'
							>
								<div className='mb-8 flex justify-between items-start'>
									<span className='material-symbols-outlined text-4xl text-primary'>{icon}</span>
									<span className='px-3 py-1 bg-surface-variant text-primary text-[10px] uppercase font-bold tracking-widest rounded'>
										{tag}
									</span>
								</div>
								<h4 className='text-headline-md font-space-grotesk mb-4'>{title}</h4>
								<p className='text-on-surface-variant font-inter mb-12 flex-grow'>{desc}</p>
								<a
									className='flex items-center gap-2 text-primary font-space-grotesk text-label-sm uppercase group'
									href={href}
								>
									{cta}
									<span className='material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform'>
										arrow_forward
									</span>
								</a>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Support & Privacy Section */}
			<section id='support' className='max-w-7xl mx-auto px-8 py-[120px] grid grid-cols-1 md:grid-cols-2 gap-16'>
				{/* Support */}
				<div>
					<h3 className='text-headline-md font-space-grotesk text-on-surface mb-8'>
						Technical Support Bulletin Board
					</h3>
					<div className='space-y-4'>
						<div className='bg-surface-container-low p-6 rounded-lg border-l-4 border-primary/40'>
							<p className='text-primary font-bold font-inter mb-2'>
								Q: How do I sync My Smart Translation across devices?
							</p>
							<p className='text-on-surface-variant font-inter text-sm'>
								Ensure you are logged into your primary monk-account; the cloud node will handle
								automated latency-free syncing.
							</p>
						</div>
						<div className='bg-surface-container-low p-6 rounded-lg border-l-4 border-primary/40'>
							<p className='text-primary font-bold font-inter mb-2'>
								Q: Is Dream Reader compatible with external E-ink displays?
							</p>
							<p className='text-on-surface-variant font-inter text-sm'>
								Yes, our latest firmware update supports high-refresh E-ink protocols via the Monk-Link
								bridge.
							</p>
						</div>
						<button className='mt-8 flex items-center gap-4 text-primary font-space-grotesk font-bold uppercase tracking-widest border border-primary/30 px-6 py-3 rounded hover:bg-primary/5 transition-colors'>
							Post Question
							<span className='material-symbols-outlined'>forum</span>
						</button>
					</div>
				</div>

				{/* Compliance */}
				<div className='flex flex-col justify-center'>
					<h3 className='text-headline-md font-space-grotesk text-on-surface mb-8'>
						Compliance &amp; Ethics
					</h3>
					<div className='grid gap-6'>
						<Link
							to='/privacy/my-smart-translator'
							className='flex items-center justify-between p-6 bg-[#1A1A1A] border border-white/5 rounded-lg group hover:border-primary/50 transition-all'
						>
							<div>
								<p className='font-bold font-inter'>My Smart Translation</p>
								<p className='text-xs text-on-surface-variant font-inter'>Data Privacy Policy v2.4</p>
							</div>
							<span className='material-symbols-outlined text-on-surface-variant group-hover:text-primary'>
								policy
							</span>
						</Link>
						<a
							href='#'
							className='flex items-center justify-between p-6 bg-[#1A1A1A] border border-white/5 rounded-lg group hover:border-primary/50 transition-all'
						>
							<div>
								<p className='font-bold font-inter'>Dream Reader</p>
								<p className='text-xs text-on-surface-variant font-inter'>
									Reading Behavior Privacy Policy
								</p>
							</div>
							<span className='material-symbols-outlined text-on-surface-variant group-hover:text-primary'>
								security
							</span>
						</a>
						<a
							href='#'
							className='flex items-center justify-between p-6 bg-[#1A1A1A] border border-white/5 rounded-lg group hover:border-primary/50 transition-all'
						>
							<div>
								<p className='font-bold font-inter'>Terms of Service</p>
								<p className='text-xs text-on-surface-variant font-inter'>
									Global Terms and Conditions
								</p>
							</div>
							<span className='material-symbols-outlined text-on-surface-variant group-hover:text-primary'>
								gavel
							</span>
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
