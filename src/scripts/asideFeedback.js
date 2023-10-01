import disableMainScroll from "./disableMainScroll"
import sidebarOpenAddHandler from "./asideOpen"

const footerBtn = document.querySelector('.footer__btn--msg')
const headerBtn = document.querySelector('.header__button--chat')
const sidebarFeedback = document.querySelector('.sidebar__feedback')

sidebarOpenAddHandler(footerBtn, sidebarFeedback);
sidebarOpenAddHandler(headerBtn, sidebarFeedback);


const btnClose = document.querySelector('.sidebar__btn--close-feedback')

btnClose.addEventListener('click', () => {
    sidebarFeedback.classList.remove('sidebar--open')
    disableMainScroll(false)
})

const btnSend = document.querySelector('.form__btn--send-feedback')

btnSend.addEventListener('click', (evt) => {
    disableMainScroll(false)
})

const sidebarOverflow = document.querySelector('.sidebar__overflow--feedback')

sidebarOverflow.addEventListener('click', () => {
    sidebarFeedback.classList.remove('sidebar--open')
    disableMainScroll(false)
})