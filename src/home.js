import coffeeImage from './images/aerial-view-various-coffee.jpg';

const homeDiv = () => {
  const home = document.createElement('div');
  home.className = 'home';

  const homeImg = document.createElement('img');
  homeImg.className = 'home-image';
  homeImg.src = coffeeImage;
  home.appendChild(homeImg);

  const about = document.createElement('div');
  about.className = 'about';
  about.innerHTML = 'It\'s chilly out! Warm up in our cozy cafe with some delicious hot drinks. Freshly brewed coffee and tea, prepared to your liking. See our menu for more details.';
  home.appendChild(about);

  return home;
};

export default homeDiv;
