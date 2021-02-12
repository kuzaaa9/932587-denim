var closeColor = document.querySelector('.form-group__item--color-closed');
  var colorToggle = document.querySelector('.form-group__subbutton--color');


    colorToggle.addEventListener("click", function() {
      if ( closeColor.classList.contains('form-group__item--color-closed')) {
         closeColor.classList.remove('form-group__item--color-closed');
         closeColor.classList.add('form-group__item-color--opened');
      }
      else {
        closeColor.classList.remove('form-group__item--color-opened');
        closeColor.classList.add('form-group__item--color-closed');
      }
    }
    );
