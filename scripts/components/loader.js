export async function loadComponent(selector) {
  const container = document.querySelector(selector);
  if (!container) return;
  
  const source = container.getAttribute('data-source');
  if (!source) return;
  
  try {
    const response = await fetch(window.location.origin + '/api/preview-68bfecc464dcf744127ab73d/' + source);
    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    console.error(`Failed to load component from ${source}:`, error);
  }
}

export function initializeMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}