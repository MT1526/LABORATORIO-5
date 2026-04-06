// Función que se ejecuta al hacer clic en "Buscar"
function buscarPokemon() {
  // Obtiene el valor del input y lo convierte a minúsculas
  const nombre = document.getElementById("pokemonInput").value.toLowerCase();

  // Hace una petición a la API con fetch()
  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then((response) => response.json()) // Convierte la respuesta a JSON
    .then((data) => {
      // Llama a la función para mostrar los datos
      mostrarPokemon(data);
    })
    .catch((error) => {
      // Si hay error (ej: no existe el Pokémon)
      document.getElementById("pokemon").innerHTML =
        "<p>Pokémon no encontrado</p>";
    });
}

// Función para mostrar la información en pantalla
function mostrarPokemon(data) {
  document.getElementById("pokemon").innerHTML = `
    <!-- Nombre del Pokémon (propiedad simple) -->
    <h2>${data.name}</h2>

    <!-- Imagen (propiedad anidada: sprites.front_default) -->
    <img src="${data.sprites.front_default}" alt="${data.name}">

    <!-- Altura (propiedad simple) -->
    <p><strong>Altura:</strong> ${data.height}</p>

    <!-- Peso (propiedad simple) -->
    <p><strong>Peso:</strong> ${data.weight}</p>
  `;
}

