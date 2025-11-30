import { Project, ExperienceItem, Education, Certification, Award, BlogPost } from '@/lib/types';

export const experience: ExperienceItem[] = [
    {
        title: 'Software Engineer',
        company: 'Tech Solutions Inc.',
        duration: 'Jan 2022 - Present',
        description: [
            'Developed and maintained web applications using React, Node.js, and PostgreSQL.',
            'Implemented RESTful APIs and integrated third-party services.',
            'Collaborated with cross-functional teams to define, design, and ship new features.',
        ],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'AWS'],
        image: 'https://placehold.co/150x150/1a1a1a/ffffff.png?text=TS',
    },
    {
        title: 'Data Scientist',
        company: 'Data Insights Co.',
        duration: 'Jul 2019 - Dec 2021',
        description: [
            'Built and deployed machine learning models for predictive analytics.',
            'Performed data cleaning, analysis, and visualization using Python and R.',
            'Developed dashboards to present key insights to stakeholders.',
        ],
        technologies: ['Python', 'R', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Tableau'],
        image: 'https://placehold.co/150x150/1a1a1a/ffffff.png?text=DI',
    },
];

export const education: Education[] = [
    {
        institution: "Institut Teknologi Bandung",
        degree: "Bachelor of Science in Mathematics, Minor in Computer Science",
        date: "2023 - 2027",
        description: [
            "Dean's List for four consecutive semesters.",
            "Completed a final year project on machine learning.",
            "Active member of the university's coding club.",
        ],
        relevantCourses: [
            "Data Analysis",
            "Algorithm Design",
            "Linear Algebra",
            "Probability and Statistics",
            "Databases",
        ],
        image: "https://placehold.co/150x150/1a1a1a/ffffff.png?text=ITB",
    },
    {
        institution: "Another University",
        degree: "Master of Science in Artificial Intelligence",
        date: "2022 - 2024",
        description: [
            "Specialized in deep learning, natural language processing, and computer vision.",
            "Published a paper on novel neural network architectures.",
            "Teaching Assistant for undergraduate AI course.",
        ],
        relevantCourses: [
            "Deep Learning",
            "NLP",
            "Computer Vision",
            "Reinforcement Learning",
            "AI Ethics",
        ],
        image: "https://placehold.co/150x150/1a1a1a/ffffff.png?text=UNI",
    },
];

export const projects: Project[] = [
    {
        title: 'Data Visualization Dashboard',
        description: 'An interactive dashboard for visualizing complex sales data, built with React and D3.js. Features real-time data updates and customizable charts.',
        image: 'https://placehold.co/600x400/1a1a1a/ffffff.png?text=Dashboard',
        tags: ['React', 'D3.js', 'Node.js', 'Dashboard'],
        category: 'Data Science',
        liveUrl: '#',
        githubUrl: '#',
        dataAiHint: 'data dashboard',
    },
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce website with features like product catalog, shopping cart, and Stripe integration for payments. Built with Next.js and MongoDB.',
        image: 'https://placehold.co/600x400/1a1a1a/ffffff.png?text=E-commerce',
        tags: ['Next.js', 'MongoDB', 'Stripe', 'E-commerce'],
        category: 'Web Development',
        liveUrl: '#',
        githubUrl: '#',
        dataAiHint: 'online shopping',
    },
    {
        title: 'Mobile Task Manager',
        description: 'A cross-platform mobile app for task management. Built with React Native and Firebase, it allows users to organize tasks, set reminders, and collaborate.',
        image: 'https://placehold.co/600x400/1a1a1a/ffffff.png?text=Mobile+App',
        tags: ['React Native', 'Firebase', 'iOS', 'Android'],
        category: 'App Development',
        liveUrl: '#',
        githubUrl: '#',
        dataAiHint: 'mobile app interface',
    },
    {
        title: 'Predictive Analytics Model',
        description: 'A machine learning model to predict customer churn using Python, Scikit-learn, and Pandas. Deployed as a REST API with Flask.',
        image: 'https://placehold.co/600x400/1a1a1a/ffffff.png?text=Analytics',
        tags: ['Python', 'Scikit-learn', 'Flask', 'API'],
        category: 'Data Science',
        liveUrl: '#',
        githubUrl: '#',
        dataAiHint: 'analytics graph',
    },
];

export const certifications: Certification[] = [
    {
        title: 'Google Cloud Professional Data Engineer',
        issuer: 'Google Cloud',
        date: 'October 2023',
        image: 'https://placehold.co/150x150/1a1a1a/ffffff.png?text=GCP',
        link: '#',
    },
    {
        title: 'AWS Certified Solutions Architect - Associate',
        issuer: 'Amazon Web Services',
        date: 'September 2023',
        image: 'https://placehold.co/150x150/1a1a1a/ffffff.png?text=AWS',
        link: '#',
    },
    {
        title: 'Microsoft Certified: Azure Data Scientist Associate',
        issuer: 'Microsoft',
        date: 'August 2023',
        image: 'https://placehold.co/150x150/1a1a1a/ffffff.png?text=Azure',
        link: '#',
    },
    {
        title: 'TensorFlow Developer Certificate',
        issuer: 'Google',
        date: 'July 2023',
        image: 'https://placehold.co/150x150/1a1a1a/ffffff.png?text=TF',
        link: '#',
    },
    {
        title: 'Certified Kubernetes Administrator',
        issuer: 'CNCF',
        date: 'June 2023',
        image: 'https://placehold.co/150x150/1a1a1a/ffffff.png?text=CKA',
        link: '#',
    },
];

export const awards: Award[] = [
    {
        title: "Best Final Year Project",
        date: "May 2022",
        issuer: "University of Example",
        description: "Awarded for the most innovative and well-executed final year project in the computer science department.",
        image: "https://placehold.co/150x150/1a1a1a/ffffff.png?text=Award",
    },
    {
        title: "Hackathon Winner",
        date: "March 2021",
        issuer: "Tech Conference 2021",
        description: "First place in a 24-hour hackathon for developing a mobile app that solves a real-world problem.",
        image: "https://placehold.co/150x150/1a1a1a/ffffff.png?text=Hack",
    },
];

export const skills = {
    'Languages': ['Python', 'JavaScript/TypeScript', 'SQL', 'R', 'Java'],
    'Web Development': ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'HTML5', 'CSS3'],
    'Data Science': ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Matplotlib'],
    'Databases': ['PostgreSQL', 'MongoDB', 'Firebase', 'SQLite'],
    'Tools': ['Git', 'Docker', 'Jupyter', 'VS Code', 'Google Cloud Platform'],
};

export const blogPosts: BlogPost[] = [
    {
        title: 'The Rise of Large Language Models',
        description: 'A deep dive into the architecture and impact of LLMs like GPT-3, and what they mean for the future of AI and development.',
        image: 'https://placehold.co/600x400.png',
        date: 'October 26, 2023',
        slug: '#',
        dataAiHint: 'artificial intelligence brain',
    },
    {
        title: 'My Journey into Web Development',
        description: 'From "Hello World" to a full-stack application. A personal story about learning to code and navigating the world of web development.',
        image: 'https://placehold.co/600x400.png',
        date: 'September 15, 2023',
        slug: '#',
        dataAiHint: 'person coding laptop',
    },
    {
        title: 'Top 10 Libraries for Data Science in Python',
        description: 'An essential list of Python libraries that every data scientist should know, from data manipulation with Pandas to deep learning with TensorFlow.',
        image: 'https://placehold.co/600x400.png',
        date: 'August 02, 2023',
        slug: '#',
        dataAiHint: 'python code',
    },
];
