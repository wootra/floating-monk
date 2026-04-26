import { Link } from 'react-router-dom';
import logo from '../assets/logo1-1.png';

export default function Footer() {
	return (
		<footer className='bg-[#050505] w-full border-t border-white/10 font-space-grotesk text-xs uppercase tracking-widest'>
			<div className='w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8'>
				<div className='flex items-center gap-4'>
					<img src={logo} alt='Floating Monk' className='h-8 w-auto' />
					<span className='text-[#FF5C00] font-bold'>© 2026 FLOATING MONK.</span>
				</div>
				<div className='flex flex-wrap justify-center gap-8'>
					<Link
						to='/privacy/my-smart-translator'
						className='text-gray-600 hover:text-white transition-colors'
					>
						Privacy Policy
					</Link>
					<a href='#support' className='text-gray-600 hover:text-white transition-colors'>
						Technical Support
					</a>
					<a href='#' className='text-gray-600 hover:text-white transition-colors'>
						Terms of Service
					</a>
				</div>
			</div>
		</footer>
	);
}
