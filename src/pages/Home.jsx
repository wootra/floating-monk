import { useState } from 'react';
import { Link } from 'react-router-dom';
import songImg from '../assets/song-oil.png';
import reidImg from '../assets/reid-oil.png';
import mikailImg from '../assets/mikail-oil.png';

const TEAM = [
	{
		id: 'song',
		img: songImg,
		role: 'Lead Architect',
		name: 'Songhyeon Jun',
		bio: 'Battle-tested across national defense, finance, web games, and AI research. Songhyeon connects the dots between industries others keep separate — then builds something no one else thought to build.',
	},
	{
		id: 'reid',
		img: reidImg,
		role: 'Game Architect & Specialist',
		name: 'Reid Autry',
		bio: 'A game engineer with deep roots in web and mobile development. Reid brings interactive systems to life with the precision of a craftsman and the instincts of a player.',
	},
	{
		id: 'mikail',
		img: mikailImg,
		role: 'BE Architect & Data Analytics',
		name: 'Mikail Miller',
		bio: "The team's safety guard. A game developer turned data analyst with a background in accounting and finance — Mikail's analytical depth keeps systems honest and insights sharp.",
	},
];

export default function Home() {
	const [featuredIndex, setFeaturedIndex] = useState(0);

	// Rotate so the clicked member is first, others follow in original order
	const ordered = [TEAM[featuredIndex], ...TEAM.filter((_, i) => i !== featuredIndex)];
	const [featured, ...rest] = ordered;

	return (
		<main className='relative'>
			{/* Hero Section */}
			<section className='relative min-h-[707px] flex flex-col items-center justify-center text-center px-6 py-[120px] overflow-hidden'>
				<div className='absolute inset-0 z-0 opacity-20 pointer-events-none'>
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/20 rounded-full blur-[120px]' />
				</div>
				<div className='relative z-10 max-w-4xl mx-auto'>
					<span className='text-primary font-space-grotesk text-label-sm uppercase tracking-[0.4em] mb-6 block'>
						Engineering Creative Team · Est. 2026
					</span>
					<h2 className='text-headline-xl font-space-grotesk text-on-surface mb-8'>FLOATING MONK</h2>
					<p className='text-body-lg font-inter text-on-surface-variant max-w-2xl mx-auto mb-12'>
						Three engineers. Wildly different backgrounds. One shared mission — create software that makes
						the world a little better than before. AI-powered, human-driven, and proudly not a company.
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
							Defense, finance, games, mobile, AI research, data analytics — between us we've shipped
							across industries most teams never touch. Heavily powered by AI, grounded by hard-earned
							experience.
						</p>
					</div>
					<span className='text-primary font-space-grotesk text-label-sm uppercase tracking-widest'>
						Est. 2026
					</span>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-12 gap-[24px]'>
					{/* Featured member — large card */}
					<div className='md:col-span-8 glass-card rounded-xl overflow-hidden flex flex-col md:flex-row group'>
						<div className='md:w-1/2 h-64 md:h-auto overflow-hidden'>
							<img
								alt={featured.name}
								className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700'
								src={featured.img}
							/>
						</div>
						<div className='md:w-1/2 p-[32px] flex flex-col justify-center'>
							<span className='text-primary font-space-grotesk text-label-sm uppercase mb-2'>
								{featured.role}
							</span>
							<h4 className='text-headline-md font-space-grotesk mb-4'>{featured.name}</h4>
							<p className='text-on-surface-variant font-inter'>{featured.bio}</p>
						</div>
					</div>

					{/* Non-featured members — small cards */}
					{rest.map(member => (
						<div
							key={member.id}
							className='md:col-span-4 glass-card rounded-xl p-[32px] flex flex-col justify-between group cursor-pointer hover:border-primary/40 border border-transparent transition-colors duration-200'
							onClick={() => setFeaturedIndex(TEAM.findIndex(m => m.id === member.id))}
						>
							<div className='w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 mb-6'>
								<img
									alt={member.name}
									className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all'
									src={member.img}
								/>
							</div>
							<div>
								<span className='text-primary font-space-grotesk text-label-sm uppercase mb-2'>
									{member.role}
								</span>
								<h4 className='font-space-grotesk text-2xl font-medium mb-2'>{member.name}</h4>
								<p className='text-on-surface-variant font-inter text-sm'>{member.bio}</p>
							</div>
							<div className='mt-4 flex items-center gap-1 text-primary/60 font-space-grotesk text-label-sm uppercase tracking-widest group-hover:text-primary transition-colors'>
								<span>Feature</span>
								<span className='material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform'>
									arrow_forward
								</span>
							</div>
						</div>
					))}

					{/* Stat */}
					<div className='md:col-span-8 bg-surface-container-highest/50 border border-white/5 rounded-xl p-[32px] flex items-center justify-center relative overflow-hidden'>
						<div className='absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent' />
						<div className='relative z-10 text-center'>
							<p className='text-headline-xl font-space-grotesk text-primary opacity-50 mb-0'>3</p>
							<p className='font-space-grotesk text-label-sm uppercase tracking-[0.3em] text-on-surface'>
								Engineers. One Mission.
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
								Q: Does My Smart Translator send my text to external servers?
							</p>
							<p className='text-on-surface-variant font-inter text-sm'>
							No. Nothing is ever sent to a server. All translation happens entirely on your local
							computer — your text, your model, your machine.
							</p>
						</div>
						<div className='bg-surface-container-low p-6 rounded-lg border-l-4 border-primary/40'>
							<p className='text-primary font-bold font-inter mb-2'>
								Q: How current is the license data in Plumber-search?
							</p>
							<p className='text-on-surface-variant font-inter text-sm'>
							The license database is refreshed once a week. Our crawler pulls the latest records
							from official state licensing boards across all 33 supported states on a weekly cycle.
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
								<p className='font-bold font-inter'>My Smart Translator</p>
								<p className='text-xs text-on-surface-variant font-inter'>Data Privacy Policy</p>
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
