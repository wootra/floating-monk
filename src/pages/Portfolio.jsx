import { Link } from 'react-router-dom';

const PROJECTS = [
	{
		id: 'plumber-search',
		icon: 'plumbing',
		tag: 'Web Service',
		tagColor: 'text-sky-400 bg-sky-400/10',
		title: 'Plumber-search',
		subtitle: 'License verification at scale',
		desc: 'Verify plumber licenses across 33 states instantly. Powered by automated web crawling and an AI harness that keeps license data accurate and up to date.',
		details: [
			'Covers all 33 states with active plumber licensing boards',
			'Automated weekly crawl refreshes data from official state portals',
			'AI harness validates and normalizes inconsistent license record formats',
			'Sub-second lookup via indexed search on licensee name, number, and company',
		],
		stack: ['Python', 'FastAPI', 'PostgreSQL', 'OpenAI API', 'React'],
		status: 'Live',
		href: '#',
		cta: 'Explore Project',
	},
	{
		id: 'my-smart-translator',
		icon: 'translate',
		tag: 'Browser Extension',
		tagColor: 'text-emerald-400 bg-emerald-400/10',
		title: 'My Smart Translator',
		subtitle: 'Private, local-first translation',
		desc: 'Run translation directly in your browser using a local or pre-subscribed LLM — no data ever leaves your machine. High-quality output, full privacy.',
		details: [
			'Runs entirely in-browser — zero data sent to external servers',
			'Supports local LLMs (Ollama) and pre-subscribed cloud LLM keys',
			'Context-aware translation preserves tone, idiom, and formatting',
			'One-click translate on any selected text across any website',
		],
		stack: ['TypeScript', 'WebExtension API', 'Ollama', 'OpenAI API'],
		status: 'Live',
		href: '#',
		cta: 'View Extension',
		privacyTo: '/privacy/my-smart-translator',
	},
	{
		id: 'dream-reader',
		icon: 'bedtime',
		tag: 'Mobile App',
		tagColor: 'text-violet-400 bg-violet-400/10',
		title: 'Dream Reader',
		subtitle: 'AI-powered dream interpretation',
		desc: 'Tell the app your dream and receive AI-generated insights rooted in the belief that dreams are a window into the subconscious mind.',
		details: [
			'Natural language dream journal with AI interpretation engine',
			'Pattern analysis across multiple dream entries over time',
			'Symbol library grounded in Jungian and cross-cultural frameworks',
			'Fully offline mode — dream data stays on-device by default',
		],
		stack: ['React Native', 'Expo', 'Node.js', 'OpenAI API'],
		status: 'In Development',
		href: '#',
		cta: 'Explore App',
	},
];

export default function Portfolio() {
	return (
		<main className='relative'>
			{/* Hero banner */}
			<section className='relative py-[100px] px-8 text-center overflow-hidden'>
				<div className='absolute inset-0 z-0 pointer-events-none'>
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[120px]' />
				</div>
				<div className='relative z-10 max-w-3xl mx-auto'>
					<span className='text-primary font-space-grotesk text-label-sm uppercase tracking-[0.4em] mb-4 block'>
						What we've built
					</span>
					<h1 className='text-headline-xl font-space-grotesk text-on-surface mb-6'>Portfolio</h1>
					<p className='text-body-lg font-inter text-on-surface-variant'>
						Three engineers, three radically different domains. Every project here is built for real people,
						not demos.
					</p>
				</div>
			</section>

			{/* Project cards */}
			<section className='max-w-7xl mx-auto px-8 pb-[120px] space-y-[48px]'>
				{PROJECTS.map((project, i) => (
					<article
						key={project.id}
						className='glass-card rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2'
					>
						{/* Left — identity */}
						<div className={`p-[48px] flex flex-col justify-between ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
							<div>
								<div className='flex items-center gap-3 mb-6'>
									<span className='material-symbols-outlined text-5xl text-primary'>
										{project.icon}
									</span>
									<span
										className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${project.tagColor}`}
									>
										{project.tag}
									</span>
									<span
										className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${
											project.status === 'Live'
												? 'text-emerald-400 bg-emerald-400/10'
												: 'text-amber-400 bg-amber-400/10'
										}`}
									>
										{project.status}
									</span>
								</div>
								<h2 className='text-headline-lg font-space-grotesk text-on-surface mb-2'>
									{project.title}
								</h2>
								<p className='text-primary font-space-grotesk text-sm uppercase tracking-widest mb-6'>
									{project.subtitle}
								</p>
								<p className='text-on-surface-variant font-inter mb-8 leading-relaxed'>
									{project.desc}
								</p>
							</div>

							<div className='flex flex-wrap gap-2 mt-auto'>
								{project.stack.map(s => (
									<span
										key={s}
										className='px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs font-inter rounded-full border border-white/5'
									>
										{s}
									</span>
								))}
							</div>
						</div>

						{/* Right — details */}
						<div
							className={`bg-surface-container-low p-[48px] flex flex-col justify-between ${
								i % 2 === 1 ? 'lg:order-1' : ''
							}`}
						>
							<div>
								<h3 className='font-space-grotesk text-label-sm uppercase tracking-widest text-primary mb-6'>
									Key Features
								</h3>
								<ul className='space-y-4'>
									{project.details.map((d, idx) => (
										<li
											key={idx}
											className='flex items-start gap-3 text-on-surface-variant font-inter text-sm'
										>
											<span className='material-symbols-outlined text-primary text-base mt-0.5'>
												check_circle
											</span>
											{d}
										</li>
									))}
								</ul>
							</div>

							<div className='mt-10 flex flex-wrap gap-4 items-center'>
								<a
									href={project.href}
									className='flex items-center gap-2 text-primary font-space-grotesk text-label-sm uppercase tracking-widest border border-primary/40 px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors group'
								>
									{project.cta}
									<span className='material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform'>
										arrow_forward
									</span>
								</a>
								{project.privacyTo && (
									<Link
										to={project.privacyTo}
										className='text-on-surface-variant font-inter text-xs hover:text-primary transition-colors underline underline-offset-4'
									>
										Privacy Policy
									</Link>
								)}
							</div>
						</div>
					</article>
				))}
			</section>

			{/* Back to home */}
			<div className='max-w-7xl mx-auto px-8 pb-[80px]'>
				<Link
					to='/'
					className='inline-flex items-center gap-2 text-on-surface-variant font-space-grotesk text-label-sm uppercase tracking-widest hover:text-primary transition-colors group'
				>
					<span className='material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform'>
						arrow_back
					</span>
					Back to Home
				</Link>
			</div>
		</main>
	);
}
