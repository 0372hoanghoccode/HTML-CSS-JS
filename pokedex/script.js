const poke_container = document.getElementById('poke-container');
const pokemon_count = 150;
const pokemons_per_page = 20;
let current_page = 1;
let all_pokemons = [];

const colors = {
    fire: '#FF6D6A',
    grass: '#9BE79A',
    electric: '#FFEB3B',
    water: '#58ABF6',
    ground: '#D2B48C',
    rock: '#C5B78C',
    fairy: '#F4C2C2',
    poison: '#B97FC9',
    bug: '#A8B820',
    dragon: '#7038F8',
    psychic: '#F85888',
    flying: '#A1CFF5',
    fighting: '#D56723',
    normal: '#A8A878'
};

const main_types = Object.keys(colors);

const fetchPokemons = async () => {
    poke_container.innerHTML = ''; 

    const start = (current_page - 1) * pokemons_per_page;
    const end = current_page * pokemons_per_page;
    const paginated_pokemons = all_pokemons.slice(start, end);

    paginated_pokemons.forEach(pokemon => createPokemonCard(pokemon));
    createPagination();
};

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
};

const loadAllPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        const pokemon = await getPokemon(i);
        all_pokemons.push(pokemon);
    }
    fetchPokemons();
};

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');

    const poke_types = pokemon.types.map(type => type.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const color = colors[type];

    pokemonEl.style.backgroundColor = color;

    const pokemonInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">
        </div>
        <div class="info">
            <span class="number">#${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;

    pokemonEl.innerHTML = pokemonInnerHTML;

    poke_container.appendChild(pokemonEl);
};

const createPagination = () => {
    const pagination_container = document.getElementById('pagination');
    pagination_container.innerHTML = ''; 

    const total_pages = Math.ceil(all_pokemons.length / pokemons_per_page);

    // Create Prev button
    const prev_button = document.createElement('button');
    prev_button.classList.add('page-button');
    prev_button.innerText = '<<';
    prev_button.disabled = current_page === 1;

    prev_button.addEventListener('click', () => {
        current_page--;
        fetchPokemons();
    });

    pagination_container.appendChild(prev_button);

    let start_page = Math.max(1, current_page - 2);
    let end_page = Math.min(total_pages, current_page + 2);

    if (current_page <= 2) {
        end_page = Math.min(5, total_pages);
    } else if (current_page + 2 >= total_pages) {
        start_page = Math.max(1, total_pages - 4);
    }

    for (let i = start_page; i <= end_page; i++) {
        const page_button = document.createElement('button');
        page_button.classList.add('page-button');
        page_button.innerText = i;

        if (i === current_page) {
            page_button.classList.add('active');
        }

        page_button.addEventListener('click', () => {
            current_page = i;
            fetchPokemons();
        });

        pagination_container.appendChild(page_button);
    }

    const next_button = document.createElement('button');
    next_button.classList.add('page-button');
    next_button.innerText = '>>';
    next_button.disabled = current_page === total_pages;

    next_button.addEventListener('click', () => {
        current_page++;
        fetchPokemons();
    });

    pagination_container.appendChild(next_button);
};

const showLoading = () => {
    const loadingEl = document.createElement('div');
    loadingEl.classList.add('loading');
    loadingEl.innerHTML = '<div class="spinner"></div><p>Loading Pokémon...</p>';
    document.body.appendChild(loadingEl);
}

const hideLoading = () => {
    const loadingEl = document.querySelector('.loading');
    if (loadingEl) {
        loadingEl.remove();
    }
}

const searchPokemon = (name) => {
    const filtered_pokemons = all_pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()));
    poke_container.innerHTML = '';
    filtered_pokemons.forEach(pokemon => createPokemonCard(pokemon));
}

const addSearchBar = () => {
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search Pokémon...';
    searchInput.addEventListener('input', (e) => searchPokemon(e.target.value));

    searchContainer.appendChild(searchInput);
    document.body.insertBefore(searchContainer, poke_container);
}

const init = async () => {
    addSearchBar();
    showLoading();
    await loadAllPokemons();
    hideLoading();
}

init();
