document.addEventListener('DOMContentLoaded', function () {
  const continueButton = document.getElementById('continueButton');
  const menu = document.getElementById('context-menu');
  const menuItems = document.querySelectorAll('.menu-item');
  const aiTextDiv = document.querySelector('.Ai_text');

  // Hide menu and Ai_text initially
  menu.style.zIndex = '-1';
  menu.style.pointerEvents = 'none';
  menu.style.opacity = '0';
  aiTextDiv.style.display = 'none';

  // Toggle menu on continue button click
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

  // Show Ai_text div if "what's ai" is clicked
  menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
      const text = this.textContent.trim().toLowerCase();

      if (text.includes("what") && text.includes("ai")) {
        aiTextDiv.style.display = 'block';
        event.stopPropagation(); // Stop event so it doesn't close immediately
      } else if (text.includes("read more")) {
        window.location.href = "more.html";
      }
    });
  });

  // Close menu and Ai_text when clicking outside
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

  // Prevent click inside Ai_text from closing it
  aiTextDiv.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});
