import './style.css';
import headerDiv from './header';
import homeDiv from './home';
import menuDiv from './menu';
import contactDiv from './contact';

const content = document.querySelector('#content');
content.appendChild(headerDiv());
content.appendChild(homeDiv());

const homeBtn = document.querySelector('.title');
const menuBtn = document.querySelector('.menu-button');
const contactBtn = document.querySelector('.contact-button');

homeBtn.addEventListener('click', () => { content.replaceChild(homeDiv(), content.children[1]); });
menuBtn.addEventListener('click', () => { content.replaceChild(menuDiv(), content.children[1]); });
contactBtn.addEventListener('click', () => { content.replaceChild(contactDiv(), content.children[1]); });
