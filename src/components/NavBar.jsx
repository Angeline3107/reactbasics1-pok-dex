function Navbar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handlePokemonClick = (index) => {
    setPokemonIndex(index);
  };

  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button
          key={index} 
          onClick={() => handlePokemonClick(index)} // Appel de la fonction handlePokemonClick avec l'index
          disabled={index === pokemonIndex} // Désactive le bouton si l'index correspond à l'index actuel
        >
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

export default Navbar;