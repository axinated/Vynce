// This file contains the JavaScript code for the website, handling interactivity and dynamic content.

{
  // load components and attach nav handlers
  document.addEventListener('DOMContentLoaded', () => {
    const components = [
      { id: 'header', path: 'components/header.html' },
      { id: 'hero', path: 'components/hero.html' },
      { id: 'showcase', path: 'components/showcase.html' },
      { id: 'about', path: 'components/about.html' },
      { id: 'footer', path: 'components/footer.html' }
    ];

    // load each component into its placeholder div
    Promise.all(components.map(c => loadComponent(c.id, c.path)))
      .then(() => {
        // after components are injected, attach nav handlers
        attachNavHandlers();
      })
      .catch(err => console.error('Error loading components:', err));
  });

  // Fetch a component file, extract <body> content if present, and inject
  async function loadComponent(containerId, url) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
      const text = await res.text();
      // extract body content if the component is a full HTML file
      const bodyMatch = text.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      const content = bodyMatch ? bodyMatch[1] : text;
      const container = document.getElementById(containerId);
      if (container) container.innerHTML = content;
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  // smooth scroll for nav links inside the injected header (and any other nav)
  function attachNavHandlers() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      // remove previous listeners by cloning node (prevent duplicate handlers if re-run)
      const clone = link.cloneNode(true);
      link.parentNode.replaceChild(clone, link);
      clone.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = clone.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
}