import mistyCoffee from './images/latte-gd824188dc_1920.jpg';
import blackCoffee from './images/coffee-gd5daf92ac_1920.jpg';
import americanoImg from './images/coffee-g5f78487b6_1920.jpg';
import latteImg from './images/coffee-gca9f266ee_1920.jpg';
import cappImg from './images/dan-smedley-765Ogj6zVuI-unsplash.jpg';
import espressoImg from './images/adi-goldstein-xKS-1DP4g7A-unsplash.jpg';
import earlImg from './images/yana-bhKdRjYJ1CA-unsplash.jpg';
import pekoeImg from './images/lucas-george-wendt-AbfVHFSEIKk-unsplash.jpg';
import matchaImg from './images/zoe-N4GN-4s9-rs-unsplash.jpg';
import peachHerbalImg from './images/teacora-rooibos-sOp_AVUXk98-unsplash.jpg';
import gingerHerbalImg from './images/julia-topp-kuIiEew8V-A-unsplash.jpg';

const menuDiv = () => {
  const menu = document.createElement('div');
  menu.className = 'menu';

  const coffee = document.createElement('div');
  coffee.className = 'coffee';
  const coffeeTitle = document.createElement('div');
  coffeeTitle.className = 'coffee-title';
  coffeeTitle.innerHTML = 'Coffees';

  coffee.appendChild(coffeeTitle);

  const coffeeMenu = document.createElement('div');
  coffeeMenu.className = 'coffee-menu';
  coffee.appendChild(coffeeMenu);

  const coffeeIds = ['misty-coffee', 'black-coffee', 'americano', 'latte', 'cappuccino', 'espresso'];
  const coffeeNames = ['Misty Café au Lait', 'Coffee (Light/ Medium/ Dark Roast)', 'Americano', 'Latte', 'Cappuccino', 'Espresso'];
  const coffeePrices = ['$3', '$2', '$3', '$4', '$4', '$2'];
  const coffeeImages = [mistyCoffee, blackCoffee, americanoImg, latteImg, cappImg, espressoImg];

  for (let i = 0; i < coffeeIds.length; i += 1) {
    const coffeeItem = document.createElement('div');
    coffeeItem.id = coffeeIds[i];

    coffeeItem.appendChild(
      Object.assign(document.createElement('img'), { className: 'coffee-image', src: coffeeImages[i] }),
    );
    coffeeItem.appendChild(
      Object.assign(document.createElement('div'), { className: 'coffee-name', innerHTML: coffeeNames[i] }),
    );
    coffeeItem.appendChild(
      Object.assign(document.createElement('div'), { className: 'coffee-price', innerHTML: coffeePrices[i] }),
    );

    coffeeMenu.appendChild(coffeeItem);
  }

  const tea = document.createElement('div');
  tea.className = 'tea';
  const teaTitle = document.createElement('div');
  teaTitle.className = 'tea-title';
  teaTitle.innerHTML = 'Teas';

  tea.appendChild(teaTitle);

  const teaMenu = document.createElement('div');
  teaMenu.className = 'tea-menu';
  tea.appendChild(teaMenu);

  const teaIds = ['earl-grey', 'orange-pekoe', 'matcha', 'peach', 'ginger'];
  const teaNames = ['Earl Grey', 'Orange Pekoe', 'Matcha Green Tea', 'Peach Herbal Tea', 'Ginger Herbal Tea'];
  const teaPrices = ['$2', '$2', '$2', '$2', '$2'];
  const teaImages = [earlImg, pekoeImg, matchaImg, peachHerbalImg, gingerHerbalImg];

  for (let i = 0; i < teaIds.length; i += 1) {
    const teaItem = document.createElement('div');
    teaItem.id = teaIds[i];

    teaItem.appendChild(
      Object.assign(document.createElement('img'), { className: 'tea-image', src: teaImages[i] }),
    );
    teaItem.appendChild(
      Object.assign(document.createElement('div'), { className: 'tea-name', innerHTML: teaNames[i] }),
    );
    teaItem.appendChild(
      Object.assign(document.createElement('div'), { className: 'tea-price', innerHTML: teaPrices[i] }),
    );

    teaMenu.appendChild(teaItem);
  }

  menu.appendChild(coffee);
  menu.appendChild(tea);

  return menu;
};

export default menuDiv;
