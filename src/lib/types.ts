export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'Data Science' | 'Web Development' | 'App Development';
  dataAiHint?: string;
};

export type BlogPost = {
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string;
  dataAiHint?: string;
};

export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
  image: string;
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
  description: string[];
  relevantCourses: string[];
  image: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
}

export interface Award {
  title: string;
  date: string;
  issuer: string;
  description: string;
  image: string;
}
