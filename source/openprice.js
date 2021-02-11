
var closePrice = document.querySelector('.form-group__item--price-close');
var priceToggle = document.querySelector('.form-group__subbutton--price');

    priceToggle.addEventListener("click", function() {
      if (closePrice.classList.contains('form-group__item--price-closed')) {
        closePrice.classList.remove('form-group__item--price-closed');
        closePrice.classList.add('form-group__item--price-opened');
      }
      else {
        priceToggle.classList.remove('form-group__item--price-opened');
        priceToggle.classList.add('form-group__item--price-closed');
      }
    }
    );
