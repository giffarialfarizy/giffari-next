import React, { createContext, useState } from 'react';

import { starterPokemon } from '../data/pokemon';

export const PokemonContext = createContext();

export function PokemonWrapper({ children }) {
	// Typescript version
	// const [pokemonList, setPokemonList] =
	// 	useState<pokemonType[]>(starterPokemon);

	const [pokemonList, setPokemonList] =
		useState(starterPokemon);

	const [currentIndex, setCurrentIndex] = useState(-1);

	const initialInput = {
		number: '',
		name: '',
		type: '',
	};

	// const [input, setInput] = useState<pokemonType>(initialInput);
	const [input, setInput] = useState(initialInput);

	// const handleChange = (
	// 	e: React.FormEvent<HTMLInputElement>
	const handleChange = e => {
		let name = e.currentTarget.name;
		let value = e.currentTarget.value;
		setInput({
			...input,
			[name]: value,
		});
	};

	// const handleEdit = (e: any) => {
	const handleEdit = e => {
		let index = parseInt(e.currentTarget.value);
		let itemToBeChanged = pokemonList[index];
		setCurrentIndex(index);
		setInput(itemToBeChanged);
	};

	// const handleDelete = (e: any) => {
	const handleDelete = e => {
		let index = parseInt(e.currentTarget.value);
		let itemToBeDeleted = pokemonList[index];
		// let newList = pokemonList.filter((e: any) => {
		let newList = pokemonList.filter(e => {
			return e !== itemToBeDeleted;
		});
		setPokemonList(newList);
	};

	// const handleSubmit = (e: any) => {
	const handleSubmit = e => {
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
		<PokemonContext.Provider
			value={{
				pokemonList,
				setPokemonList,
				input,
				setInput,
				currentIndex,
				setCurrentIndex,
				handleChange,
				handleEdit,
				handleDelete,
				handleSubmit,
			}}
		>
			{children}
		</PokemonContext.Provider>
	);
}
