function Navbar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  return (
    <>
      <button
        onClick={() => setPokemonIndex(pokemonIndex - 1)}
        disabled={pokemonIndex === 0}
      >
        Précédent
      </button>

      <button
        onClick={() => setPokemonIndex(pokemonIndex + 1)}
        disabled={pokemonIndex === pokemonList.length - 1}
      >
        Suivant
      </button>
    </>
  )
}

export default Navbar