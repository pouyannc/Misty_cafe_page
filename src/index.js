import './style.css';
import headerDiv from './header';
import homeDiv from './home';

const content = document.querySelector('#content');

content.appendChild(headerDiv());
content.appendChild(homeDiv());
