import project1 from "@/content/projects/project-1.md?raw";
import project2 from "@/content/projects/project-2.md?raw";
import project3 from "@/content/projects/project-3.md?raw";
import project4 from "@/content/projects/project-4.md?raw";
import project5 from "@/content/projects/project-5.md?raw";
import project6 from "@/content/projects/project-6.md?raw";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  status: string;
  tags: string[];
  icon: string;
  links: {
    demo?: string;
    github?: string;
    docs?: string;
    paper?: string;
  };
  startDate: string;
  team: string[];
  technologies: string[];
  content: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Neural Interface Diagnostic System",
    description: "Advanced brain-computer interface system for real-time neural signal analysis and medical diagnostics. Features machine learning algorithms for pattern recognition and predictive analysis.",
    category: "AI & Biomedical",
    status: "Active Development",
    tags: ["AI/ML", "Neural Networks", "Biomedical", "Real-time Processing"],
    icon: "Brain",
    links: { demo: "#", github: "#", docs: "#", paper: "#" },
    startDate: "2023-06-01",
    team: ["Lead Engineer", "2 AI Researchers", "Medical Advisor"],
    technologies: ["Python", "TensorFlow", "C++", "ARM Cortex", "DSP"],
    content: project1,
  },
  {
    id: 2,
    title: "Tactical Wearable Communication System",
    description: "Military-grade wearable device with advanced sensor integration, secure communication protocols, and environmental monitoring capabilities for extreme conditions.",
    category: "Military Tech",
    status: "Deployment Ready",
    tags: ["IoT", "Military", "Sensors", "Communication"],
    icon: "Shield",
    links: { demo: "#", docs: "#" },
    startDate: "2023-03-15",
    team: ["Lead Engineer", "Hardware Specialist", "RF Engineer"],
    technologies: ["C", "ARM Cortex", "Bluetooth LE", "LoRa", "PCB Design"],
    content: project2,
  },
  {
    id: 3,
    title: "Autonomous Threat Detection Platform",
    description: "AI-powered system for detecting and categorizing potential threats including drones and human targets. Integrates with existing security infrastructure.",
    category: "Defense Systems",
    status: "Beta Testing",
    tags: ["Computer Vision", "AI", "Security", "Automation"],
    icon: "Target",
    links: { demo: "#", github: "#" },
    startDate: "2023-09-01",
    team: ["Lead Engineer", "CV Researcher", "Systems Integrator"],
    technologies: ["Python", "PyTorch", "OpenCV", "CUDA", "Docker"],
    content: project3,
  },
  {
    id: 4,
    title: "Biomedical Signal Processing Suite",
    description: "Comprehensive software suite for processing and analyzing various biomedical signals including ECG, EEG, and EMG data with advanced filtering algorithms.",
    category: "Healthcare Tech",
    status: "Production",
    tags: ["Signal Processing", "Healthcare", "Data Analysis", "Medical"],
    icon: "Zap",
    links: { demo: "#", github: "#", docs: "#" },
    startDate: "2022-11-01",
    team: ["Lead Engineer", "DSP Specialist", "Clinical Advisor"],
    technologies: ["Python", "NumPy", "SciPy", "MATLAB", "React"],
    content: project4,
  },
  {
    id: 5,
    title: "Adaptive De-escalation Protocol",
    description: "Smart system that analyzes threat levels and recommends appropriate de-escalation strategies for both human and drone encounters.",
    category: "Security Solutions",
    status: "Research Phase",
    tags: ["Machine Learning", "Security", "Protocol Design", "Analytics"],
    icon: "Cpu",
    links: { docs: "#" },
    startDate: "2024-01-10",
    team: ["Lead Researcher", "Behavioral Scientist"],
    technologies: ["Python", "TensorFlow", "NLP", "PostgreSQL"],
    content: project5,
  },
  {
    id: 6,
    title: "RF Interference Mitigation System",
    description: "Advanced system for detecting and mitigating radio frequency interference in sensitive military and medical equipment.",
    category: "RF Engineering",
    status: "Testing",
    tags: ["RF Engineering", "Signal Processing", "Hardware", "Testing"],
    icon: "Radio",
    links: { demo: "#", docs: "#" },
    startDate: "2023-07-01",
    team: ["Lead Engineer", "RF Specialist", "Firmware Developer"],
    technologies: ["C++", "FPGA", "VHDL", "GNU Radio", "SDR"],
    content: project6,
  },
];
