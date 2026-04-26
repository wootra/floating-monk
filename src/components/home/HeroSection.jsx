export default function HeroSection() {
	return (
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
					Three engineers. Wildly different backgrounds. One shared mission — create software that makes the
					world a little better than before. AI-powered, human-driven, and proudly not a company.
				</p>
				<button className='px-10 py-4 bg-primary-container text-on-primary-container font-space-grotesk text-body-md rounded-full uppercase tracking-widest font-bold monk-glow transition-all active:scale-95'>
					Explore Collective
				</button>
			</div>
		</section>
	);
}
