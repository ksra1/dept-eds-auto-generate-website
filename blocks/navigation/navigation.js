/**
 * Lincoln Navigation Block
 * Standalone navigation component with Lincoln branding
 */
export default function decorate(block) {
  const nav = document.createElement('nav');
  nav.className = 'lincoln-nav';

  // Create logo section
  const logo = document.createElement('div');
  logo.className = 'nav-logo';
  logo.innerHTML = '<a href="/"><span class="lincoln-wordmark">LINCOLN</span></a>';

  // Extract navigation items from block
  const navItems = block.querySelectorAll(':scope > div');
  const navList = document.createElement('ul');
  navList.className = 'nav-list';

  navItems.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'nav-item';
    
    const link = item.querySelector('a');
    if (link) {
      li.appendChild(link);
    } else {
      li.textContent = item.textContent;
    }
    
    navList.appendChild(li);
  });

  // Create mobile menu toggle
  const menuToggle = document.createElement('button');
  menuToggle.className = 'nav-toggle';
  menuToggle.setAttribute('aria-label', 'Toggle navigation');
  menuToggle.innerHTML = `
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
    <span class="hamburger-line"></span>
  `;

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    const isOpen = nav.classList.contains('nav-open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Assemble navigation
  nav.appendChild(logo);
  nav.appendChild(navList);
  nav.appendChild(menuToggle);

  // Replace block content
  block.innerHTML = '';
  block.appendChild(nav);

  // Add scroll behavior
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }

    if (currentScroll > lastScroll && currentScroll > 200) {
      nav.classList.add('nav-hidden');
    } else {
      nav.classList.remove('nav-hidden');
    }

    lastScroll = currentScroll;
  });
}
