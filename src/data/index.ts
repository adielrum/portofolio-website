import { Project, ExperienceItem, Education, Certification, Award, BlogPost } from '@/lib/types';

export const experience: ExperienceItem[] = [
    {
        title: 'Research Assistant (Daewoong Open Collaboration Project Team)',
        company: 'Pusat Pemodelan Matematika dan Simulasi (PPMS ITB)',
        duration: 'April 2026 - Present',
        description: [
            'Synthesized insights from 20+ academic papers to design and formulate mathematical models for a microneedle drug delivery optimization project with 2 novel parameters.',
            'Optimized model performance using Pymoo framework in Python, improving baseline optimization results established in current literature by 30%.',
            'Accelerated computational processing speed by over 50x (reducing runtime from 2 hours to 15 minutes) through Numba for scientific computing.',
        ],
        technologies: ['Python', 'Pymoo', 'Numba', 'Mathematical Modeling', 'Operations Research'],
        image: '/logos/prism.webp',
    },
    {
        title: 'Data Analyst Intern',
        company: 'Otoritas Jasa Keuangan (OJK)',
        duration: 'Jan 2026 - Feb 2026',
        description: [
            'Executed clustering analysis on business models of 105 Indonesian banks utilizing CRISP-DM methodology across 600+ records in Department of Banking Supervision Quality Control and Development.',
            'Conducted comprehensive literature reviews and developed predictive models for profitability forecasting using machine learning and deep learning architectures.',
            'Prepared strategic presentation materials and documented minutes for weekly leadership meetings.',
        ],
        technologies: ['Python', 'CRISP-DM', 'Machine Learning', 'Deep Learning', 'Clustering', 'Power BI'],
        image: '/logos/ojk.jpg',
    },
    {
        title: 'Laboratory Assistant',
        company: 'Laboratorium Analisis Data, Simulasi Matematika dan Komputasi (ITB)',
        duration: 'Sep 2025 - Present',
        description: [
            'Guided and supervised 40 students through 10 data analysis lab modules using R, covering linear regression, time series analysis, and geospatial analysis.',
            'Utilized Microsoft Excel to streamline submission workflows and grading processes, improving assessment tracking accuracy.',
        ],
        technologies: ['R', 'Time Series Analysis', 'Linear Regression', 'Geospatial Analysis', 'Excel'],
        image: '/logos/Logo_Institut_Teknologi_Bandung-2.png',
    },
    {
        title: 'Head of Data Science Competition (MCF 2026)',
        company: 'Himpunan Mahasiswa Matematika ITB (HIMATIKA ITB)',
        duration: 'Jun 2025 - Present',
        description: [
            'Directed a 10-member committee for Mathematics Challenge Festival 2026 national data science competition, executing outreach that attracted 250+ participants nationwide.',
            'Collaborated with 2 industry practitioners and academic lecturers to formulate robust problem statements and evaluation rubrics.',
        ],
        technologies: ['Leadership', 'Data Science Competition', 'Problem Formulation', 'Teamwork'],
        image: '/logos/himatika.webp',
    },
    {
        title: 'Staff Developer',
        company: 'Kelompok Studi Ekonomi dan Pasar Modal ITB (KSEP ITB)',
        duration: '2024 - Present',
        description: [
            'Developed full-stack web applications and interactive web features for student organization events and financial literacy platforms.',
            'Implemented modern frontend components using Next.js, TypeScript, and Tailwind CSS.',
        ],
        technologies: ['Next.js', 'TypeScript', 'React.js', 'Tailwind CSS', 'Prisma'],
        image: '/logos/ksep itb.png',
    },
];

export const education: Education[] = [
    {
        institution: "Institut Teknologi Bandung (ITB)",
        degree: "Bachelors in Mathematics, Minor in Computer Science",
        date: "2023 - 2027 (Projected)",
        description: [
            "Cumulative GPA: 3.96 / 4.0 (102 / 144 Credits).",
            "Awarded Dean's List for 5 consecutive semesters (1st, 2nd, 3rd, 4th, and 5th semester).",
            "Recipient of the prestigious BSI Scholarship Prestasi Award.",
        ],
        relevantCourses: [
            "Machine Learning",
            "Data Analysis",
            "Probability Theory",
            "Mathematical Statistics",
            "Deep Learning",
            "Algorithm Strategies",
            "Operations Research",
        ],
        image: "/logos/Logo_Institut_Teknologi_Bandung-2.png",
    },
];

export const projects: Project[] = [
    {
        title: 'SEA Catering Web Platform',
        description: 'Full-stack food delivery and catering management application featuring user authentication, meal customized subscriptions, order tracking, and admin management.',
        image: '/projects/sea_catering.jpg',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'NextAuth.js'],
        category: 'Web Dev',
        githubUrl: 'https://github.com/adielrum/compfest-softeng',
        dataAiHint: 'catering dashboard interface',
    },
    {
        title: 'Resource-Constrained Project Crashing Optimizer',
        description: 'Multi-objective project management solver tackling RCPSP with Time-Cost Trade-Offs (TCT). Features crash cost optimization under strict resource limits.',
        image: '/projects/project_crashing.jpg',
        tags: ['Python', 'Operations Research', 'Optimization', 'Mathematical Modeling'],
        category: 'Algorithms & Optimization',
        githubUrl: 'https://github.com/adielrum/project-crashing',
        dataAiHint: 'gantt chart optimization graph',
    },
    {
        title: 'Indonesian Bank Business Model Clustering (OJK)',
        description: 'Clustering analysis on business models of 105 Indonesian banks using CRISP-DM methodology across 600+ banking financial records.',
        image: '/projects/bank_clustering.jpg',
        tags: ['Python', 'Scikit-learn', 'CRISP-DM', 'Financial Clustering', 'K-Means'],
        category: 'Data Science & Math',
        githubUrl: 'https://github.com/adielrum/bank-business-model-clustering',
        dataAiHint: 'scatter plot clusters financial data',
    },
    {
        title: 'Vertex Cover Algorithm Visualizer & Paper',
        description: 'Interactive graph algorithm visualization tool and academic paper analyzing exact and heuristic algorithms for the Minimum Vertex Cover problem.',
        image: '/projects/vertex_cover.jpg',
        tags: ['Graph Theory', 'Algorithms', 'Interactive Web', 'LaTeX'],
        category: 'Algorithms & Optimization',
        githubUrl: 'https://github.com/adielrum/Makalah_10123004',
        dataAiHint: 'graph network vertices highlight',
    },
    {
        title: 'Quadtree Image Compression Engine',
        description: 'C++ 2D spatial Quadtree implementation for lossy image compression, tree depth partitioning, and visual distortion analysis.',
        image: '/projects/quadtree.jpg',
        tags: ['C++', 'Quadtree', 'Data Structures', 'Image Processing'],
        category: 'Algorithms & Optimization',
        githubUrl: 'https://github.com/adielrum/Tucil2_10123004',
        dataAiHint: 'pixelated quadtree grid image',
    },
    {
        title: 'IQ Puzzler Pro Solver',
        description: 'Java backtracking algorithm for solving 2D and 3D polyomino piece alignment puzzles with state-space search pruning.',
        image: '/projects/iq_puzzler.jpg',
        tags: ['Java', 'Backtracking', 'Recursion', 'State Search'],
        category: 'Algorithms & Optimization',
        githubUrl: 'https://github.com/adielrum/Tucil1_10123004',
        dataAiHint: 'color blocks puzzle solver grid',
    },
    {
        title: 'Rush Hour Puzzle Solver (A* & BFS)',
        description: 'C++ graph search engine evaluating optimal solution steps for Rush Hour sliding block puzzle using A* heuristics and Breadth-First Search.',
        image: '/projects/rush_hour.jpg',
        tags: ['C++', 'A* Search', 'BFS', 'Pathfinding', 'Heuristics'],
        category: 'Algorithms & Optimization',
        githubUrl: 'https://github.com/adielrum/Tucil3_10123004_10123053',
        dataAiHint: 'sliding car puzzle search tree',
    },
    {
        title: 'Bike Sharing Rental Analytics Dashboard',
        description: 'Interactive data analytics web dashboard built with Streamlit for exploring weather and temporal factors in bike sharing demand.',
        image: '/projects/bike_sharing.jpg',
        tags: ['Python', 'Streamlit', 'Pandas', 'Seaborn', 'EDA'],
        category: 'Data Science & Math',
        githubUrl: 'https://github.com/adielrum/DashboardSepeda',
        dataAiHint: 'streamlit analytics trend line chart',
    },
    {
        title: 'Hyperbolic Non-Euclidean Geometry Visualizer',
        description: 'JavaScript web tool rendering Poincaré disk and hyperbolic geometry projections for interactive spatial exploration.',
        image: '/projects/hyperbolic.jpg',
        tags: ['JavaScript', 'Geometry', 'Math Visualization', 'Canvas API'],
        category: 'Data Science & Math',
        githubUrl: 'https://github.com/adielrum/Hyperbolic-Visualization',
        dataAiHint: 'poincare disk hyperbolic grid circles',
    },
    {
        title: 'COMPFEST Data Science Academy',
        description: 'End-to-end machine learning workflows, feature engineering, exploratory data analysis, and predictive modeling.',
        image: '/projects/ds_academy.jpg',
        tags: ['Python', 'Jupyter', 'Scikit-learn', 'Feature Engineering'],
        category: 'Data Science & Math',
        githubUrl: 'https://github.com/adielrum/compfest-ds-academy',
        dataAiHint: 'jupyter notebook machine learning data',
    },
    {
        title: 'Mathematical Modeling & Dynamic Systems',
        description: 'Numerical modeling projects simulating dynamic biological, physical, and differential system equations.',
        image: '/projects/math_modeling.jpg',
        tags: ['Python', 'Numerical Methods', 'Differential Equations', 'SciPy'],
        category: 'Data Science & Math',
        githubUrl: 'https://github.com/adielrum/ppms-project-1',
        dataAiHint: 'mathematical sine wave simulation',
    },
    {
        title: 'Integrated Graph Theory Algorithms (PTG)',
        description: 'Comprehensive implementation of fundamental graph algorithms including shortest paths, minimum spanning trees, and network flows.',
        image: '/projects/graph_theory.jpg',
        tags: ['Python', 'Graph Algorithms', 'Dijkstra', 'Network Flows'],
        category: 'Algorithms & Optimization',
        githubUrl: 'https://github.com/adielrum/PTG',
        dataAiHint: 'network node edges connections graph',
    },
];

export const certifications: Certification[] = [
    {
        title: 'Competitive Programming & Algorithm Strategies',
        issuer: 'Institut Teknologi Bandung (IF2211)',
        date: '2024',
        image: '/logos/Logo_Institut_Teknologi_Bandung-2.png',
        link: 'https://github.com/adielrum',
    },
    {
        title: 'Data Science Academy Training',
        issuer: 'COMPFEST Universitas Indonesia',
        date: '2024',
        image: '/projects/ds_academy.jpg',
        link: 'https://github.com/adielrum/compfest-ds-academy',
    },
];

export const awards: Award[] = [
    {
        title: "Finalist of National Science Olympiad (OSN) in Informatics",
        date: "2022",
        issuer: "Mendikbud Ristek RI",
        description: "National finalist in prestigious Indonesian science olympiad in Informatics representing high school.",
        image: "/logos/Logo_Institut_Teknologi_Bandung-2.png",
    },
    {
        title: "Finalist of Bina Nusantara Programming Contest (BNPCHS)",
        date: "2022",
        issuer: "Universitas Bina Nusantara",
        description: "National finalist in competitive programming contest for high school students.",
        image: "/projects/graph_theory.jpg",
    },
    {
        title: "Dean's List (5 Consecutive Semesters)",
        date: "2023 - 2025",
        issuer: "FMIPA Institut Teknologi Bandung",
        description: "Academic honor awarded for maintaining high GPA (3.96 / 4.0) across 1st, 2nd, 3rd, 4th, and 5th semesters.",
        image: "/logos/Logo_Institut_Teknologi_Bandung-2.png",
    },
    {
        title: "BSI Scholarship Prestasi Awardee",
        date: "2024 - 2027",
        issuer: "Bank Syariah Indonesia (BSI)",
        description: "Merit scholarship awardee for high-achieving undergraduate students at Institut Teknologi Bandung.",
        image: "/logos/Logo_Institut_Teknologi_Bandung-2.png",
    },
];

export const skills = {
    'Data Analysis & ML': ['Python', 'R', 'Power BI', 'Pymoo', 'Numba', 'CRISP-DM', 'Machine Learning', 'Deep Learning'],
    'Web Development': ['JavaScript', 'TypeScript', 'Next.js', 'React.js', 'Tailwind CSS', 'Prisma'],
    'Soft Skills & Methods': ['Scientific Writing', 'Public Speaking', 'Teaching', 'Team Work', 'Operations Research'],
    'Tools': ['Microsoft Excel', 'PowerPoint', 'Word', 'Git', 'Jupyter Notebook', 'VS Code'],
};

export const blogPosts: BlogPost[] = [
    {
        title: 'Unidirectional vs Bidirectional A* for Global Flight Pathfinding',
        description: 'An analysis of spherical pathfinding on global flight networks, comparing search space efficiency and execution times.',
        image: '/projects/rush_hour.jpg',
        date: 'December 2024',
        slug: 'https://github.com/adielrum/Tucil3_10123004_10123053',
        dataAiHint: 'flight routes world map glowing lines',
    },
    {
        title: 'Heuristics for NP-Hard Vertex Cover Optimization',
        description: 'How greedy approximation heuristics trade off small optimality gaps for massive time speedups in large scale graph networks.',
        image: '/projects/vertex_cover.jpg',
        date: 'May 2024',
        slug: 'https://github.com/adielrum/Makalah_10123004',
        dataAiHint: 'graph theory algorithm nodes',
    },
];
