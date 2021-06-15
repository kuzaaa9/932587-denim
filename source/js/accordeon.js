var accordeonPanels = document.querySelectorAll('.form-group__item');

accordeonPanels.forEach(function(panel) {
      var button = panel.querySelector('.form-group__subbutton');
      button.addEventListener("click", function() {
        if (panel.classList.contains('form-group__item--closed')) {
            panel.classList.remove('form-group__item--closed');
            panel.classList.add('form-group__item--opened');
        } else if (panel.classList.contains('form-group__item--opened')) {
            panel.classList.remove('form-group__item--opened');
            panel.classList.add('form-group__item--closed');
        }

    })
});
