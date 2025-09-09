import { initializeMobileMenu } from './components/loader.js';
import { aiTools } from './data/tools.js';

const categoryInfo = {
  writing: {
    name: 'Writing',
    description: 'AI-powered writing assistants, content generators, and editing tools to enhance your writing process.',
    icon: 'pen-tool',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100'
  },
  design: {
    name: 'Design',
    description: 'Creative AI tools for image generation, graphic design, and visual content creation.',
    icon: 'palette',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100'
  },
  development: {
    name: 'Development',
    description: 'AI coding assistants, code completion tools, and development productivity enhancers.',
    icon: 'code',
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100'
  },
  productivity: {
    name: 'Productivity',
    description: 'AI tools to automate workflows, manage tasks, and boost your overall productivity.',
    icon: 'zap',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100'
  },
  marketing: {
    name: 'Marketing',
    description: 'AI-driven marketing tools for content creation, social media, email campaigns, and SEO.',
    icon: 'target',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'from-pink-50 to-pink-100'
  },
  video: {
    name: 'Video',
    description: 'AI video creation, editing, and enhancement tools for content creators and marketers.',
    icon: 'video',
    color: 'from-red-500 to-red-600',
    bgColor: 'from-red-50 to-red-100'
  },
  audio: {
    name: 'Audio',
    description: 'AI audio generation, music creation, voice synthesis, and audio enhancement tools.',
    icon: 'volume-2',
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'from-indigo-50 to-indigo-100'
  },
  analytics: {
    name: 'Analytics',
    description: 'AI-powered analytics and data visualization tools for business intelligence and insights.',
    icon: 'bar-chart-3',
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'from-yellow-50 to-yellow-100'
  }
};

export function initializeCategoriesPage() {
  initializeMobileMenu();
  renderCategories();
}

function renderCategories() {
  const categoriesGrid = document.getElementById('categoriesGrid');
  if (!categoriesGrid) return;

  const categories = Object.keys(categoryInfo).map(key => ({
    key,
    ...categoryInfo[key],
    count: aiTools.filter(tool => tool.category === key).length
  }));

  categoriesGrid.innerHTML = categories.map(category => createCategoryCard(category)).join('');

  // Add click handlers
  categories.forEach(category => {
    const card = document.getElementById(`category-${category.key}`);
    if (card) {
      card.addEventListener('click', () => {
        window.location.href = `index.html?category=${category.key}`;
      });
    }
  });

  // Re-initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }
}

function createCategoryCard(category) {
  return `
    <div id="category-${category.key}" class="group cursor-pointer" data-id="category-card-${category.key}">
      <div class="bg-gradient-to-br ${category.bgColor} p-8 rounded-3xl hover:shadow-xl transition-all duration-300 h-full">
        <div class="flex flex-col h-full">
          <div class="w-16 h-16 mb-6 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <i data-lucide="${category.icon}" class="w-8 h-8 text-white"></i>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors" data-id="category-name-${category.key}">
            ${category.name}
          </h3>
          
          <p class="text-gray-600 mb-6 flex-grow" data-id="category-description-${category.key}">
            ${category.description}
          </p>
          
          <div class="flex items-center justify-between">
            <span class="text-lg font-semibold text-gray-900" data-id="category-count-${category.key}">
              ${category.count} tools
            </span>
            
            <div class="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all duration-300">
              <i data-lucide="arrow-right" class="w-5 h-5 text-gray-600 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}