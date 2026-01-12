-- Seed portfolio projects with sample data
insert into public.portfolio_projects (
  title,
  description,
  category,
  image_url,
  client_name,
  industry,
  challenge,
  solution,
  results,
  technologies
) values
(
  'E-Commerce Platform Transformation',
  'Complete redesign and modernization of legacy e-commerce platform with improved performance and user experience.',
  'E-Commerce',
  '/placeholder.svg?height=300&width=400',
  'RetailPro Inc',
  'Retail',
  'Legacy system was slow, difficult to maintain, and losing market share to modern competitors.',
  'Implemented a microservices architecture with React frontend, Node.js backend, and PostgreSQL database. Added real-time inventory tracking and improved checkout flow.',
  'Increased conversion rate by 45%, reduced page load time from 4.5s to 1.2s, and generated $2.3M additional revenue in first year.',
  ARRAY[''React'', ''Node.js'', ''PostgreSQL'', ''Docker'', ''AWS'']
),
(
  'Enterprise CRM System',
  'Custom CRM solution for managing client relationships and sales pipeline with advanced analytics.',
  'Enterprise',
  '/placeholder.svg?height=300&width=400',
  'CloudWorks Solutions',
  'Software',
  'Multiple disconnected systems making it hard to track customer interactions and sales metrics.',
  'Built integrated CRM with real-time dashboards, automated workflows, and AI-powered lead scoring using Python and Next.js.',
  'Reduced sales cycle by 30%, improved customer retention by 25%, and saved 10+ hours per week on manual data entry.',
  ARRAY[''Next.js'', ''Python'', ''PostgreSQL'', ''Tailwind CSS'', ''Vercel'']
),
(
  'Mobile App Development',
  'Native iOS and Android applications for fitness tracking and personal wellness.',
  'Mobile',
  '/placeholder.svg?height=300&width=400',
  'FitLife Corp',
  'Health & Wellness',
  'Growing user base needed cross-platform mobile solution with offline capabilities and real-time sync.',
  'Developed React Native applications with Redux state management, Firebase backend, and comprehensive push notification system.',
  'Launched on both platforms with 50K+ downloads in first month, 4.8-star rating, and 85% daily active user rate.',
  ARRAY[''React Native'', ''Firebase'', ''Redux'', ''GraphQL'']
),
(
  'Data Analytics Dashboard',
  'Real-time analytics platform for tracking business metrics and generating actionable insights.',
  'Analytics',
  '/placeholder.svg?height=300&width=400',
  'InsightData Ltd',
  'Analytics',
  'Manual reporting process taking 2-3 days to generate executive dashboards from disparate data sources.',
  'Created unified analytics platform with real-time data integration, custom visualizations, and automated report generation using Next.js and Plotly.',
  'Reduced report generation from 2-3 days to real-time, identified $500K in optimization opportunities, and improved decision-making speed.',
  ARRAY[''Next.js'', ''PostgreSQL'', ''Plotly'', ''Node.js'', ''Redis'']
),
(
  'AI-Powered Chatbot Solution',
  'Intelligent customer service chatbot with natural language processing and multi-language support.',
  'AI/ML',
  '/placeholder.svg?height=300&width=400',
  'GlobalTech Services',
  'Technology',
  'High support ticket volume causing long response times and increased operational costs.',
  'Implemented AI chatbot using GPT-4 integration, custom knowledge base, and human handoff system. Deployed on website, mobile, and messaging platforms.',
  'Handled 70% of inquiries automatically, reduced average response time from 4 hours to <1 minute, saved $180K annually in support costs.',
  ARRAY[''Next.js'', ''OpenAI API'', ''TypeScript'', ''Supabase'', ''Vercel'']
);
