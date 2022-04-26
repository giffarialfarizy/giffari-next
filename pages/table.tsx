import React, { ReactElement, useContext } from 'react';
import LayoutMain from '../layouts/MainLayout';

import { PokemonContext } from '../context/PokemonContext';

type pokemonType = {
	number: string;
	name: string;
	type: string;
};

const TablePage = () => {
	const {
		pokemonList,
		input,
		handleChange,
		handleEdit,
		handleDelete,
		handleSubmit,
	} = useContext(PokemonContext);

	return (
		<div className='container'>
			<div>
				Context <span>{pokemonList[0].name}</span>
			</div>
			{/* Tabel */}
			<section>
				<h2>Table</h2>
				<table>
					<thead>
						<tr>
							<th>Number</th>
							<th>Name</th>
							<th>Type</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{pokemonList &&
							pokemonList.map(
								(item: any, index: number) => {
									return (
										<tr key={item.number}>
											<td>{item.number}</td>
											<td>{item.name}</td>
											<td>{item.type}</td>
											<td>
												<button
													onClick={handleEdit}
													value={index}
												>
													Edit
												</button>
												<button
													onClick={handleDelete}
													value={index}
												>
													Delete
												</button>
											</td>
										</tr>
									);
								}
							)}
					</tbody>
				</table>

				{/* Form */}
				<section style={{ paddingTop: '2rem' }}>
					<h2>Form</h2>
					<form onSubmit={handleSubmit}>
						<div>
							<div>
								<label htmlFor='pokeNumber'>
									Number
									<input
										type='text'
										id='pokeNumber'
										name='number'
										value={input.number}
										onChange={handleChange}
										required={true}
									/>
								</label>
							</div>
							<div>
								<label htmlFor='pokeName'>
									Name
									<input
										type='text'
										id='pokeName'
										name='name'
										value={input.name}
										onChange={handleChange}
										required={true}
									/>
								</label>
							</div>
							<div>
								<label htmlFor='pokeType'>
									Type
									<input
										type='text'
										id='pokeType'
										name='type'
										value={input.type}
										onChange={handleChange}
										required={true}
									/>
								</label>
							</div>
							<button>Sip</button>
						</div>
					</form>
				</section>
			</section>
		</div>
	);
};

export default TablePage;

TablePage.getLayout = function getLayout(
	page: ReactElement
) {
	return <LayoutMain>{page}</LayoutMain>;
};
