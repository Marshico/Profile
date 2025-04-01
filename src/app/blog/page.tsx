'use client'

import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  author: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "future-of-ev-charging",
    title: "The Future of Electric Vehicle Charging",
    excerpt: "Exploring the latest trends and innovations in EV charging infrastructure, from smart charging solutions to grid integration challenges...",
    date: "March 15, 2024",
    image: "https://wattshare-images.s3.us-east-1.amazonaws.com/wai-yan-moe-cWbSpwvLlaM-unsplash.jpg",
    category: "Technology",
    author: "Reza Boostani",
    readTime: "5 min read"
  },
  {
    id: "product-management-ai",
    title: "Product Management in the Age of AI",
    excerpt: "How artificial intelligence is transforming product development and management, from automated user research to predictive analytics...",
    date: "March 10, 2024",
    image: "https://wattshare-images.s3.us-east-1.amazonaws.com/Pp/Picture5.jpg",
    category: "Product Management",
    author: "Reza Boostani",
    readTime: "7 min read"
  },
  {
    id: "sustainable-tech",
    title: "Building Sustainable Tech Solutions",
    excerpt: "Creating environmentally conscious technology products and services, with a focus on EV charging infrastructure and green energy...",
    date: "March 5, 2024",
    image: "https://wattshare-images.s3.us-east-1.amazonaws.com/Pp/Picture6.jpg",
    category: "Sustainability",
    author: "Reza Boostani",
    readTime: "6 min read"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen sm:p-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <main className="relative mt-20">
        <h1 className="text-4xl font-bold mb-12 text-center text-white">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <article className="bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-600/30 hover:border-blue-500/50">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-blue-400 font-semibold">{post.category}</span>
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-white">{post.title}</h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{post.author}</span>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
} 