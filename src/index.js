import cardsTpl from './templates/menu-cards.hbs';
import menu from '../src/menu.json';
import localStorage from '../src/localstorage';

const cardsMarkup = createCardsMarkup(menu);
const cardsContainer = document.querySelector('.js-menu');
cardsContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsMarkup(menu) {
    return cardsTpl(menu);
}