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
  description:string;
  image: string;
  date: string;
  slug: string;
  dataAiHint?: string;
};
