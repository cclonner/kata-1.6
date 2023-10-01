const showMoreBtnToogle = (btnClass, swiperClass) => {
    let btnShowMore = document.querySelector(btnClass, swiperClass);
    let sliderItems = document.querySelector(swiperClass);

    btnShowMore.addEventListener('click', function() {
        sliderItems.classList.toggle('repair__slider--show-all');
        btnShowMore.classList.toggle('repair__btn-show-more--open');
        if (btnShowMore.classList.contains('repair__btn-show-more--open')) {
            btnShowMore.textContent = "Скрыть";
        } else {
            btnShowMore.textContent = "Показать все";
        }
    });
}
export default showMoreBtnToogle;