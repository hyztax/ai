document.addEventListener('DOMContentLoaded', function () {
  const continueButton = document.getElementById('continueButton');
  const menu = document.getElementById('context-menu');
  const menuItems = document.querySelectorAll('.menu-item');
  const title = document.querySelector('.Title');

  // Initially hide menu
  menu.style.zIndex = '-1';
  menu.style.pointerEvents = 'none';
  menu.style.opacity = '0';

  // CONTINUE button toggles context menu
  continueButton.addEventListener('click', function () {
    const isVisible = menu.classList.toggle('show');

    if (isVisible) {
      menu.style.zIndex = '999';
      menu.style.pointerEvents = 'auto';
      menu.style.opacity = '1';
      continueButton.style.display = 'none';
    } else {
      menu.style.zIndex = '-1';
      menu.style.pointerEvents = 'none';
      menu.style.opacity = '0';
      continueButton.style.display = 'inline-block';
    }
  });

  // Menu item click behavior
  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      const text = this.textContent.trim().toLowerCase();

      if (text === "what's ai?") {
        window.location.href = 'info.html';  // ✅ Redirect to ai.html
      }

      if (text === 'read more') {
        window.location.href = 'more.html';
      }
    });
  });

  // Optional: close the menu if clicking outside
  document.addEventListener('click', function (e) {
    const clickedInsideMenu = menu.contains(e.target);

    if (!clickedInsideMenu && e.target !== continueButton) {
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        menu.style.zIndex = '-1';
        menu.style.pointerEvents = 'none';
        menu.style.opacity = '0';
        continueButton.style.display = 'inline-block';
      }
    }
  });
});
