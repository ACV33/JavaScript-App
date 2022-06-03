let pokemonRepository = (function () {
   let pokemonList = [];
   let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
   let input = $('input');
   input.on('input', filterList);


//adds pokemon and typeof
  function add(pokemon) {
      if (pokemon.name && pokemon.detailsUrl) {
       pokemonList.push(pokemon);
     } else {
       console.log("pokemon is not correct");
     }
   }

// returns pokemonList
   function getAll() {
     return pokemonList;
   }


   function addListItem(pokemon) {
     let pokemonList = document.querySelector('.pokemon-list');
     let pokeListItem = document.createElement('li');
     let button = document.createElement('button');
     button.innerText = pokemon.name;
     button.addEventListener("click", function (event) {
          showDetails(pokemon);
          event.target.blur;
     });

      button.classList.add('button-class', 'btn', 'btn-primary');
      button.classList.add('btn-block', 'btn-outline-primary', 'm-1');
      button.classList.add('bg-primary', 'text-capitalize');
      button.setAttribute('data-toggle', 'modal');
      button.setAttribute('data-target', '.modal');
      pokeListItem.classList.add('group-list-item');
      pokeListItem.classList.add('col-sm-9');



     pokeListItem.appendChild(button);
     pokemonList.appendChild(pokeListItem);
   }

   function loadList() {
     return fetch(apiUrl).then(function (response) {
       return response.json();
     }).then(function (json) {
       json.results.forEach(function (item) {
         let pokemon = {
              name: item.name,
              detailsUrl: item.url
         };
              add(pokemon);
              console.log(pokemon);
        });
     }).catch(function (e) {
       console.error(e);
     })
   }

   function filterList() {
           let inputValue = $('input').val();
           let list = $('li');
           list.each(function () {
             let item = $(this);
             let name = item.text();
             if (name.startsWith(inputValue.toLowerCase())) {
               item.show();
             } else {
               item.hide();
             }
           });
         }

   function loadDetails(item) {
     let url = item.detailsUrl;
     return fetch(url).then(function (response) {
       return response.json();
     }).then(function (details) {

       item.imageUrl = details.sprites.front_default;
       item.height = details.height;
       item.types = details.types;

    let types = [];
       details.types.forEach((item) => types.push(item.type.name));
       item.types = types;

     }).catch(function (e) {
       console.error(e);
     });
   }

   function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemonList);
     });
   }

function showModal(pokemonList) {
  let modalTitle = $(".modal-title");
  let modalBody = $(".modal-body");


  modalTitle.empty();
  modalBody.empty();

        let pokemonName = $(`<h1>${pokemon.name}</h1>`);
        let pokemonSprite = $(`<img class="modal-sprite" src="${pokemon.spriteUrl}" alt="Sprite of Pokemon">`);
        let pokemonHeight = $(`<p class="mt-2 ml-4 mb-1">Height: ${pokemon.height}</p>`);
        let pokemonTypes = $(`<p class="mt-2 ml-4 mb-1">Types: ${pokemon.types.join(', ')}</p>`);
        let pokemonSvg = $(`<img class="modal-img mx-auto" src="${pokemon.svgUrl}" alt="SVG illustration of Pokemon">`);


  modalTitle.append(titleElement);
  modalBody.append(closeButtonElement);
  modalBody.append(titleElement);
  modalBody.append(heightELement);
  modalBody.append(typesElement);
  modalBody.append(imgElement);
}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    filterList: filterList
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
