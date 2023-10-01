import createSwiper from "./createSwiper";



const swiperToogle = (swiperName, swiperClass, pgnClass) => {

    const mediaQuery = window.matchMedia('(min-width: 768px)');
    mediaQuery.addEventListener('change', checkWidth);

    checkWidth(mediaQuery);

    function checkWidth(evt) {

        if (!evt.matches) {
            swiperName = createSwiper(swiperClass, pgnClass);
        } else {
            if (swiperName !== undefined) {
                swiperName.destroy(true, true)
            }
        }

    }
};

export default swiperToogle;