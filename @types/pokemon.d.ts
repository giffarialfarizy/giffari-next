export interface IPokemon {
	number: string;
	name: string;
	type: string;
}

export type PokemonContextType = {
	pokemon: IPokemon[];
};
