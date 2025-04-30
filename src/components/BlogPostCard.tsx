import React from 'react';
import Link from 'next/link';

interface BlogPostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  // imageUrl?: string; // Optional image URL
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ slug, title, excerpt, date }) => {
  return (
    <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden text-white">
      {/* Optional Image Placeholder */}
      {/* <img src={imageUrl || '/placeholder-image.jpg'} alt={title} className="w-full h-48 object-cover" /> */}
      <div className="p-6">
        <p className="text-sm text-gray-400 mb-2">{date}</p>
        <h3 className="text-xl font-bold mb-3 hover:text-blue-400 transition duration-300">
          <Link href={`/recursos/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="text-gray-300 mb-4">{excerpt}</p>
        <Link 
          href={`/recursos/blog/${slug}`}
          className="text-blue-400 hover:text-blue-300 font-semibold"
        >
          Leia mais &rarr;
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;

