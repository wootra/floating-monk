import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo2-1.png';
import logoText from '../assets/logo3.png';

export default function Header() {
	return (
		<header className='bg-[#0A0A0A]/80 backdrop-blur-xl sticky top-0 z-50 border-b border-white/10 shadow-[0_0_20px_rgba(255,92,0,0.1)]'>
			<div className='flex items-center justify-between px-8 py-4 w-full max-w-7xl mx-auto'>
				<Link to='/' className='flex items-center gap-4'>
					<img src={logo} alt='Floating Monk' className='h-10 w-auto' />
					<img src={logoText} alt='Floating Monk' className='h-10 w-auto' />
				</Link>

				<nav className='hidden md:flex items-center gap-8'>
					{[
						{ label: 'Team', to: '/#team' },
						{ label: 'Portfolio', to: '/#portfolio' },
						{ label: 'Support', to: '/#support' },
						{ label: 'Privacy', to: '/privacy/my-smart-translator' },
					].map(({ label, to }) => (
						<NavLink
							key={label}
							to={to}
							className={({ isActive }) =>
								`font-medium font-space-grotesk uppercase tracking-widest hover:text-[#FF5C00] transition-all active:scale-95 duration-200 ${
									isActive
										? 'text-[#FF5C00] font-bold border-b-2 border-[#FF5C00] pb-1'
										: 'text-gray-400'
								}`
							}
						>
							{label}
						</NavLink>
					))}
				</nav>

				<button className='md:hidden text-[#FF5C00]'>
					<span className='material-symbols-outlined'>menu</span>
				</button>
			</div>
		</header>
	);
}
