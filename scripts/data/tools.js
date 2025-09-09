export const aiTools = [
  // Writing Tools
  {
    id: 1,
    name: "ChatGPT",
    description: "Advanced AI chatbot for conversations, writing assistance, coding help, and creative tasks. Powered by OpenAI's GPT technology.",
    category: "writing",
    url: "https://chat.openai.com",
    pricing: "Free/Paid",
    rating: 4.8,
    icon: "message-circle",
    tags: ["chat", "writing", "coding", "creative"]
  },
  {
    id: 2,
    name: "Grammarly",
    description: "AI-powered writing assistant that helps improve grammar, spelling, punctuation, and writing style across all platforms.",
    category: "writing",
    url: "https://grammarly.com",
    pricing: "Freemium",
    rating: 4.6,
    icon: "edit-3",
    tags: ["grammar", "spelling", "writing", "editing"]
  },
  {
    id: 3,
    name: "Jasper AI",
    description: "AI content creation platform for marketing copy, blog posts, emails, and social media content generation.",
    category: "writing",
    url: "https://jasper.ai",
    pricing: "Paid",
    rating: 4.5,
    icon: "pen-tool",
    tags: ["content", "marketing", "copywriting", "blogs"]
  },
  {
    id: 4,
    name: "Copy.ai",
    description: "AI copywriter that generates high-quality content for ads, emails, websites, listings, blogs, and more.",
    category: "writing",
    url: "https://copy.ai",
    pricing: "Freemium",
    rating: 4.4,
    icon: "copy",
    tags: ["copywriting", "marketing", "content", "ads"]
  },

  // Design Tools
  {
    id: 5,
    name: "Midjourney",
    description: "AI image generation tool that creates stunning artwork and visuals from text descriptions using advanced AI models.",
    category: "design",
    url: "https://midjourney.com",
    pricing: "Paid",
    rating: 4.9,
    icon: "image",
    tags: ["image generation", "art", "creative", "visuals"]
  },
  {
    id: 6,
    name: "DALL-E 2",
    description: "OpenAI's image generation model that creates realistic images and art from natural language descriptions.",
    category: "design",
    url: "https://openai.com/dall-e-2",
    pricing: "Paid",
    rating: 4.7,
    icon: "palette",
    tags: ["image generation", "art", "creative", "OpenAI"]
  },
  {
    id: 7,
    name: "Canva AI",
    description: "Design platform with AI-powered features for creating graphics, presentations, social media posts, and more.",
    category: "design",
    url: "https://canva.com",
    pricing: "Freemium",
    rating: 4.6,
    icon: "layout",
    tags: ["design", "graphics", "templates", "social media"]
  },
  {
    id: 8,
    name: "Figma AI",
    description: "Collaborative design tool with AI features for UI/UX design, prototyping, and design system creation.",
    category: "design",
    url: "https://figma.com",
    pricing: "Freemium",
    rating: 4.8,
    icon: "figma",
    tags: ["UI design", "prototyping", "collaboration", "design systems"]
  },

  // Development Tools
  {
    id: 9,
    name: "GitHub Copilot",
    description: "AI pair programmer that suggests code completions and entire functions in real-time as you code.",
    category: "development",
    url: "https://github.com/features/copilot",
    pricing: "Paid",
    rating: 4.7,
    icon: "code",
    tags: ["coding", "autocomplete", "programming", "GitHub"]
  },
  {
    id: 10,
    name: "Replit AI",
    description: "Online coding platform with AI assistance for writing, debugging, and explaining code across multiple languages.",
    category: "development",
    url: "https://replit.com",
    pricing: "Freemium",
    rating: 4.5,
    icon: "terminal",
    tags: ["coding", "online IDE", "debugging", "learning"]
  },
  {
    id: 11,
    name: "Tabnine",
    description: "AI code completion tool that learns from your code patterns and suggests relevant completions.",
    category: "development",
    url: "https://tabnine.com",
    pricing: "Freemium",
    rating: 4.4,
    icon: "zap",
    tags: ["code completion", "IDE plugin", "productivity", "learning"]
  },
  {
    id: 12,
    name: "Cursor",
    description: "AI-first code editor built for productivity with intelligent code generation and editing features.",
    category: "development",
    url: "https://cursor.sh",
    pricing: "Freemium",
    rating: 4.6,
    icon: "cursor-arrow",
    tags: ["code editor", "AI coding", "productivity", "generation"]
  },

  // Productivity Tools
  {
    id: 13,
    name: "Notion AI",
    description: "AI-powered workspace for notes, tasks, wikis, and databases with intelligent writing assistance.",
    category: "productivity",
    url: "https://notion.so",
    pricing: "Freemium",
    rating: 4.7,
    icon: "notebook",
    tags: ["workspace", "notes", "organization", "collaboration"]
  },
  {
    id: 14,
    name: "Otter.ai",
    description: "AI meeting assistant that records audio, writes notes, automatically captures slides, and generates summaries.",
    category: "productivity",
    url: "https://otter.ai",
    pricing: "Freemium",
    rating: 4.5,
    icon: "mic",
    tags: ["transcription", "meetings", "notes", "voice"]
  },
  {
    id: 15,
    name: "Zapier",
    description: "Automation platform that connects apps and automates workflows without coding using AI-powered triggers.",
    category: "productivity",
    url: "https://zapier.com",
    pricing: "Freemium",
    rating: 4.6,
    icon: "zap",
    tags: ["automation", "workflows", "integration", "no-code"]
  },
  {
    id: 16,
    name: "Calendly AI",
    description: "Smart scheduling tool with AI features for automatic meeting scheduling and calendar optimization.",
    category: "productivity",
    url: "https://calendly.com",
    pricing: "Freemium",
    rating: 4.4,
    icon: "calendar",
    tags: ["scheduling", "calendar", "meetings", "automation"]
  },

  // Marketing Tools
  {
    id: 17,
    name: "HubSpot AI",
    description: "CRM platform with AI-powered marketing, sales, and customer service tools for business growth.",
    category: "marketing",
    url: "https://hubspot.com",
    pricing: "Freemium",
    rating: 4.5,
    icon: "target",
    tags: ["CRM", "marketing", "sales", "automation"]
  },
  {
    id: 18,
    name: "Buffer AI",
    description: "Social media management platform with AI content suggestions and optimal posting time recommendations.",
    category: "marketing",
    url: "https://buffer.com",
    pricing: "Freemium",
    rating: 4.3,
    icon: "share-2",
    tags: ["social media", "scheduling", "content", "analytics"]
  },
  {
    id: 19,
    name: "Mailchimp AI",
    description: "Email marketing platform with AI-powered content generation, audience segmentation, and campaign optimization.",
    category: "marketing",
    url: "https://mailchimp.com",
    pricing: "Freemium",
    rating: 4.4,
    icon: "mail",
    tags: ["email marketing", "automation", "segmentation", "campaigns"]
  },
  {
    id: 20,
    name: "SEMrush AI",
    description: "Digital marketing toolkit with AI insights for SEO, content marketing, competitor research, and PPC.",
    category: "marketing",
    url: "https://semrush.com",
    pricing: "Paid",
    rating: 4.6,
    icon: "trending-up",
    tags: ["SEO", "content marketing", "competitor analysis", "PPC"]
  },

  // Video Tools
  {
    id: 21,
    name: "Runway ML",
    description: "AI-powered video editing and generation platform with advanced machine learning models for creative projects.",
    category: "video",
    url: "https://runwayml.com",
    pricing: "Freemium",
    rating: 4.7,
    icon: "video",
    tags: ["video editing", "AI generation", "creative", "machine learning"]
  },
  {
    id: 22,
    name: "Lumen5",
    description: "AI video creation platform that transforms blog posts and articles into engaging video content automatically.",
    category: "video",
    url: "https://lumen5.com",
    pricing: "Freemium",
    rating: 4.4,
    icon: "play-circle",
    tags: ["video creation", "content transformation", "social media", "marketing"]
  },
  {
    id: 23,
    name: "Pictory AI",
    description: "AI video generator that creates short, shareable videos from long-form content using artificial intelligence.",
    category: "video",
    url: "https://pictory.ai",
    pricing: "Paid",
    rating: 4.5,
    icon: "film",
    tags: ["video generation", "content repurposing", "social media", "highlights"]
  },
  {
    id: 24,
    name: "Descript",
    description: "All-in-one video and audio editing platform with AI transcription, voice cloning, and collaborative features.",
    category: "video",
    url: "https://descript.com",
    pricing: "Freemium",
    rating: 4.6,
    icon: "edit",
    tags: ["video editing", "audio editing", "transcription", "collaboration"]
  },

  // Audio Tools
  {
    id: 25,
    name: "ElevenLabs",
    description: "AI voice generation platform that creates realistic speech from text with customizable voice models.",
    category: "audio",
    url: "https://elevenlabs.io",
    pricing: "Freemium",
    rating: 4.8,
    icon: "volume-2",
    tags: ["voice generation", "text-to-speech", "voice cloning", "AI voices"]
  },
  {
    id: 26,
    name: "Mubert",
    description: "AI music generation platform that creates royalty-free music for content creators and businesses.",
    category: "audio",
    url: "https://mubert.com",
    pricing: "Freemium",
    rating: 4.3,
    icon: "music",
    tags: ["music generation", "royalty-free", "background music", "AI composition"]
  },
  {
    id: 27,
    name: "Adobe Podcast AI",
    description: "AI-powered audio enhancement tool that removes noise and improves speech quality for podcasts and recordings.",
    category: "audio",
    url: "https://podcast.adobe.com",
    pricing: "Free",
    rating: 4.5,
    icon: "headphones",
    tags: ["audio enhancement", "noise reduction", "podcasting", "speech improvement"]
  },
  {
    id: 28,
    name: "AIVA",
    description: "Artificial intelligence composer that creates emotional soundtrack music for films, video games, and commercials.",
    category: "audio",
    url: "https://aiva.ai",
    pricing: "Freemium",
    rating: 4.4,
    icon: "music-note",
    tags: ["music composition", "soundtrack", "AI composer", "emotional music"]
  },

  // Analytics Tools
  {
    id: 29,
    name: "Google Analytics 4",
    description: "Advanced web analytics platform with AI insights for understanding user behavior and website performance.",
    category: "analytics",
    url: "https://analytics.google.com",
    pricing: "Free",
    rating: 4.3,
    icon: "bar-chart-3",
    tags: ["web analytics", "user behavior", "insights", "tracking"]
  },
  {
    id: 30,
    name: "Mixpanel",
    description: "Product analytics platform with AI-powered insights for understanding user actions and improving retention.",
    category: "analytics",
    url: "https://mixpanel.com",
    pricing: "Freemium",
    rating: 4.5,
    icon: "pie-chart",
    tags: ["product analytics", "user tracking", "retention", "insights"]
  },
  {
    id: 31,
    name: "Hotjar AI",
    description: "Behavior analytics tool with AI insights from heatmaps, recordings, and surveys to understand user experience.",
    category: "analytics",
    url: "https://hotjar.com",
    pricing: "Freemium",
    rating: 4.4,
    icon: "eye",
    tags: ["heatmaps", "user recordings", "surveys", "UX analytics"]
  },
  {
    id: 32,
    name: "Tableau AI",
    description: "Data visualization platform with AI-powered analytics and natural language queries for business intelligence.",
    category: "analytics",
    url: "https://tableau.com",
    pricing: "Paid",
    rating: 4.6,
    icon: "bar-chart-2",
    tags: ["data visualization", "business intelligence", "natural language", "dashboards"]
  },

  // Additional tools to reach 50+
  {
    id: 33,
    name: "Claude",
    description: "AI assistant by Anthropic for analysis, research, writing, coding, and creative tasks with strong reasoning abilities.",
    category: "writing",
    url: "https://claude.ai",
    pricing: "Freemium",
    rating: 4.7,
    icon: "brain",
    tags: ["AI assistant", "analysis", "research", "reasoning"]
  },
  {
    id: 34,
    name: "Perplexity AI",
    description: "AI search engine that provides accurate answers with citations and sources for research and information gathering.",
    category: "productivity",
    url: "https://perplexity.ai",
    pricing: "Freemium",
    rating: 4.6,
    icon: "search",
    tags: ["AI search", "research", "citations", "information"]
  },
  {
    id: 35,
    name: "Stable Diffusion",
    description: "Open-source AI image generation model that creates high-quality images from text descriptions.",
    category: "design",
    url: "https://stability.ai",
    pricing: "Free/Paid",
    rating: 4.5,
    icon: "sparkles",
    tags: ["image generation", "open source", "art", "creative"]
  },
  {
    id: 36,
    name: "Synthesia",
    description: "AI video generation platform that creates professional videos with AI avatars from text scripts.",
    category: "video",
    url: "https://synthesia.io",
    pricing: "Paid",
    rating: 4.4,
    icon: "user-circle",
    tags: ["AI avatars", "video generation", "text-to-video", "professional"]
  },
  {
    id: 37,
    name: "Whisper AI",
    description: "OpenAI's speech recognition model that transcribes audio to text with high accuracy across languages.",
    category: "audio",
    url: "https://openai.com/research/whisper",
    pricing: "Free",
    rating: 4.7,
    icon: "mic-2",
    tags: ["speech recognition", "transcription", "multilingual", "OpenAI"]
  },
  {
    id: 38,
    name: "Framer AI",
    description: "Web design tool with AI-powered features for creating responsive websites and interactive prototypes.",
    category: "design",
    url: "https://framer.com",
    pricing: "Freemium",
    rating: 4.5,
    icon: "smartphone",
    tags: ["web design", "prototyping", "responsive", "interactive"]
  },
  {
    id: 39,
    name: "Codeium",
    description: "Free AI-powered code completion tool that supports 70+ programming languages with intelligent suggestions.",
    category: "development",
    url: "https://codeium.com",
    pricing: "Free",
    rating: 4.6,
    icon: "code-2",
    tags: ["code completion", "free", "multilingual", "AI assistance"]
  },
  {
    id: 40,
    name: "Writesonic",
    description: "AI writing platform for creating articles, ads, product descriptions, and marketing copy at scale.",
    category: "writing",
    url: "https://writesonic.com",
    pricing: "Freemium",
    rating: 4.3,
    icon: "feather",
    tags: ["content creation", "marketing copy", "articles", "scaling"]
  }
];