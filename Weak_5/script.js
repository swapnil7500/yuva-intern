function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

async function router() {
  const routes = {
    '/': 'pages/home.html',
    '/about': 'pages/about.html',
    '/contact': 'pages/contact.html',
  };

  // Fix: Normalize the path if you're running in a subfolder
  let path = window.location.pathname;

  // Optional fix for GitHub Pages or folders
  path = path.replace(/\/spa-project/, '');

  const route = routes[path] || 'pages/home.html';
  const content = document.getElementById('content');

  try {
    const res = await fetch(route);
    const data = await res.text();
    content.style.opacity = 0;
    setTimeout(() => {
      content.innerHTML = data;
      content.style.opacity = 1;
    }, 300);
  } catch (err) {
    content.innerHTML = "<p>Page not found.</p>";
  }
}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(new URL(e.target.href).pathname);
    }
  });

  router();
});

