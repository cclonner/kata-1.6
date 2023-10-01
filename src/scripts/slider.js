  const btnShowMoreBrand = document.querySelector('.slider__btn-show-more--brand');
  const sliderItemsBrand = document.querySelector('.slider__items--brand');


  btnShowMoreBrand.addEventListener('click', function() {

      if (sliderItemsBrand.classList.contains('slider__items--show-all')) {
          sliderItemsBrand.classList.remove('slider__items--show-all');
          btnShowMoreBrand.classList.remove('slider__btn-show-more--open')
          btnShowMoreBrand.textContent = "Показать все"

      } else {
          sliderItemsBrand.classList.add('slider__items--show-all');
          btnShowMoreBrand.textContent = "Скрыть"
          btnShowMoreBrand.classList.add('slider__btn-show-more--open')
      }
  });

  const btnShowMoreType = document.querySelector('.slider__btn-show-more--type');
  const sliderItemsType = document.querySelector('.slider__items--type');


  btnShowMoreType.addEventListener('click', function() {

      if (sliderItemsType.classList.contains('slider__items--show-all')) {
          sliderItemsType.classList.remove('slider__items--show-all');
          btnShowMoreType.classList.remove('slider__btn-show-more--open')
          btnShowMoreType.textContent = "Показать все"

      } else {
          sliderItemsType.classList.add('slider__items--show-all');
          btnShowMoreType.textContent = "Скрыть"
          btnShowMoreType.classList.add('slider__btn-show-more--open')
      }
  });