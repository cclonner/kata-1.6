import disableMainScroll from "./disableMainScroll";
import sidebarOpenAddHandler from "./asideOpen";


const headerBtnCallback = document.querySelector('.header__button--call');
const menuBtnCallback = document.querySelector('.footer__btn--call');

const sidebarCallback = document.querySelector('.sidebar__callback')



sidebarOpenAddHandler(headerBtnCallback, sidebarCallback)
sidebarOpenAddHandler(menuBtnCallback, sidebarCallback)



const btnClose = document.querySelector('.sidebar__btn--close-callback')

btnClose.addEventListener('click', () => {
    sidebarCallback.classList.remove('sidebar--open')
    disableMainScroll(false)
})

const btnSend = document.querySelector('.form__btn--send-callback')

btnSend.addEventListener('click', (evt) => {
    evt.preventDefault();
    sidebarCallback.classList.remove('sidebar--open')
    disableMainScroll(false)
})

const sidebarOverflow = document.querySelector('.sidebar__overflow--callback')

sidebarOverflow.addEventListener('click', () => {
    sidebarCallback.classList.remove('sidebar--open')
    disableMainScroll(false)
})