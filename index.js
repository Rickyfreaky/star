// app.js
const characterList = document.getElementById('character-list');
const characterDetails = document.getElementById('character-details');

// Function to make an HTTP request to the Star Wars API
async function fetchCharacters() {
    try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display the character list
function displayCharacterList(characters) {
    characterList.innerHTML = '';
    characters.forEach(character => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = character.name;
        listItem.addEventListener('click', () => displayCharacterDetails(character));
        characterList.appendChild(listItem);
    });
}

// Function to display character details
function displayCharacterDetails(character) {
    characterDetails.innerHTML = `
        <h3>${character.name}</h3>
        <p>Gender: ${character.gender}</p>
        <p>Height: ${character.height} cm</p>
    `;
}

// Initialize the app
(async () => {
    const characters = await fetchCharacters();
    displayCharacterList(characters);
})();
