const PROJECTS = [
	{
		icon: 'plumbing',
		tag: 'Web Service',
		title: 'Plumber-search',
		desc: 'Verify plumber licenses across 33 states instantly. Powered by automated web crawling and an AI harness that keeps license data accurate and up to date.',
		cta: 'Explore Project',
		href: '#',
	},
	{
		icon: 'translate',
		tag: 'Browser Ext',
		title: 'My Smart Translator',
		desc: 'Run translation directly in your browser using a local or pre-subscribed LLM — no data sent to third-party servers. High-quality output, full privacy.',
		cta: 'View Extension',
		href: '#',
	},
	{
		icon: 'bedtime',
		tag: 'Mobile App',
		title: 'Dream Reader',
		desc: 'Tell the app your dream and receive AI-generated insights rooted in the belief that dreams are a window into the subconscious mind.',
		cta: 'Explore App',
		href: '#',
	},
];

export default function PortfolioSection() {
	return (
		<section id='portfolio' className='bg-surface-container-lowest py-[120px]'>
			<div className='max-w-7xl mx-auto px-8'>
				<div className='mb-16'>
					<h3 className='text-headline-lg font-space-grotesk text-on-surface mb-4'>Portfolio</h3>
					<div className='h-1 w-24 bg-primary-container' />
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-[24px]'>
					{PROJECTS.map(({ icon, tag, title, desc, cta, href }) => (
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
	);
}
