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

let pokemonList2 = [
  {name: "Jigglypuff"}
]
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

pokemonList.forEach(function(pokemon) {
  document.write(pokemon.name + ' is ' + pokemon.height + ' and is a ' + pokemon.types + 'type.');
});
