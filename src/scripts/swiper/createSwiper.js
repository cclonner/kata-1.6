import Swiper from 'swiper';

const createSwiper = (swiperClass, paginationClass) => {
    return new Swiper(swiperClass, {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        effect: 'slider',
        slidesPerView: 'auto',

        pagination: {
            el: paginationClass,
            clickable: true,
        }

    });
}
export default createSwiper;