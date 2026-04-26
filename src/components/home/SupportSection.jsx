import { Link } from 'react-router-dom';

const FAQ = [
	{
		q: 'Does My Smart Translator send my text to external servers?',
		a: 'No. Nothing is ever sent to a server. All translation happens entirely on your local computer — your text, your model, your machine.',
	},
	{
		q: 'How current is the license data in Plumber-search?',
		a: 'The license database is refreshed once a week. Our crawler pulls the latest records from official state licensing boards across all 33 supported states on a weekly cycle.',
	},
];

export default function SupportSection() {
	return (
		<section id='support' className='max-w-7xl mx-auto px-8 py-[120px] grid grid-cols-1 md:grid-cols-2 gap-16'>
			{/* Support */}
			<div>
				<h3 className='text-headline-md font-space-grotesk text-on-surface mb-8'>
					Technical Support Bulletin Board
				</h3>
				<div className='space-y-4'>
					{FAQ.map(({ q, a }) => (
						<div key={q} className='bg-surface-container-low p-6 rounded-lg border-l-4 border-primary/40'>
							<p className='text-primary font-bold font-inter mb-2'>Q: {q}</p>
							<p className='text-on-surface-variant font-inter text-sm'>{a}</p>
						</div>
					))}
					<Link
						to='/board'
						className='mt-8 inline-flex items-center gap-4 text-primary font-space-grotesk font-bold uppercase tracking-widest border border-primary/30 px-6 py-3 rounded hover:bg-primary/5 transition-colors'
					>
						Post Question
						<span className='material-symbols-outlined'>forum</span>
					</Link>
				</div>
			</div>

			{/* Compliance */}
			<div className='flex flex-col justify-center'>
				<h3 className='text-headline-md font-space-grotesk text-on-surface mb-8'>Compliance &amp; Ethics</h3>
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
							<p className='text-xs text-on-surface-variant font-inter'>Global Terms and Conditions</p>
						</div>
						<span className='material-symbols-outlined text-on-surface-variant group-hover:text-primary'>
							gavel
						</span>
					</a>
				</div>
			</div>
		</section>
	);
}
