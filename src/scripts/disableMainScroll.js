const body = document.querySelector('body');

const disableMainScroll = (bool) => {
    if (bool) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    };
}
export default disableMainScroll;