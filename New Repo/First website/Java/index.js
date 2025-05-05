document.querySelectorAll('.like-btn').forEach(function(btn) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('fas');
      btn.classList.toggle('far');
      btn.classList.toggle('liked');
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const followButtons = document.querySelectorAll('.suggestion .btn');

    followButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        if (this.textContent.trim() === 'Follow') {
          this.textContent = 'Following';
          this.classList.add('btn-outline-primary');
        } else {
          this.textContent = 'Follow';
          this.classList.remove('btn-outline-primary');
        }
      });
    });
  });