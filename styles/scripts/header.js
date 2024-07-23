const header = () => {
  const burger = document.querySelector('.burger');

  burger.addEventListener('click', (event) => {
    console.log('click!');
  })
  // burger.classList.toggle('burger_opened')
};

export default header;