import { initializeMobileMenu } from './components/loader.js';
import { aiTools } from './data/tools.js';

let currentTools = [...aiTools];
let displayedCount = 12;
let currentFilter = 'all';

export function initializeApp() {
  initializeMobileMenu();
  initializeSearch();
  initializeCategoryFilters();
  initializeFeaturedCategories();
  renderTools();
  initializeLoadMore();
}

function initializeSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', debounce(handleSearch, 300));
}

function initializeCategoryFilters() {
  const categoryFilters = document.querySelectorAll('.category-filter');
  
  categoryFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      const category = filter.getAttribute('data-category');
      setActiveFilter(filter);
      filterByCategory(category);
    });
  });
}

function initializeFeaturedCategories() {
  const featuredCards = document.querySelectorAll('[data-category]');
  
  featuredCards.forEach(card => {
    if (!card.classList.contains('category-filter')) {
      card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        const filterButton = document.querySelector(`[data-category="${category}"].category-filter`);
        if (filterButton) {
          setActiveFilter(filterButton);
          filterByCategory(category);
          // Scroll to tools section
          document.getElementById('toolsGrid').scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });
}

function setActiveFilter(activeFilter) {
  document.querySelectorAll('.category-filter').forEach(filter => {
    filter.classList.remove('active', 'bg-blue-600', 'text-white');
    filter.classList.add('border-gray-300', 'text-gray-600');
  });
  
  activeFilter.classList.add('active', 'bg-blue-600', 'text-white');
  activeFilter.classList.remove('border-gray-300', 'text-gray-600');
}

function handleSearch(event) {
  const query = event.target.value.toLowerCase().trim();
  
  if (query === '') {
    filterByCategory(currentFilter);
    return;
  }
  
  const filtered = aiTools.filter(tool => 
    tool.name.toLowerCase().includes(query) ||
    tool.description.toLowerCase().includes(query) ||
    tool.category.toLowerCase().includes(query) ||
    tool.tags.some(tag => tag.toLowerCase().includes(query))
  );
  
  currentTools = filtered;
  displayedCount = Math.min(12, filtered.length);
  renderTools();
}

function filterByCategory(category) {
  currentFilter = category;
  
  if (category === 'all') {
    currentTools = [...aiTools];
  } else {
    currentTools = aiTools.filter(tool => tool.category === category);
  }
  
  displayedCount = Math.min(12, currentTools.length);
  renderTools();
}

function renderTools() {
  const toolsGrid = document.getElementById('toolsGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  
  if (!toolsGrid) return;
  
  const toolsToShow = currentTools.slice(0, displayedCount);
  
  toolsGrid.innerHTML = toolsToShow.map(tool => createToolCard(tool)).join('');
  
  // Show/hide load more button
  if (loadMoreBtn) {
    loadMoreBtn.style.display = displayedCount >= currentTools.length ? 'none' : 'inline-block';
  }
  
  // Re-initialize Lucide icons for new content
  if (window.lucide) {
    lucide.createIcons();
  }
}

function createToolCard(tool) {
  const categoryColors = {
    writing: 'from-blue-500 to-blue-600',
    design: 'from-purple-500 to-purple-600',
    development: 'from-green-500 to-green-600',
    productivity: 'from-orange-500 to-orange-600',
    marketing: 'from-pink-500 to-pink-600',
    video: 'from-red-500 to-red-600',
    audio: 'from-indigo-500 to-indigo-600',
    analytics: 'from-yellow-500 to-yellow-600'
  };
  
  const gradient = categoryColors[tool.category] || 'from-gray-500 to-gray-600';
  
  return `
    <div class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group" data-id="tool-card-${tool.id}">
      <div class="p-6">
        <div class="flex items-start justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center flex-shrink-0">
            <i data-lucide="${tool.icon}" class="w-6 h-6 text-white"></i>
          </div>
          <span class="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-full capitalize">${tool.category}</span>
        </div>
        
        <h3 class="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors" data-id="tool-name-${tool.id}">
          ${tool.name}
        </h3>
        
        <p class="text-gray-600 text-sm mb-4 line-clamp-3" data-id="tool-description-${tool.id}">
          ${tool.description}
        </p>
        
        <div class="flex flex-wrap gap-1 mb-4">
          ${tool.tags.slice(0, 3).map(tag => 
            `<span class="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full">${tag}</span>`
          ).join('')}
        </div>
        
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="text-sm font-semibold text-gray-900">${tool.pricing}</span>
            ${tool.rating ? `
              <div class="flex items-center space-x-1">
                <i data-lucide="star" class="w-4 h-4 text-yellow-400 fill-current"></i>
                <span class="text-sm text-gray-600">${tool.rating}</span>
              </div>
            ` : ''}
          </div>
          
          <a href="${tool.url}" target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
             data-id="tool-link-${tool.id}">
            <span>Try Now</span>
            <i data-lucide="external-link" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </div>
  `;
}

function initializeLoadMore() {
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      displayedCount += 12;
      renderTools();
    });
  }
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}