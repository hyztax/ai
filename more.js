document.addEventListener('DOMContentLoaded', function () {
    const goBack = document.querySelector('.Go_back');
    if (goBack) {
      goBack.addEventListener('click', function () {
        window.location.href = 'index.html';
      });
    }
  });
  