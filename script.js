document.addEventListener('DOMContentLoaded', function () {
  const continueButton = document.getElementById('continueButton');
  const menu = document.getElementById('context-menu');
  const menuItems = document.querySelectorAll('.menu-item');

  // Initially hide menu properly
  menu.style.zIndex = '-1';
  menu.style.pointerEvents = 'none';
  menu.style.opacity = '0';

  continueButton.addEventListener('click', function () {
    const isVisible = menu.classList.toggle('show');

    if (isVisible) {
      menu.style.zIndex = '999';
      menu.style.pointerEvents = 'auto';
      menu.style.opacity = '1';

      // Hide continue button
      continueButton.style.display = 'none';
    } else {
      menu.style.zIndex = '-1';
      menu.style.pointerEvents = 'none';
      menu.style.opacity = '0';

      // Show continue button again
      continueButton.style.display = 'inline-block';
    }
  });

  // Handle menu item clicks
  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      const text = this.textContent.trim().toLowerCase();
      if (text === 'more options') {
        window.location.href = 'more.html'; // Redirect
      } 
    });
  });

  // Hide the menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && e.target !== continueButton) {
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        menu.style.zIndex = '-1';
        menu.style.pointerEvents = 'none';
        menu.style.opacity = '0';

        // Show continue button again
        continueButton.style.display = 'inline-block';
      }
    }
  });
});
