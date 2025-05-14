document.addEventListener('DOMContentLoaded', function () {
  const continueButton = document.getElementById('continueButton');
  const menu = document.getElementById('context-menu');
  const menuItems = document.querySelectorAll('.menu-item');
  const aiTextDiv = document.querySelector('.Ai_Div');

  // Initial hide
  menu.style.zIndex = '-1';
  menu.style.pointerEvents = 'none';
  menu.style.opacity = '0';
  aiTextDiv.style.display = 'none';

  // Toggle menu visibility
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
      aiTextDiv.style.display = 'none'; // Hide text when menu is closed
    }
  });

  // Handle menu item clicks
  menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
      const text = this.textContent.trim().toLowerCase();

      if (text.includes("what") && text.includes("ai")) {
        const isAiVisible = aiTextDiv.style.display === 'block';

        if (isAiVisible) {
          // Hide both AI text and menu
          aiTextDiv.style.display = 'none';
          menu.classList.remove('show');
          menu.style.zIndex = '-1';
          menu.style.pointerEvents = 'none';
          menu.style.opacity = '0';
          continueButton.style.display = 'inline-block';
        } else {
          // Show AI text
          aiTextDiv.style.display = 'block';
        }

        event.stopPropagation(); // Prevent document click from firing
      } else if (text.includes("read more")) {
        window.location.href = "more.html";
      }
    });
  });

  // Click outside to close everything
  document.addEventListener('click', function (e) {
    const clickedInsideMenu = menu.contains(e.target);
    const clickedInsideAiText = aiTextDiv.contains(e.target);
    const clickedContinue = e.target === continueButton;

    if (!clickedInsideMenu && !clickedContinue) {
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        menu.style.zIndex = '-1';
        menu.style.pointerEvents = 'none';
        menu.style.opacity = '0';
        continueButton.style.display = 'inline-block';
      }
    }

    if (!clickedInsideAiText && !e.target.matches('.menu-item')) {
      aiTextDiv.style.display = 'none';
    }
  });

  // Prevent AI text clicks from closing it
  aiTextDiv.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.settings-btn');
  const dropdown = document.querySelector('.settings-dropdown');

  btn.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });

  // Optional: close dropdown if clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.settings-wrapper')) {
      dropdown.style.display = 'none';
    }
  });
});