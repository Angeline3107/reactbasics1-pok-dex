import React from 'react';

function Navbar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handlePokemonClick = (index) => {
    setPokemonIndex(index);
  };

  if (pokemonList[pokemonIndex]?.name === 'pikachu') {
    alert('pika pikachu !!!');
  }

  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button
          key={index}
          onClick={() => handlePokemonClick(index)}
          disabled={index === pokemonIndex}
        >
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

export default Navbar;