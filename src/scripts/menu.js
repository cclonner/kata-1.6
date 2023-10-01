import disableMainScroll from "./disableMainScroll";

const btnBurger = document.querySelector('.header__button--burger');
const menuBurger = document.querySelector('.burger__wrapper');

const menuOverflow = document.querySelector('.burger__overflow');

const btnBurgerClose = document.querySelector('.burger__btn--close');


const menuOpen = () => {
    menuBurger.classList.add('burger__wrapper--open')
    menuOverflow.classList.add('burger__overflow--open')
    disableMainScroll(true)
}
const menuClose = () => {
    menuBurger.classList.remove('burger__wrapper--open')
    menuOverflow.classList.remove('burger__overflow--open')
    disableMainScroll(false)
}

btnBurger.addEventListener('click', menuOpen)
btnBurgerClose.addEventListener('click', menuClose)

menuOverflow.addEventListener('click', menuClose)


const asideServises = document.querySelector('.aside-services');

asideServises.addEventListener('click', (evt) => {
    const asideService = evt.target;
    evt.preventDefault();
    asideServises.querySelector('.aside-services__item--active').classList.remove('aside-services__item--active');
    asideService.classList.toggle('aside-services__item--active');
})