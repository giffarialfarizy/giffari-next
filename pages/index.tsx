import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
	return (
		<>
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
			</main>
		</>
	);
};

export default Home;
