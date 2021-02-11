  var navFilters = document.querySelector('.filters__nav');
  var filtersOpenButton = document.querySelector('.filters__btn');
  var filtersCloseButton = document.querySelector('.form-group__item-btn--close');

    filtersOpenButton.addEventListener("click", function() {
      navFilters.classList.remove('filters__nav--closed');
      navFilters.classList.add('filters__nav--opened');
    });

    filtersCloseButton.addEventListener("click", function() {
        navFilters.classList.remove('filters__nav--opened');
        navFilters.classList.add('filters__nav--closed');
    });


// if (document.documentElement.clientWidth > 768)
// if (document.documentElement.clientWidth < 1200) {

// } else {

// };
//
//if (document.documentElement.clientWidth
//
//
