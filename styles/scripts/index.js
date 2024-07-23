// import { header } from '../scripts/header.js';

// header();


const header = () => {
  const burger = document.querySelector('.burger');
  const navigation = document.querySelector('.navigation');
  const decorationLine = document.querySelector('.decoration-line');
  const contacts = document.querySelector('.contacts');

  burger.addEventListener('click', (event) => {
    navigation.classList.toggle('navigation_opened');
    decorationLine.classList.toggle('decoration-line_opened');
    contacts.classList.toggle('contacts_opened');

    burger.classList.toggle('burger_active')

    if (!burger.classList.contains('burger_active')) {
      burger.classList.add('burger_inactive')
    } else {
      burger.classList.remove('burger_inactive')
    }
  })
};




header();