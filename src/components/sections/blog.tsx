import BlogPostCard from '@/components/shared/blog-post-card';
import type { BlogPost } from '@/lib/types';

const blogPosts: BlogPost[] = [
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

export default function Blog() {
  return (
    <section id="blog" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">From My Blog</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            I enjoy writing about technology, data, and the lessons I've learned along the way.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
