import Link from 'next/link';

const Navbar = () => {
	return (
		<>
			<nav className='navbar'>
				<ul>
					<li>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href='/table'>
							<a>Table</a>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
