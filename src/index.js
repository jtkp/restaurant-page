import './style.css';
import {generateHomePage} from './home';
import {generateMenuPage} from './menu';
import {generateContactPage} from './contact';

console.log('hello');
generateHomePage();

const home = document.querySelector('#home');
home.addEventListener('click', generateHomePage);

const menu = document.querySelector('#menu');
menu.addEventListener('click', generateMenuPage);

const contact = document.querySelector('#contact');
contact.addEventListener('click', generateContactPage);