let pokemonRepository = (function () {
   let pokemonList = [];
   let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
   let modalContainer = document.querySelector('#modal-container');

  function add(pokemon) {
      if (pokemon.name && pokemon.detailsUrl) {
       pokemonList.push(pokemon);
     } else {
       console.log("pokemon is not correct");
     }
   }

   function getAll() {
     return pokemonList;
   }

   function addListItem(pokemon) {
     let list = document.querySelector('.pokemon-list');
     let listItem = document.createElement('li');
     let buttonItem = document.createElement('button');
     buttonItem.innerText = pokemon.name;
     buttonItem.classList.add('pokemon-button');

     listItem.appendChild(buttonItem);
     list.appendChild(listItem);
     addListener(buttonItem, pokemon);
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

   function loadDetails(item) {
     let url = item.detailsUrl;
     return fetch(url).then(function (response) {
       return response.json();
     }).then(function (details) {

       item.imageUrl = details.sprites.front_default;
       item.height = details.height;

    let types = [];
       details.types.forEach((item) => types.push(item.type.name));
       item.types = types;

     }).catch(function (e) {
       console.error(e);
     });
   }

   function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
     });
   }

 function addListener(button, pokemon) {
    button.addEventListener('click', (event) => showDetails(pokemon));
  }

function showModal(pokemon) {
  modalContainer.innerHTMl = '';

  let modal = document.createElement('div');
  modal.classList.add('modal');

  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  let imgElement = document.createElement('img');
  imgElement.src = pokemon.imageUrl;
  imgElement.classList.add('pokemon-front-image');
  imgElement.setAttribute('alt', 'image of' + pokemon.name);


  let titleElement = document.createElement('h1');
  titleElement.innerText = pokemon.name;

  let heightELement = document.createElement('p');
  heightELement.innerText = `Height: ${pokemon.height}`;

  let typesElement = document.createElement('p');
  typesElement.innerText = `Types: ${pokemon.types.join(',')}`;

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(heightELement);
  modal.appendChild(typesElement);
  modal.appendChild(imgElement);
  modalContainer.appendChild(modal);
  modalContainer.classList.add('is-visible');

}

function hideModal() {
  modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});

modalContainer.addEventListener('click', (e) => {
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

// function showDialog(title, text) {
//   showModal(title, text);
//
//   let modal = modalContainer.querySelector('.modal');
//
//   let confirmButton = document.createElement('button');
//   confirmButton.classList.add('modal-confirm');
//   confirmButton.innerText = 'Confirm';
//
//   let cancelButton = document.createElement('button');
//   cancelButton.classList.add('modal-confirm');
//   cancelButton.innerText = 'Cancel';
//
//   modal.appendChild(confirmButton);
//   modal.appendChild(cancelButton);
//
//   confirmButton.focus();
//   return new Promise((resolve, reject) => {
//     cancelButton.addEventListener('click', hideModal);
//     confirmButton.addEventListener('click', () => {
//       dialogPromiseReject = null;
//       hideModal();
//       resolve();
//     });
//     dialogPromiseReject = reject;
//   });
// }

// document.querySelector('#show-modal').addEventListener('click', () => {
//   showModal('Modal title', 'This is the modal content!');
// });
//
//
// document.querySelector('#show-dialog').addEventListener('click', () => {
//   showDialog('Confirm action', 'Are you sure you want to do this?').then(function() {
//     alert('confirmed!');
//   }, () => {
//     alert('not confirmed');
//   });
// });

// window.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
//     hideModal();
//   }
// });
//
// modalContainer.addEventListener('click', (e) => {
//   let target = e.target;
//   if (target === modalContainer) {
//     hideModal();
//   }
// });
