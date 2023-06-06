let url = 'https://deckofcardsapi.com/api/deck';

// Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).

let singleCard = axios.get(`${url}/new/draw/?count=1`);
singleCard
    .then(res => console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`))
    .catch(err => console.log(err));


// Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck

let twoCards = axios.get(`${url}/new/draw/?count=2`);
twoCards
    .then(res => console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}, ${res.data.cards[1].value} of ${res.data.cards[1].suit}`))
    .catch(err => console.log(err));

// Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.

const button = document.querySelector('#cardbtn');
const image = document.querySelector('#cardimg');
let deckId = null;

axios.get(`${url}/new/shuffle`)
    .then(result => { deckId = result.data.deck_id; })
    .catch((error) => console.error('error', error));

function emptyTheDeck() {
    axios.get(`${url}/${deckId}/draw`)
        .then(res => {
            let remaining = res.data.remaining;
            console.log(remaining);
            if (res.data.cards.length > 0) {
                image.src = res.data.cards[0].image;
            } else {
                button.style.display = 'none';
            }
        });
}

button.addEventListener('click', emptyTheDeck);