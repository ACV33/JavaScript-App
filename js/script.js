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

for (const pokemon of pokemonList) {
  if (pokemon.height > 5){
    document.write (pokemon.name + " that's a big Pokemon!");
  } else{
    document.write(`<p>${pokemon.name} is ${pokemon.height} feet tall and is a ${pokemon.types} type.</p>`);
  }
}
