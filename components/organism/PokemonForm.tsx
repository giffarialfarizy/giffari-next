import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';

const PokemonFormComponent = () => {
	const { input, handleChange, handleSubmit } =
		useContext(PokemonContext);

	return (
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
	);
};

export default PokemonFormComponent;
