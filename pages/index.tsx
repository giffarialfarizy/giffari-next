import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<div className='blog-container'>
			<Head>
				<title>Home</title>
				<meta
					name='description'
					content='Giffari Alfarizy personal website'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<h1>Giffari Alfarizy</h1>
				<h2>Title</h2>
				<p className='paragraph'>
					Let’s talk about the future.
				</p>
				<p className='paragraph'>
					I like the idea of decentralization amongst
					nations and want all countries to be as autonomous
					as possible; however, let’s say that we enter
					interstellar space and we discover there are
					hundreds of alien civilizations.
				</p>
				<p className='paragraph'>
					Well, I don’t know about you but *someone* on
					Earth needs to be in charge and it sure as hell
					isn’t going to be a planet full-on individualism!
				</p>
				<p className='paragraph'>
					In order to present a respectable image in the
					galactic playing field, we would need to represent
					our planet and our species, not our particular
					island.
				</p>
				<p className='paragraph'>
					And this is where Tesla CEO Elon Musk sees
					humanity’s biggest problem. Musk believes that by
					the time we realize we should pool our resources
					and unite, it’ll be all too late
				</p>

				<p className='paragraph'>
					“I wonder how many dead ‘one planet’ civilizations
					there are out there in the cosmos? Species that
					never made it to another planet and ultimately
					extinguished themselves or were destroyed by
					external factors. Probably a few.”
				</p>

				<div className='error'>Error message</div>
				<div className='success'>Success message</div>
				<button className='button-ghost'>Ghost</button>
				<button className='button-outline-primary'>
					Cancel
				</button>
				<button className='button-primary'>Submit</button>
				<button className='button-action'>Action</button>

				<hr />

				<div className='card'>ABC DEF GHI JKL MNO PQR</div>
				<p className='paragraph'>Reference:</p>
				<a href='https://medium.com/yardcouch-com/elon-musk-people-dont-realize-what-s-coming-b5a172672bd8'>
					Elon Musk: People Don’t Realize What’s Coming
				</a>
			</main>
		</div>
	);
};

export default Home;
