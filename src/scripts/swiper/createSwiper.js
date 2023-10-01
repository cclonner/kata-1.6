import Swiper, { Navigation, Pagination } from 'swiper';

const createSwiper = (swiperClass, paginationClass) => {
    return new Swiper(swiperClass, {
        modules: [Navigation, Pagination],
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