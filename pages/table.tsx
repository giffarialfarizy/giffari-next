import React, { ReactElement, useState } from 'react';
import LayoutMain from '../layouts/MainLayout';

import { starterPokemon } from '../data/pokemon';

type pokemonType = {
	number: string;
	name: string;
	type: string;
};

const TablePage = () => {
	const [pokemonList, setPokemonList] =
		useState<pokemonType[]>(starterPokemon);

	const [currentIndex, setCurrentIndex] = useState(-1);

	const initialInput = {
		number: '',
		name: '',
		type: '',
	};

	const [input, setInput] =
		useState<pokemonType>(initialInput);

	const handleChange = (
		e: React.FormEvent<HTMLInputElement>
	) => {
		let name = e.currentTarget.name;
		let value = e.currentTarget.value;
		setInput({
			...input,
			[name]: value,
		});
	};

	const handleEdit = (e: any) => {
		let index = parseInt(e.currentTarget.value);
		let itemToBeChanged = pokemonList[index];
		setCurrentIndex(index);
		setInput(itemToBeChanged);
	};

	const handleDelete = (e: any) => {
		let index = parseInt(e.currentTarget.value);
		let itemToBeDeleted = pokemonList[index];
		let newList = pokemonList.filter(e => {
			return e !== itemToBeDeleted;
		});
		setPokemonList(newList);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		let newList = pokemonList;
		if (currentIndex === -1) {
			newList = [...pokemonList, input];
		} else {
			newList[currentIndex] = input;
		}
		setPokemonList(newList);
		setInput(initialInput);
		setCurrentIndex(-1);
	};

	return (
		<div className='container'>
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
							pokemonList.map((item, index) => {
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
							})}
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
