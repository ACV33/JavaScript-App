let pokemonList = [
  {name: "pikachu", height: "2", type: "electric"},
  {name: "charizard", height: "6" type: "fire", "flying"},
  {name: "eevee", height: "1", type: "normal" }
  document.write("pikachu");
];

let text = "";
let i = 0;
for (;pokemonList[i];){
  text = text + " " + pokemonList[i];
  i++;
}
