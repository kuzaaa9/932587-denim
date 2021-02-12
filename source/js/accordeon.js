var accordeonPanels = document.querySelectorAll('.form-group__item')
accordeonPanels.forEach(function(btn) {
      btn.addEventListener("click", function() {
      var content = btn.querySelector('.form-group__item-content');
      content.classList.toggle('visible');
    })
})
