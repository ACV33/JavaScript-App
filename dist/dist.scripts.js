let pokemonRepository=function(){let g=[];function b(a){a.name&&a.detailsUrl?g.push(a):console.log("pokemon is not correct")}function c(){return g}function a(){let a=$("input").val();$("li").each(function(){let b=$(this);b.text().startsWith(a.toLowerCase())?b.show():b.hide()})}function d(a){return fetch(a.detailsUrl).then(function(a){return a.json()}).then(function(b){a.spriteUrl=b.sprites.front_default,a.svgUrl=b.sprites.other.dream_world.front_default,a.height=b.height,a.types=b.types;let c=[];b.types.forEach(a=>c.push(a.type.name)),a.types=c}).catch(function(a){console.error(a)})}function e(a){d(a).then(function(){f(a)})}function f(a){let c=$(".modal-title"),b=$(".modal-body");c.empty(),b.empty();let d=$(`<h1>${a.name}</h1>`),e=$(`<img class="modal-sprite" src="${a.spriteUrl}" alt="Sprite of Pokemon">`),f=$(`<p class="mt-2 ml-4 mb-1">Height: ${a.height}</p>`),g=$(`<p class="mt-2 ml-4 mb-1">Types: ${a.types.join(", ")}</p>`),h=$(`<img class="modal-img mx-auto" src="${a.svgUrl}" alt="SVG illustration of Pokemon">`);c.append(d),c.append(e),b.append(f),b.append(g),b.append(h)}return $("input").on("input",a),{add:b,getAll:c,addListItem:function(c){let d=document.querySelector(".pokemon-list"),b=document.createElement("li"),a=document.createElement("button");a.innerText=c.name,a.addEventListener("click",function(a){e(c),a.target.blur}),a.classList.add("button-class","btn","btn-primary"),a.classList.add("btn-block","btn-outline-primary","m-1"),a.classList.add("bg-primary","text-capitalize"),a.setAttribute("data-toggle","modal"),a.setAttribute("data-target",".modal"),b.classList.add("group-list-item"),b.classList.add("col-sm-9"),b.appendChild(a),d.appendChild(b)},showDetails:e,loadList:function(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(a){return a.json()}).then(function(a){a.results.forEach(function(a){let c={name:a.name,detailsUrl:a.url};b(c),console.log(c)})}).catch(function(a){console.error(a)})},loadDetails:d,showModal:f,filterList:a}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(a){pokemonRepository.addListItem(a)})})
