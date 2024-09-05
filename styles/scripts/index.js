// import { header } from '../scripts/header.js';

// header();


const headerBurger = () => {
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

headerBurger();

const modal = () => {
  const btns = document.querySelectorAll('.btn');
  const modal = document.querySelector('.modal');
  const closeBtn = modal.querySelector('.btn-close');

  
  const openModal = () => {
    modal.classList.add('modal_opened');
    attachModalEvents();
  };
  
  btns.forEach(btn => btn.addEventListener('click', openModal));

  const closeModal = (event) => {
    modal.classList.remove('modal_opened');
    detachModalEvents();
  };

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const attachModalEvents = () => {
    closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', handleEscape); 
    modal.addEventListener('click', handleOutsideClick);
  };

  const handleOutsideClick = (event) => {
    const isClickedOutside = !event.target.closest('.modal__content');

    if (isClickedOutside) {
      closeModal();
    }
  };

  const detachModalEvents = () => {
    closeBtn.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', handleEscape);
    modal.removeEventListener('click', handleOutsideClick);
  };
};

modal();