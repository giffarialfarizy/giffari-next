import React, { ReactElement } from 'react';

import { PokemonWrapper } from '../context/PokemonContext';

import LayoutMain from '../layouts/MainLayout';

import PokemonTableComponent from '../components/organism/PokemonTable';
import PokemonFormComponent from '../components/organism/PokemonForm';

const TablePage = () => {
	return (
		<PokemonWrapper>
			<div className='container'>
				{/* Tabel */}
				<PokemonTableComponent />

				{/* Form */}
				<PokemonFormComponent />
			</div>
		</PokemonWrapper>
	);
};

export default TablePage;

TablePage.getLayout = function getLayout(
	page: ReactElement
) {
	return <LayoutMain>{page}</LayoutMain>;
};
