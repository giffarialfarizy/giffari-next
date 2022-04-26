import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';

const PokemonTableComponent = () => {
	const { pokemonList, handleEdit, handleDelete } =
		useContext(PokemonContext);

	return (
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
						pokemonList.map((item: any, index: number) => {
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
		</section>
	);
};

export default PokemonTableComponent;
