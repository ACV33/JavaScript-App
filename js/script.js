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
  let repository = [
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
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "height" in pokemon &&
        "types" in pokemon
      ) {
        repository.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
    }

  function getAll() {
    return repository;
  }

  function addListItem(pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      button.addEventListener('click', function showDetails(pokemon) {
        document.createElement('button')
      }
    )
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
}
  function showDetails(pokemon){
    console.log(pokemonRepository);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
    };
})();


pokemonRepository.getAll().forEach(function (pokemon){
  pokemonRepository.addListItem(pokemon);
});

console.log(pokemonRepository.getAll());
