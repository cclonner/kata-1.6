import disableMainScroll from "./disableMainScroll";


const sidebarOpenAddHandler = (btn, sidebar) => {
    btn.addEventListener('click', () => {
        sidebar.classList.add('sidebar--open');
        disableMainScroll(true);
    });

};

export default sidebarOpenAddHandler;