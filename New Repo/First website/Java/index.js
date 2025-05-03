document.querySelectorAll('.like-btn').forEach(function(btn) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('fas');
      btn.classList.toggle('far');
      btn.classList.toggle('liked');
    });
  });