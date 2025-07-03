import kickstartReact from "./assets/sessions/kickstart-react.jpg";
import debugCode from "./assets/sessions/debug-code.jpg";
import blueprintComponent from "./assets/sessions/blueprint-component.jpg";
import stateMgmtFlow from "./assets/sessions/state-mgmt-flow.jpg";
import hooks from "./assets/sessions/hooks.jpg";
import styling from "./assets/sessions/styling.jpg";
import dataFetching from "./assets/sessions/data-fetching.jpg";
import reactTs from "./assets/sessions/react-ts.jpg";
import performance from "./assets/sessions/performance.jpg";

export interface Session {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  price: number;
  originalPrice: number;
  mentor: {
    name: string;
    avatar: string;
    title: string;
    experience: string;
    rating: number;
    students: number;
    bio: string;
  };
  image: string;
  curriculum: {
    title: string;
    duration: string;
    topics: string[];
  }[];
  reviews: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  tags: string[];
  language: string;
  certificate: boolean;
  lifetime: boolean;
  whatYouLearn: string[];
  requirements: string[];
}
export const SESSIONS: Session[] = [
  {
    id: "01",
    title: "Kickstart with React: Personal Intro",
    description: "Tailored guidance for total beginners in React.",
    fullDescription:
      "This comprehensive course is designed specifically for developers who are completely new to React. You'll start from the very basics and build your way up to creating your first React application. Our expert mentor will guide you through every step, ensuring you understand the fundamental concepts before moving on to more complex topics.",
    duration: "2 hours",
    level: "Beginner",
    rating: 4.9,
    price: 49,
    originalPrice: 79,
    mentor: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Senior React Developer",
      experience: "5+ years",
      rating: 4.9,
      students: 1250,
      bio: "Sarah is a passionate React developer with over 5 years of experience building scalable web applications. She has mentored hundreds of developers and loves helping beginners start their React journey.",
    },
    image: kickstartReact,
    curriculum: [
      {
        title: "Introduction to React",
        duration: "30 min",
        topics: [
          "What is React?",
          "Setting up development environment",
          "Your first React app",
        ],
      },
      {
        title: "Components and JSX",
        duration: "45 min",
        topics: ["Understanding components", "JSX syntax", "Props and state"],
      },
      {
        title: "Building Your First App",
        duration: "45 min",
        topics: ["Project setup", "Component structure", "Styling with CSS"],
      },
    ],
    whatYouLearn: [
      "Understand React fundamentals and core concepts",
      "Create and manage React components",
      "Work with JSX syntax effectively",
      "Handle props and state in React applications",
      "Set up a complete React development environment",
      "Build your first interactive React application",
    ],
    requirements: [
      "Basic knowledge of HTML, CSS, and JavaScript",
      "A computer with internet connection",
      "Code editor (VS Code recommended)",
      "Node.js installed on your machine",
    ],
    reviews: [
      {
        id: "1",
        name: "Mike Chen",
        avatar: "/placeholder.svg?height=50&width=50",
        rating: 5,
        comment:
          "Sarah is an amazing mentor! She explained everything so clearly and patiently. Perfect for beginners.",
        date: "2 weeks ago",
      },
      {
        id: "2",
        name: "Emma Davis",
        avatar: "/placeholder.svg?height=50&width=50",
        rating: 5,
        comment:
          "This session gave me the confidence to start my React journey. Highly recommended!",
        date: "1 month ago",
      },
    ],
    tags: ["React", "JavaScript", "Frontend", "Beginner", "Components"],
    language: "English",
    certificate: true,
    lifetime: true,
  },

  {
    id: "02",
    title: "Debugging Your React Code",
    description: "Stuck with a React bug? Let's squash it together.",
    fullDescription:
      "Master the art of debugging React applications with this intensive session. Learn professional debugging techniques, common pitfalls, and how to use developer tools effectively to identify and fix issues in your React code.",

    duration: "1.5 hours",
    level: "Intermediate",
    rating: 4.8,
    price: 39,
    originalPrice: 59,
    mentor: {
      name: "Mike Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      title: "React Debugging Expert",
      experience: "4+ years",
      rating: 4.8,
      students: 890,
      bio: "Mike specializes in React debugging and performance optimization. He has helped hundreds of developers solve complex React issues.",
    },
    image: debugCode,
    curriculum: [
      {
        title: "Debugging Fundamentals",
        duration: "25 min",
        topics: ["React DevTools", "Console debugging", "Error boundaries"],
      },
      {
        title: "Common React Issues",
        duration: "35 min",
        topics: [
          "State management bugs",
          "Rendering issues",
          "Performance problems",
        ],
      },
      {
        title: "Advanced Debugging",
        duration: "30 min",
        topics: ["Profiling components", "Memory leaks", "Testing strategies"],
      },
    ],
    whatYouLearn: [
      "Master React Developer Tools",
      "Identify and fix common React bugs",
      "Debug state management issues",
      "Optimize component performance",
      "Implement error boundaries",
      "Use profiling tools effectively",
    ],
    requirements: [
      "Basic React knowledge",
      "Experience with JavaScript debugging",
      "React Developer Tools installed",
      "A React project to debug",
    ],
    reviews: [
      {
        id: "1",
        name: "Alex Rivera",
        avatar: "https://randomuser.me/api/portraits/men/14.jpg",
        rating: 5,
        comment:
          "Mike helped me solve a complex state issue I'd been struggling with for days!",
        date: "1 week ago",
      },
      {
        id: "2",
        name: "Lisa Wang",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        rating: 4,
        comment:
          "Great debugging techniques. Very practical and hands-on approach.",
        date: "3 weeks ago",
      },
    ],
    tags: ["React", "Debugging", "DevTools", "Performance", "Troubleshooting"],
    language: "English",
    certificate: true,
    lifetime: true,
  },
  {
    id: "03",
    title: "React Component Best Practices",
    description: "Optimize and refactor your components.",
    fullDescription:
      "Learn advanced React component patterns and best practices that will make your code more maintainable, reusable, and performant. This session covers composition patterns, custom hooks, and modern React techniques.",

    duration: "3 hours",
    level: "Advanced",
    rating: 4.9,
    price: 79,
    originalPrice: 99,
    mentor: {
      name: "Alex Rivera",
      avatar: "https://randomuser.me/api/portraits/men/14.jpg",
      title: "React Architecture Expert",
      experience: "6+ years",
      rating: 4.9,
      students: 2100,
      bio: "Alex is a React architecture specialist who has built large-scale applications for Fortune 500 companies. He's passionate about clean code and scalable component design.",
    },
    image: blueprintComponent,
    curriculum: [
      {
        title: "Component Design Patterns",
        duration: "60 min",
        topics: [
          "Composition vs Inheritance",
          "Render Props",
          "Higher-Order Components",
        ],
      },
      {
        title: "Performance Optimization",
        duration: "60 min",
        topics: ["React.memo", "useMemo and useCallback", "Code splitting"],
      },
      {
        title: "Advanced Patterns",
        duration: "60 min",
        topics: ["Compound Components", "Custom Hooks", "Context API patterns"],
      },
    ],
    whatYouLearn: [
      "Master advanced React patterns",
      "Optimize component performance",
      "Create reusable component libraries",
      "Implement proper error handling",
      "Design scalable component architecture",
      "Use TypeScript with React effectively",
    ],
    requirements: [
      "Solid React fundamentals",
      "Experience with hooks",
      "Understanding of JavaScript ES6+",
      "Basic TypeScript knowledge helpful",
    ],
    reviews: [
      {
        id: "1",
        name: "David Kim",
        avatar: "https://randomuser.me/api/portraits/men/63.jpg",
        rating: 5,
        comment:
          "Alex's expertise in React architecture is incredible. Learned so much about scalable patterns!",
        date: "5 days ago",
      },
      {
        id: "2",
        name: "Rachel Green",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        rating: 5,
        comment:
          "This session completely changed how I think about component design. Excellent!",
        date: "2 weeks ago",
      },
    ],
    tags: ["React", "Architecture", "Performance", "Patterns", "Advanced"],
    language: "English",
    certificate: true,
    lifetime: true,
  },
  {
    id: "04",
    title: "Effective State Management Tactics",
    description: "Strategies to manage state efficiently.",
    fullDescription:
      "Dive deep into React state management strategies. Learn when to use local state, context, or external libraries like Redux. Master the art of managing complex application state effectively.",

    duration: "2.5 hours",
    level: "Intermediate",
    rating: 4.7,
    price: 59,
    originalPrice: 89,
    mentor: {
      name: "Emma Davis",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      title: "State Management Specialist",
      experience: "4+ years",
      rating: 4.7,
      students: 1580,
      bio: "Emma specializes in React state management and has helped numerous teams architect scalable state solutions for complex applications.",
    },
    image: stateMgmtFlow,
    curriculum: [
      {
        title: "State Management Fundamentals",
        duration: "45 min",
        topics: [
          "Local vs Global State",
          "When to lift state up",
          "State normalization",
        ],
      },
      {
        title: "Context API Deep Dive",
        duration: "60 min",
        topics: [
          "Context patterns",
          "Performance considerations",
          "Multiple contexts",
        ],
      },
      {
        title: "External State Libraries",
        duration: "45 min",
        topics: ["Redux basics", "Zustand introduction", "When to use what"],
      },
    ],
    whatYouLearn: [
      "Choose the right state management approach",
      "Implement efficient Context API patterns",
      "Optimize state updates for performance",
      "Handle complex state interactions",
      "Debug state-related issues",
      "Integrate external state libraries",
    ],
    requirements: [
      "Good understanding of React hooks",
      "Experience with component state",
      "Basic knowledge of JavaScript patterns",
      "Familiarity with React Context",
    ],
    reviews: [
      {
        id: "1",
        name: "Tom Wilson",
        avatar: "https://randomuser.me/api/portraits/men/19.jpg",
        rating: 5,
        comment:
          "Emma's approach to state management is very practical. Great real-world examples!",
        date: "1 week ago",
      },
      {
        id: "2",
        name: "Sarah Johnson",
        avatar: "https://randomuser.me/api/portraits/women/36.jpg",
        rating: 4,
        comment:
          "Learned a lot about Context API optimization. Very helpful session.",
        date: "10 days ago",
      },
    ],
    tags: ["React", "State Management", "Context API", "Redux", "Performance"],
    language: "English",
    certificate: true,
    lifetime: true,
  },
  {
    id: "05",
    title: "Custom Hooks Creation",
    description: "Craft your custom hooks.",
    fullDescription:
      "Dive deep into React state management strategies. Learn when to use local state, context, or external libraries like Redux. Master the art of managing complex application state effectively.",
    duration: "2 hours",
    level: "Advanced",
    rating: 4.8,
    price: 69,
    originalPrice: 95,
    mentor: {
      name: "David Kim",
      avatar: "https://randomuser.me/api/portraits/men/63.jpg",
      title: "React Hooks Expert",
      experience: "5+ years",
      rating: 4.8,
      students: 1320,
      bio: "David is a React hooks specialist who has created numerous open-source hook libraries. He loves teaching developers how to write clean, reusable code.",
    },
    image: hooks,
    curriculum: [
      {
        title: "Hook Fundamentals",
        duration: "30 min",
        topics: ["Rules of hooks", "Hook composition", "Custom hook patterns"],
      },
      {
        title: "Building Custom Hooks",
        duration: "60 min",
        topics: [
          "Data fetching hooks",
          "Form handling hooks",
          "Animation hooks",
        ],
      },
      {
        title: "Advanced Hook Patterns",
        duration: "30 min",
        topics: ["Hook testing", "Performance optimization", "Hook libraries"],
      },
    ],
    whatYouLearn: [
      "Create reusable custom hooks",
      "Implement complex hook logic",
      "Test custom hooks effectively",
      "Optimize hook performance",
      "Share hooks across projects",
      "Build hook libraries",
    ],
    requirements: [
      "Strong understanding of React hooks",
      "Experience with useEffect and useState",
      "Knowledge of JavaScript closures",
      "Basic testing knowledge helpful",
    ],
    reviews: [
      {
        id: "1",
        name: "Lisa Wang",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        rating: 5,
        comment:
          "David's custom hooks examples were incredibly practical. I use them in my projects now!",
        date: "4 days ago",
      },
      {
        id: "2",
        name: "James Brown",
        avatar: "/placeholder.svg?height=50&width=50",
        rating: 5,
        comment:
          "Excellent session on hook composition. Really opened my eyes to new possibilities.",
        date: "1 week ago",
      },
    ],
    tags: ["React", "Hooks", "Custom Hooks", "Reusability", "Advanced"],
    language: "English",
    certificate: true,
    lifetime: true,
  },
  {
    id: "06",
    title: "Styling Strategies in React",
    description: "Discuss and implement styling solutions.",
    fullDescription:
      "Explore various styling approaches in React applications. From CSS Modules to Styled Components, learn when and how to use different styling strategies for maintainable and scalable styles.",

    duration: "1.5 hours",
    level: "Beginner",
    rating: 4.6,
    price: 35,
    originalPrice: 55,
    mentor: {
      name: "Lisa Wang",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      title: "Frontend Styling Expert",
      experience: "3+ years",
      rating: 4.6,
      students: 980,
      bio: "Lisa specializes in modern CSS and React styling solutions. She has extensive experience with design systems and component styling.",
    },
    image: styling,
    curriculum: [
      {
        title: "CSS in React Overview",
        duration: "20 min",
        topics: ["Inline styles", "CSS Modules", "CSS-in-JS solutions"],
      },
      {
        title: "Styled Components",
        duration: "40 min",
        topics: ["Basic usage", "Theming", "Dynamic styles"],
      },
      {
        title: "Modern CSS Solutions",
        duration: "30 min",
        topics: ["Tailwind CSS", "Emotion", "Design systems"],
      },
    ],
    whatYouLearn: [
      "Compare different styling approaches",
      "Implement CSS Modules effectively",
      "Use Styled Components for dynamic styling",
      "Create consistent design systems",
      "Optimize CSS performance",
      "Handle responsive design in React",
    ],
    requirements: [
      "Basic CSS knowledge",
      "Understanding of React components",
      "Familiarity with props",
      "Basic JavaScript knowledge",
    ],
    reviews: [
      {
        id: "1",
        name: "Mike Chen",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5,
        comment:
          "Lisa's styling examples were very clear and practical. Great for beginners!",
        date: "6 days ago",
      },
      {
        id: "2",
        name: "Emma Davis",
        avatar: "https://randomuser.me/api/portraits/women/72.jpg",
        rating: 4,
        comment:
          "Good overview of different styling options. Helped me choose the right approach.",
        date: "2 weeks ago",
      },
    ],
    tags: ["React", "CSS", "Styling", "Design Systems", "Beginner"],
    language: "English",
    certificate: true,
    lifetime: true,
  },
  {
    id: "07",
    title: "React Performance Optimization",
    description: "Make your React apps lightning fast.",
    fullDescription:
      "Learn advanced performance optimization techniques for React applications. Master profiling, code splitting, memoization, and other strategies to build blazing-fast React apps.",
    duration: "3 hours",
    level: "Advanced",
    rating: 4.9,
    price: 89,
    originalPrice: 129,
    mentor: {
      name: "Tom Wilson",
      avatar: "https://randomuser.me/api/portraits/men/19.jpg",
      title: "React Performance Expert",
      experience: "7+ years",
      rating: 4.9,
      students: 2500,
      bio: "Tom is a performance optimization specialist who has optimized React applications for millions of users. He's passionate about creating fast, efficient web applications.",
    },
    image: performance,
    curriculum: [
      {
        title: "Performance Fundamentals",
        duration: "60 min",
        topics: [
          "React DevTools Profiler",
          "Performance metrics",
          "Identifying bottlenecks",
        ],
      },
      {
        title: "Optimization Techniques",
        duration: "90 min",
        topics: ["Memoization strategies", "Code splitting", "Lazy loading"],
      },
      {
        title: "Advanced Optimization",
        duration: "30 min",
        topics: [
          "Bundle optimization",
          "Server-side rendering",
          "Performance monitoring",
        ],
      },
    ],
    whatYouLearn: [
      "Profile React application performance",
      "Implement effective memoization",
      "Optimize bundle size and loading",
      "Use code splitting strategically",
      "Monitor performance in production",
      "Debug performance issues",
    ],
    requirements: [
      "Advanced React knowledge",
      "Understanding of JavaScript performance",
      "Experience with React DevTools",
      "Knowledge of webpack basics helpful",
    ],
    reviews: [
      {
        id: "1",
        name: "Alex Rivera",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg",
        rating: 5,
        comment:
          "Tom's performance insights are incredible. Reduced our app load time by 60%!",
        date: "3 days ago",
      },
      {
        id: "2",
        name: "Rachel Green",
        avatar: "https://randomuser.me/api/portraits/men/19.jpg",
        rating: 5,
        comment:
          "Best performance optimization session I've attended. Highly practical!",
        date: "1 week ago",
      },
    ],
    tags: ["React", "Performance", "Optimization", "Profiling", "Advanced"],
    language: "English",
    certificate: true,
    lifetime: true,
  },
  {
    id: "08",
    title: "Testing React Applications",
    description: "Learn comprehensive testing strategies.",
    fullDescription:
      "Master React testing with Jest, React Testing Library, and modern testing practices. Learn to write maintainable tests that give you confidence in your React applications.",
    duration: "2.5 hours",
    level: "Intermediate",
    rating: 4.7,
    price: 65,
    originalPrice: 85,
    mentor: {
      name: "Rachel Green",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      title: "React Testing Specialist",
      experience: "4+ years",
      rating: 4.7,
      students: 1450,
      bio: "Rachel is a testing expert who has implemented comprehensive testing strategies for numerous React applications. She believes in test-driven development and quality assurance.",
    },
    image: reactTs,
    curriculum: [
      {
        title: "Testing Fundamentals",
        duration: "45 min",
        topics: ["Testing philosophy", "Jest basics", "React Testing Library"],
      },
      {
        title: "Component Testing",
        duration: "75 min",
        topics: ["Unit tests", "Integration tests", "Testing hooks"],
      },
      {
        title: "Advanced Testing",
        duration: "30 min",
        topics: ["Mocking strategies", "E2E testing", "Testing best practices"],
      },
    ],
    whatYouLearn: [
      "Write effective unit tests for React",
      "Test React components and hooks",
      "Implement integration testing",
      "Mock external dependencies",
      "Set up continuous testing",
      "Debug failing tests",
    ],
    requirements: [
      "Good React fundamentals",
      "Basic JavaScript testing knowledge",
      "Understanding of npm/yarn",
      "Familiarity with command line",
    ],
    reviews: [
      {
        id: "1",
        name: "David Kim",
        avatar: "https://randomuser.me/api/portraits/men/63.jpg",
        rating: 5,
        comment:
          "Rachel's testing approach is very systematic. Great for building confidence in code!",
        date: "5 days ago",
      },
      {
        id: "2",
        name: "Tom Wilson",
        avatar: "https://randomuser.me/api/portraits/men/19.jpg",
        rating: 4,
        comment:
          "Solid testing fundamentals. The hook testing examples were particularly helpful.",
        date: "12 days ago",
      },
    ],
    tags: ["React", "Testing", "Jest", "Quality Assurance", "TDD"],
    language: "English",
    certificate: true,
    lifetime: true,
  },
  {
    id: "09",
    title: "React Router Deep Dive",
    description: "Master navigation in React applications.",
    fullDescription:
      "Become a React Router expert with this comprehensive session. Learn advanced routing patterns, authentication flows, and how to build complex navigation systems in React applications.",

    duration: "2 hours",
    level: "Intermediate",
    rating: 4.8,
    price: 55,
    originalPrice: 75,
    mentor: {
      name: "James Brown",
      avatar: "https://randomuser.me/api/portraits/men/69.jpg",
      title: "React Navigation Expert",
      experience: "5+ years",
      rating: 4.8,
      students: 1680,
      bio: "James specializes in React Router and navigation patterns. He has built complex routing systems for large-scale applications and loves teaching navigation best practices.",
    },
    image: dataFetching,
    curriculum: [
      {
        title: "Router Fundamentals",
        duration: "40 min",
        topics: ["Basic routing", "Route parameters", "Nested routes"],
      },
      {
        title: "Advanced Routing",
        duration: "50 min",
        topics: ["Protected routes", "Route guards", "Dynamic routing"],
      },
      {
        title: "Navigation Patterns",
        duration: "30 min",
        topics: [
          "Programmatic navigation",
          "Route transitions",
          "SEO considerations",
        ],
      },
    ],
    whatYouLearn: [
      "Implement complex routing systems",
      "Handle authentication with routes",
      "Create dynamic navigation menus",
      "Optimize routing for SEO",
      "Handle route transitions smoothly",
      "Debug routing issues",
    ],
    requirements: [
      "Solid React fundamentals",
      "Understanding of single-page applications",
      "Basic knowledge of HTTP and URLs",
      "Experience with React components",
    ],
    reviews: [
      {
        id: "1",
        name: "Sarah Johnson",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        rating: 5,
        comment:
          "James explained React Router concepts very clearly. The authentication examples were great!",
        date: "2 days ago",
      },
      {
        id: "2",
        name: "Lisa Wang",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        rating: 5,
        comment:
          "Excellent deep dive into React Router. Learned so many advanced patterns!",
        date: "8 days ago",
      },
    ],
    tags: ["React", "Router", "Navigation", "SPA", "Authentication"],
    language: "English",
    certificate: true,
    lifetime: true,
  },
];
