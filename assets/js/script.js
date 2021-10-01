const appHook = document.getElementById('container');
const cardWrapper = document.getElementById('cardWrapper');

const cardAmount = 10;

createStartCard();


function createStartCard() {
    for (let i = 0; i < cardAmount * 2; i++){
        const card = document.createElement('img');
        card.setAttribute('src', '../assets/images/backgroundImg.png');
        card.classList.add('card');
        cardWrapper.append(card);
        card.addEventListener('click', () => someFunction())
    }
}


