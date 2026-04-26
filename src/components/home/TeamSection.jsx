import { useState } from 'react';
import songImg from '../../assets/song-oil.png';
import reidImg from '../../assets/reid-oil.png';
import mikailImg from '../../assets/mikail-oil.png';

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

export default function TeamSection() {
	const [featuredIndex, setFeaturedIndex] = useState(0);

	const ordered = [TEAM[featuredIndex], ...TEAM.filter((_, i) => i !== featuredIndex)];
	const [featured, ...rest] = ordered;

	return (
		<section id='team' className='max-w-7xl mx-auto px-8 py-[120px]'>
			<div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-4'>
				<div>
					<h3 className='text-headline-lg font-space-grotesk text-on-surface'>The Collective</h3>
					<p className='text-on-surface-variant max-w-md font-inter'>
						Defense, finance, games, mobile, AI research, data analytics — between us we've shipped across
						industries most teams never touch. Heavily powered by AI, grounded by hard-earned experience.
					</p>
				</div>
				<span className='text-primary font-space-grotesk text-label-sm uppercase tracking-widest'>
					Est. 2026
				</span>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-12 gap-[24px]'>
				{/* Featured member */}
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

				{/* Non-featured members */}
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
	);
}
