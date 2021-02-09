  var navFilters = document.querySelector('.filters__nav');
  var filtersToggle = document.querySelector('.filters__btn');

    filtersToggle.addEventListener("click", function() {
      if ( navFilters.classList.contains('main-nav--closed')) {
         navFilters.classList.remove('main-nav--closed');
         navFilters.classList.add('main-nav--opened');
      }
      else {
         navFilters.classList.remove("main-nav--opened");
         navFilters.classList.add("main-nav--closed");
      }
    }
    );
