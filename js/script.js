// A conditonal that lists the pokemons out with there height and type
// function printArrayDetails(list){
// for (const pokemon of pokemonList) {
 // if (pokemon.height > 5){
 //  document.write (pokemon.name + " that's a big Pokemon!");
//  } else{
//    document.write(`<p>${pokemon.name} is ${pokemon.height} feet tall and is a ${pokemon.types} type.</p>`);
//  }}}

//printArrayDetails(pokemonList);
//printArrayDetails(pokemonList2);


let pokemonRepository = (function () {
  let pokemonList = [
    {name: "Pikachu",
    height: "2",
    types: "electric"
  },
  {
    name: "Charizard",
    height: "6",
    types: "fire"
  },
  {
    name: "Eevee",
    height: "1",
    types: "normal" }
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonRepository;
  }

  return {
    add: add,
    getAll: getAll
    };
})();

pokemonList.forEach(pokemonRepository);
  document.write(pokemon.name + ' is ' + pokemon.height + ' and is a ' + pokemon.types + 'type.');

pokemonRepository.getAll(pokemonList);
pokemonRepository.add(item);
