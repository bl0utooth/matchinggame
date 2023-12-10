const gifs = [
 'Spongebob Imagination.gif',
 'Jake the Dog.gif',
 'Dancing Ghost.gif',
 'Bender Dancing.gif',
 'South Park.gif',
 'Stewie.gif',
 'The Office GIF.gif',
 'Lemongrab.gif',
  'Spongebob Imagination.gif',
 'Jake the Dog.gif',
 'Dancing Ghost.gif',
 'Bender Dancing.gif',
 'South Park.gif',
 'Stewie.gif',
 'The Office GIF.gif',
 'Lemongrab.gif',
];

const gameContainer = document.querySelector('.game-container');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function createBoard() {
    for (let i = 0; i < gifs.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        
        const img = document.createElement('img');
        img.src = 'blank.gif'; 
        img.setAttribute('data-id', i);

        card.appendChild(img);
        gameContainer.appendChild(card);
    }
    shuffleCards();
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(gifs[cardId]);
    cardsChosenId.push(cardId);
    this.firstChild.style.display = 'block';

    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('.card');
    const [id1, id2] = cardsChosenId;
    if (cardsChosen[0] === cardsChosen[1] && id1 !== id2) {
        cards[id1].style.visibility = 'hidden';
        cards[id2].style.visibility = 'hidden';
        cardsWon.push(cardsChosen);
    } else {
        cards[id1].firstChild.style.display = 'none';
        cards[id2].firstChild.style.display = 'none';
    }

    cardsChosen = [];
    cardsChosenId = [];

    if (cardsWon.length === gifs.length / 2) {
        alert('Congratulations! You won the game.');
    }
}

function shuffleCards() {
    for (let i = gifs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gifs[i], gifs[j]] = [gifs[j], gifs[i]];
    }
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.firstChild.src = gifs[index];
    });
}

createBoard();
