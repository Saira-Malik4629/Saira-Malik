//Posted story Code
document.querySelectorAll('.like-btn').forEach(function(btn) {
    btn.addEventListener('click', function () {
      btn.classList.toggle('fas');
      btn.classList.toggle('far');
      btn.classList.toggle('liked');
    });
  });

// Follow Button changing code
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


  // Story Upload Section code
  document.getElementById('storyUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      document.getElementById('storyImage').src = imageURL;
    }
  });

  //Code to sync image

  const storyImage = document.getElementById('storyImage');
  const storyUpload = document.getElementById('storyUpload');
  const storyPreview = document.getElementById('storyPreview');

  storyUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      storyImage.src = imageURL;
      storyPreview.src = imageURL;
    }
  });

  // Optional: Set preview image on click if already uploaded
  storyImage.addEventListener('click', function () {
    storyPreview.src = storyImage.src;
  });

