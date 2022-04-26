import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactElement } from 'react';
import LayoutMain from '../layouts/MainLayout';

const Home = () => {
	return (
		<div className='container'>
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
				<div>
					<span className='bg-primary text-white'>
						Primary
					</span>
					<span className='bg-success text-white'>
						Success
					</span>
				</div>
				<div>
					<span className='bg-primary'>Base</span>
					<span className='bg-primary-light-2'>
						Light 2
					</span>
					<span className='bg-primary-light-4'>
						Light 4
					</span>
					<span className='bg-primary-light-6'>
						Light 6
					</span>
					<span className='bg-primary-light-8'>
						Light 8
					</span>
					<span className='bg-primary-light-9'>
						Light 10
					</span>
				</div>
				<section className='blog'>
					<h2>Title</h2>
					<p>Let’s talk about the future.</p>
					<p>
						I like the idea of decentralization amongst
						nations and want all countries to be as
						autonomous as possible; however, let’s say that
						we enter interstellar space and we discover
						there are hundreds of alien civilizations.
					</p>
					<p>
						Well, I don’t know about you but *someone* on
						Earth needs to be in charge and it sure as hell
						isn’t going to be a planet full-on
						individualism!
					</p>
					<p>
						In order to present a respectable image in the
						galactic playing field, we would need to
						represent our planet and our species, not our
						particular island.
					</p>
					<p>
						And this is where Tesla CEO Elon Musk sees
						humanity’s biggest problem. Musk believes that
						by the time we realize we should pool our
						resources and unite, it’ll be all too late
					</p>

					<p>
						“I wonder how many dead ‘one planet’
						civilizations there are out there in the cosmos?
						Species that never made it to another planet and
						ultimately extinguished themselves or were
						destroyed by external factors. Probably a few.”
					</p>
				</section>

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
				<p>Reference:</p>
				<a href='https://medium.com/yardcouch-com/elon-musk-people-dont-realize-what-s-coming-b5a172672bd8'>
					Elon Musk: People Don’t Realize What’s Coming
				</a>
			</main>
		</div>
	);
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
	return <LayoutMain>{page}</LayoutMain>;
};
