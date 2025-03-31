'use client'

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  author: string;
  readTime: string;
  content: string;
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
    readTime: "5 min read",
    content: `
      <h2>The Evolution of EV Charging Infrastructure</h2>
      <p>The electric vehicle charging landscape is undergoing a significant transformation, driven by technological advancements and growing environmental consciousness. As we move towards a more sustainable future, the development of efficient and accessible charging solutions becomes increasingly crucial.</p>

      <h2>Smart Charging Solutions</h2>
      <p>Modern EV charging stations are becoming more intelligent, incorporating features such as:</p>
      <ul>
        <li>Dynamic load balancing</li>
        <li>Real-time availability tracking</li>
        <li>Smart grid integration</li>
        <li>User-friendly payment systems</li>
      </ul>

      <h2>Grid Integration Challenges</h2>
      <p>As the number of EVs on the road increases, managing the electrical grid becomes more complex. Key challenges include:</p>
      <ul>
        <li>Peak demand management</li>
        <li>Grid stability</li>
        <li>Infrastructure upgrades</li>
        <li>Cost optimization</li>
      </ul>

      <h2>Future Trends</h2>
      <p>The future of EV charging is likely to see:</p>
      <ul>
        <li>Wireless charging technology</li>
        <li>Vehicle-to-grid (V2G) integration</li>
        <li>Advanced battery management systems</li>
        <li>Automated charging solutions</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The future of EV charging is bright, with continuous innovation driving the industry forward. As technology evolves and adoption rates increase, we can expect to see more efficient, user-friendly, and sustainable charging solutions emerge.</p>
    `
  },
  // Add more blog posts here...
];

export default function BlogPost() {
  const params = useParams();
  const post = blogPosts.find(p => p.id === params.id);

  if (!post) {
    return (
      <div className="min-h-screen sm:p-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <main className="relative mt-20">
          <h1 className="text-4xl font-bold mb-8 text-center text-white">Post Not Found</h1>
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-center block">
            Return to Blog
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen sm:p-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <main className="relative mt-20 max-w-4xl mx-auto">
        <Link href="/blog" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <article className="bg-gray-700 rounded-lg shadow-lg overflow-hidden border border-gray-600/30">
          <div className="relative h-[400px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-blue-400 font-semibold">{post.category}</span>
              <span className="text-sm text-gray-400">{post.readTime}</span>
            </div>
            
            <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
            
            <div className="flex items-center justify-between mb-8">
              <span className="text-gray-300">{post.author}</span>
              <span className="text-gray-400">{post.date}</span>
            </div>

            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
    </div>
  );
} 