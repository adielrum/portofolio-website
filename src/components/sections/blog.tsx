import BlogPostCard from '@/components/shared/blog-post-card';
import type { BlogPost } from '@/lib/types';

import { blogPosts } from '@/data';


export default function Blog() {
  return (
    <section id="blog" className="w-full py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">From My Blog</h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
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
