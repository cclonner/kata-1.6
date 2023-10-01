const servicesList = document.querySelector('.services__list');

servicesList.addEventListener('click', (evt) => {
    const serviceItem = evt.target;
    servicesList.querySelector('.services__item--active').classList.remove('services__item--active')
    serviceItem.classList.add('services__item--active')
})