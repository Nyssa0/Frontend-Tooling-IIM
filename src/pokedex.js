function pokedex() {
  for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        const pokemon = {
          name: result.name,
          image: result.sprites.front_default,
          hp: result.stats[0].base_stat,
          moves: result.moves,
          type: result.types[0].type.name,
        };

        returnPokemon(pokemon);
        return pokemon;
      });
  }
}

pokedex();

function returnPokemon(pokemon) {
  let card = document.querySelector(".pokedex");
  let pokemon_card = defineCard(pokemon);
  let pokemon_moves_names = [];

  for (let j = 0; j < 2; j++) {
    let pokemon_move = pokemon.moves[j].move.name;
    pokemon_moves_names.push(pokemon_move);
  }

  card.innerHTML += `
                    <div class="card">
                        <img class="card__background" src="${pokemon_card}" alt="pokemon card">
                        <div class="card__content">
                            <div class="pokemon__header">
                                <div>${pokemon.name}</div>
                                <div><span>pv</span>${pokemon.hp}</div>
                            </div>
                            <div class="pokemon__image">
                                <img src="${pokemon.image}" alt="pokemon">
                            </div>
                            <div class="pokemon__footer">
                                <div>${pokemon_moves_names[0]}</div>
                                <div>${pokemon_moves_names[1]}</div>
                            </div>
                        </div>
                    </div>
                    `;

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      console.log("test");
    });
  });
}

function defineCard(pokemon) {
  // let pokemon_type = pokemon.types[0].type.name
  let pokemon_card = "";

  switch (pokemon.type) {
    case "dark":
      pokemon_card = "../assets/dark.png";
      break;
    case "dragon":
      pokemon_card = "../assets/dragon.png";
      break;
    case "electric":
      pokemon_card = "../assets/electric.png";
      break;
    case "fairy":
      pokemon_card = "../assets/fairy.png";
      break;
    case "fighting":
      pokemon_card = "../assets/fighting.png";
      break;
    case "fire":
      pokemon_card = "../assets/fire.png";
      break;
    case "grass":
      pokemon_card = "../assets/grass.png";
      break;
    case "psychic":
      pokemon_card = "../assets/psychic.png";
      break;
    case "steel":
      pokemon_card = "../assets/steel.png";
      break;
    case "water":
      pokemon_card = "../assets/water.png";
      break;
    default:
      pokemon_card = "../assets/normal.png";
      break;
  }

  return pokemon_card;
}
