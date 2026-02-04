import post1 from "@/content/blog/post-1.md?raw";
import post2 from "@/content/blog/post-2.md?raw";
import post3 from "@/content/blog/post-3.md?raw";
import post4 from "@/content/blog/post-4.md?raw";
import post5 from "@/content/blog/post-5.md?raw";
import post6 from "@/content/blog/post-6.md?raw";
import post7 from "@/content/blog/post-7.md?raw";
import post8 from "@/content/blog/post-8.md?raw";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: "technical" | "wisdom" | "recipes" | "mind";
  date: string;
  tags: string[];
  readTime: string;
  author: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Advanced Signal Processing in Wearable Devices",
    excerpt: "Exploring the challenges and solutions in processing biosignals from military-grade wearable technology.",
    category: "technical",
    date: "2024-01-15",
    tags: ["Signal Processing", "Hardware", "Electronics"],
    readTime: "8 min read",
    author: "The Hardware Maestro",
    content: post1,
  },
  {
    id: 2,
    title: "The Art of Problem-Solving: Lessons from Engineering",
    excerpt: "What 20 years of engineering has taught me about breaking down complex problems into manageable solutions.",
    category: "wisdom",
    date: "2024-01-10",
    tags: ["Problem Solving", "Engineering Mindset", "Life Lessons"],
    readTime: "5 min read",
    author: "The Hardware Maestro",
    content: post2,
  },
  {
    id: 3,
    title: "Mom's Famous Military Mess Hall Chili",
    excerpt: "A recipe that fed hundreds of soldiers and became a family tradition. Perfect for cold nights and feeding a crowd.",
    category: "recipes",
    date: "2024-01-08",
    tags: ["Comfort Food", "Family Recipe", "Military Mess"],
    readTime: "3 min read",
    author: "The Hardware Maestro",
    content: post3,
  },
  {
    id: 4,
    title: "The Ethics of AI in Defense Applications",
    excerpt: "Navigating the moral complexities of artificial intelligence in military and defense scenarios.",
    category: "mind",
    date: "2024-01-05",
    tags: ["Ethics", "Future Tech", "Philosophy"],
    readTime: "12 min read",
    author: "The Hardware Maestro",
    content: post4,
  },
  {
    id: 5,
    title: "Building Resilient Systems: Hardware Meets Software",
    excerpt: "How to design systems that can withstand extreme conditions while maintaining functionality.",
    category: "technical",
    date: "2023-12-28",
    tags: ["System Design", "Hardware", "Testing"],
    readTime: "10 min read",
    author: "The Hardware Maestro",
    content: post5,
  },
  {
    id: 6,
    title: "Teaching Kids to Think Like Engineers",
    excerpt: "Simple everyday activities that help develop engineering mindset in children.",
    category: "wisdom",
    date: "2023-12-20",
    tags: ["Mentorship", "Engineering Mindset", "Leadership"],
    readTime: "6 min read",
    author: "The Hardware Maestro",
    content: post6,
  },
  {
    id: 7,
    title: "Mom's One-Pot Military Mac & Cheese",
    excerpt: "A hearty, cheesy comfort meal that can feed a platoon and still taste like home.",
    category: "recipes",
    date: "2023-12-15",
    tags: ["Comfort Food", "Quick Meals", "Crowd Pleasing"],
    readTime: "4 min read",
    author: "The Hardware Maestro",
    content: post7,
  },
  {
    id: 8,
    title: "The Future of Human-AI Collaboration",
    excerpt: "Exploring how artificial intelligence will reshape the way we work and think in the coming decades.",
    category: "mind",
    date: "2023-12-10",
    tags: ["Future Tech", "Innovation", "Critical Thinking"],
    readTime: "9 min read",
    author: "The Hardware Maestro",
    content: post8,
  },
];
