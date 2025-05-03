document.addEventListener('DOMContentLoaded', function () {
  const continueButton = document.getElementById('continueButton');
  const menu = document.getElementById('context-menu');
  const menuItems = document.querySelectorAll('.menu-item');
  const aiInfo = document.querySelector('.Ai_Info');
  const title = document.querySelector('.Title');
  const moreTextButton = document.querySelector('.More_text');
  const moreTextContent = document.querySelector('.More_text_content');

  // Initially hide menu and AI info
  menu.style.zIndex = '-1';
  menu.style.pointerEvents = 'none';
  menu.style.opacity = '0';
  aiInfo.style.display = 'none';

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
    item.addEventListener('click', function (e) {
      const text = this.textContent.trim().toLowerCase();

      if (text === "what's ai?") {
        e.stopPropagation();
        aiInfo.style.display = 'block';
        title.style.display = 'none';
        menu.style.display = 'none';
      }

      if (text === 'read more') {
        window.location.href = 'more.html';
      }
    });
  });

 

  // Hide AI info and restore title/menu on outside click
  document.addEventListener('click', function (e) {
    const clickedInsideAI = aiInfo.contains(e.target);
    const clickedAIButton = e.target.textContent?.trim().toLowerCase() === "what's ai?";
    const clickedInsideMenu = menu.contains(e.target);

    if (!clickedInsideAI && !clickedAIButton && !clickedInsideMenu) {
      aiInfo.style.display = 'none';
      title.style.display = 'block';
      menu.style.display = 'block';
    }

    // Close context menu if clicking outside
    if (!menu.contains(e.target) && e.target !== continueButton) {
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        menu.style.zIndex = '-1';
        menu.style.pointerEvents = 'none';
        menu.style.opacity = '0';
        continueButton.style.display = 'inline-block';
      }
    }
  });

  // Prevent closing when clicking inside .Ai_Info
  aiInfo.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  // Expand/collapse More Text, and hide the down arrow on click
  moreTextButton.addEventListener('click', function () {
    moreTextContent.classList.add('open'); // Expand content
    moreTextButton.style.display = 'none'; // Hide arrow until page refresh
  });
});
