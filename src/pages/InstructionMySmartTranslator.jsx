import { Link } from 'react-router-dom';

const STEPS = [
	{
		number: '01',
		title: 'Install & Open',
		description:
			'Install My Smart Translator from the Chrome Web Store. Click the puzzle-piece icon in your toolbar and pin the extension, then click it to open the popup.',
	},
	{
		number: '02',
		title: 'Choose Your AI Engine',
		description:
			'Open the dashboard (⚙ icon in the popup) and go to Translation Rules. Under "Active Model", select a model from the dropdown. Pick a local Ollama model for full privacy, or a cloud model for maximum quality.',
		image: '/my-smart-translator/01-translation-rules.png',
		imageAlt: 'Translation Rules tab showing model selection and language settings',
	},
	{
		number: '03',
		title: 'Add Your API Key',
		description:
			'If you chose a cloud model (OpenAI, Anthropic, or Gemini), go to the API Keys tab and paste your key. Keys are stored with 256-bit obfuscation in your browser\'s local storage — they never leave your device.',
		image: '/my-smart-translator/03-api-keys.png',
		imageAlt: 'API Keys tab showing OpenAI, Anthropic, and Google Gemini key fields',
	},
	{
		number: '04',
		title: 'Set Your Languages',
		description:
			'Back on the Translation Rules tab, set your Source Language (Auto Detect works for most cases) and Target Language. These become your defaults for every page you translate.',
		image: '/my-smart-translator/01-translation-rules.png',
		imageAlt: 'Language source and target selectors',
	},
	{
		number: '05',
		title: 'Translate a Page',
		description:
			'Click the extension icon on any webpage. Hit "Translate Page" to translate the full page, or select any text and right-click → "Translate Selection" for inline translation.',
	},
	{
		number: '06',
		title: 'Configure Your Engines',
		description:
			'The Engines tab lets you add custom models — any OpenAI-compatible endpoint works. You can define multiple engines and switch between them from the popup.',
		image: '/my-smart-translator/02-engines.png',
		imageAlt: 'Engines tab showing custom model configuration',
	},
	{
		number: '07',
		title: 'Unlock Premium Features',
		description:
			'Start a 14-day free trial from the Subscription tab. Premium unlocks Context-Aware Translation (understands the full page before translating) and Full Page Translation mode.',
		image: '/my-smart-translator/04-subscription.png',
		imageAlt: 'Subscription tab showing free and premium plan options',
	},
];

const TIPS = [
	{
		icon: 'bolt',
		title: 'Use Auto-Translate',
		body: 'Enable Auto-Translate in Translation Rules to translate pages automatically when they load — no button click needed.',
	},
	{
		icon: 'history',
		title: 'Translation Cache',
		body: 'Repeated phrases are served from cache instantly. Clear or inspect your cache any time from the History & Cache tab.',
	},
	{
		icon: 'computer',
		title: 'Go Fully Local with Ollama',
		body: 'Install Ollama on your machine and select a local model. Translation runs 100% offline — no API key, no data leaving your device.',
	},
	{
		icon: 'tune',
		title: 'Skip Navigation Nodes',
		body: 'Turn on "Skip Navigation Nodes" to avoid translating menus and buttons — this keeps the page layout clean and speeds up translation.',
	},
];

export default function InstructionMySmartTranslator() {
	return (
		<main className='max-w-4xl mx-auto px-8 py-[80px]'>
			{/* Header */}
			<div className='mb-16'>
				<Link
					to='/'
					className='inline-flex items-center gap-2 text-[#FF5C00] font-space-grotesk text-[10px] uppercase tracking-widest mb-8 hover:opacity-80 transition-opacity'
				>
					<span className='material-symbols-outlined text-sm'>arrow_back</span>
					Back to Home
				</Link>
				<div className='flex items-center gap-4 mb-4'>
					<span className='material-symbols-outlined text-4xl text-[#FF5C00]'>translate</span>
					<span className='px-3 py-1 bg-white/5 text-[#FF5C00] text-[10px] uppercase font-bold tracking-widest rounded font-space-grotesk border border-[#FF5C00]/20'>
						Browser Ext
					</span>
				</div>
				<h1 className='text-4xl md:text-5xl font-space-grotesk text-white font-black tracking-tight mb-3'>
					My Smart Translator
				</h1>
				<p className='text-gray-400 font-inter text-lg'>Getting Started Guide</p>
				<div className='h-1 w-24 bg-[#FF5C00]/60 mt-6' />
			</div>

			{/* Intro */}
			<section className='glass-card rounded-2xl p-8 mb-16 border border-white/10'>
				<p className='font-inter text-gray-300 text-base leading-relaxed'>
					My Smart Translator lets you translate any webpage using the AI model of your choice — a local
					Ollama model running on your machine, or a cloud provider like OpenAI, Claude, or Gemini via
					your own API key. Your text is never routed through our servers.
				</p>
				<div className='mt-6 flex flex-wrap gap-3'>
					<a
						href='https://chromewebstore.google.com'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF5C00] text-white font-space-grotesk text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-[#FF5C00]/90 transition-colors'
					>
						<span className='material-symbols-outlined text-base'>download</span>
						Install from Chrome Web Store
					</a>
					<a
						href='/privacy/my-smart-translator'
						className='inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 text-gray-400 font-space-grotesk text-xs uppercase tracking-widest rounded-xl hover:border-[#FF5C00]/40 hover:text-[#FF5C00] transition-colors'
					>
						<span className='material-symbols-outlined text-base'>shield</span>
						Privacy Policy
					</a>
				</div>
			</section>

			{/* Steps */}
			<section className='mb-20'>
				<h2 className='font-space-grotesk text-white text-2xl font-bold mb-10 tracking-tight'>
					Step-by-Step Setup
				</h2>
				<div className='space-y-16'>
					{STEPS.map(step => (
						<div key={step.number} className='flex flex-col gap-6'>
							<div className='flex items-start gap-5'>
								<div className='flex-shrink-0 w-12 h-12 rounded-2xl bg-[#FF5C00]/10 border border-[#FF5C00]/20 flex items-center justify-center'>
									<span className='font-space-grotesk text-[#FF5C00] text-sm font-black'>{step.number}</span>
								</div>
								<div>
									<h3 className='font-space-grotesk text-white text-xl font-bold mb-2'>{step.title}</h3>
									<p className='font-inter text-gray-400 text-base leading-relaxed'>{step.description}</p>
								</div>
							</div>
							{step.image && (
								<div className='rounded-2xl overflow-hidden border border-white/10 shadow-2xl ml-17'>
									<img
										src={step.image}
										alt={step.imageAlt}
										className='w-full object-cover'
										loading='lazy'
									/>
								</div>
							)}
						</div>
					))}
				</div>
			</section>

			{/* Tips */}
			<section className='mb-20'>
				<h2 className='font-space-grotesk text-white text-2xl font-bold mb-10 tracking-tight'>
					Pro Tips
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{TIPS.map(tip => (
						<div key={tip.title} className='glass-card rounded-2xl p-6 border border-white/10 monk-glow'>
							<div className='flex items-center gap-3 mb-3'>
								<span className='material-symbols-outlined text-[#FF5C00] text-xl'>{tip.icon}</span>
								<h4 className='font-space-grotesk text-white font-bold text-base'>{tip.title}</h4>
							</div>
							<p className='font-inter text-gray-400 text-sm leading-relaxed'>{tip.body}</p>
						</div>
					))}
				</div>
			</section>

			{/* Appearance */}
			<section className='mb-20'>
				<h2 className='font-space-grotesk text-white text-2xl font-bold mb-6 tracking-tight'>
					Customize the Look
				</h2>
				<p className='font-inter text-gray-400 text-base leading-relaxed mb-8'>
					The Appearance tab lets you adjust how translations are displayed — font size, overlay style,
					highlight colors, and more.
				</p>
				<div className='rounded-2xl overflow-hidden border border-white/10 shadow-2xl'>
					<img
						src='/my-smart-translator/05-appearance.png'
						alt='Appearance tab showing display customization options'
						className='w-full object-cover'
						loading='lazy'
					/>
				</div>
			</section>

			{/* Support */}
			<section className='glass-card rounded-2xl p-8 border border-white/10 text-center'>
				<span className='material-symbols-outlined text-3xl text-[#FF5C00] mb-4 block'>support_agent</span>
				<h3 className='font-space-grotesk text-white text-xl font-bold mb-2'>Need Help?</h3>
				<p className='font-inter text-gray-400 text-sm mb-6'>
					Found a bug or have a feature request? Post it on our support board.
				</p>
				<Link
					to='/board'
					className='inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-gray-400 font-space-grotesk text-xs uppercase tracking-widest rounded-xl hover:border-[#FF5C00]/40 hover:text-[#FF5C00] transition-colors'
				>
					<span className='material-symbols-outlined text-base'>forum</span>
					Support Board
				</Link>
			</section>
		</main>
	);
}
