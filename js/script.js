let pokemonList = [
  {name: "pikachu",
  height: "2",
  types: "electric"
},
{
  name: "charizard",
  height: "6",
  types: "fire"
},
{
  name: "eevee",
  height: "1",
  types: "normal" }
];

for (const pokemon of pokemonList) {
  document.write("Pikachu (height: 2)" + " ");
  document.write("Charizard" +  "(height: 6)" + " ");
  document.write("Eevee" + "(height: 1)" + " ");
}
