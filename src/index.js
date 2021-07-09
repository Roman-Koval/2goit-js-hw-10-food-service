import tmp from "./templates/menu.hbs";
import menu from "./menu.json";
import './sass/styles.css';
import './js/theme-switch';

const listEl = document.querySelector('.js-menu');
listEl.innerHTML = tmp(menu);