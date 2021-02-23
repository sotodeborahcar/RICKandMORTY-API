// fetch("https://rickandmortyapi.com/api/character/14")
//   .then((data) => {
//     return data.json();
//   })
//   .then((info) => {
//     console.log(info);
//     const card = document.querySelector("section");

//     card.innerHTML = `
//     <article>
//     <div class="imagen">
//       <img src="${info.image}">
//     </div>
//     <div class="info">
//     <div class="nombre">
//       <h2>${info.name}</h2>
//     </div>
//     <div class="estado">
//       <p>${info.status}</p>
//       - <p>${info.species}</p>
//     </div>
//     <div class="ubicacion">
//       <p>Last known location:</p>
//       <p>${info.location.name}</p>
//     </div>
//     <div class="episodio">
//       <p>First seen in:</p>
//       <p>${info.episode[0]}</p>
//     </div>
//   </div>
//   </article>
//     `;
//   });

// CON ARRAYS:

// fetch("https://rickandmortyapi.com/api/character")
//   .then((data) => {
//     return data.json();
//   })
//   .then((personajes) => {
//     console.log(personajes);
//     const link = document.querySelector("#prox");
//     link.href = personajes.info.next;
//     const seccion = document.querySelector("section");

//     seccion.innerHTML = "";
//     personajes.results.map((personaje) => {
//       seccion.innerHTML += `
//     <article>
//         <div class="imagen">
//             <img src="${personaje.image}">
//         </div>
//         <div class="info">
//             <div class="nombre">
//                 <h2>${personaje.name}</h2>
//             </div>
//             <div class="estado">
//                 <p>${personaje.status}</p>
//                 - <p>${personaje.species}</p>
//             </div>
//             <div class="ubicacion">
//                 <p>Last known location:</p>
//                 <p>${personaje.location.name}</p>
//             </div>
//             <div class="episodio">
//                 <p>First seen in:</p>
//                 <p>${personaje.episode[0]}</p>
//             </div>
//         </div>
//     </article>
//     `;
//     });
//   });

// HACER UN NEXT:

const buscarInfo = (url) => {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((personajes) => {
      console.log(personajes);
      const link = document.querySelector("#prox");

      link.onclick = (e) => {
        e.preventDefault();
        buscarInfo(personajes.info.next);
      };

      const seccion = document.querySelector("section");

      seccion.innerHTML = "";
      personajes.results.map((personaje) => {
        seccion.innerHTML += `
    <article>
      <div class="card">
        <div class="imagen">
            <img src="${personaje.image}">
        </div>
        <div class="info">
            <div class="nombre">
                <h2>${personaje.name}</h2>
            </div>
            <div class="estado">
                <p>${personaje.status}</p>
                - <p>${personaje.species}</p>
            </div>
            <div class="ubicacion">
                <p>Last known location:</p>
                <p>${personaje.location.name}</p>
            </div>
            <div class="episodio">
                <p>First seen in:</p>
                <p>${personaje.episode[0]}</p>
            </div>
        </div>
      </div>
    </article>
        `;
      });
    });
};

buscarInfo("https://rickandmortyapi.com/api/character");

// consejos para la tarea
// empiecen haciendo el fetch y recibiendo la info en la consola
// maquetan en html
// pasan la maqueta de html a javascript
// USEN SASS

// // comunicandonos con la api de marvel

// fetch(
//   "https://gateway.marvel.com/v1/public/comics?apikey=cdf503fce8f2c519f899f64cff25fd79&offset=0&orderBy=title"
// )
//   .then((data) => {
//     return data.json();
//   })
//   .then((info) => {
//     console.log(info);
//   });
