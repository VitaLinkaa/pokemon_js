'use strict';

const fetchButton = document.querySelector('#getPokemon');


// пишем функцию, которая рандомно ищет покемона(их 807 штук)
async function getRandomPokemon() {
	const rawPokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 807)}/`)
	const pokemonData = await rawPokemonData.json();
	console.log(pokemonData);
	await addPokemonToThePage(pokemonData);

}


function addPokemonToThePage (pokemonData) {
	const container = document.querySelector('.container');

	const div = document.createElement('div');
	const image = document.createElement('img');
	const name = document.createElement('span');
	const order = document.createElement('span');
	const exp = document.createElement('span');

	div.className = 'pokemonCard';
	image.src = pokemonData.sprites.front_default;
	name.innerHTML = pokemonData.name;
	// order.innerHTML = pokemonData.order;
	// exp.innerHTML = pokemonData.base_experience;

	div.append(image, name, order, exp);

	container.innerHTML = '';
	container.appendChild(div);
	
}

// вешаем на кнопочку ивент нажатия 

fetchButton.addEventListener('click', getRandomPokemon);


// fetch - получаем данные с ресурсов