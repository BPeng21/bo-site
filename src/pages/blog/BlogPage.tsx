import { useEffect, useState } from 'react';
import BlogSidebar from './BlogSidebar/BlogSidebar.tsx';
import BlogContent from './BlogContent/BlogContent.tsx';
import type { BlogPost } from '../../types/blog-post-types.ts';
import axios from 'axios';
import './BlogPage.css';

function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  // const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('http://localhost:5296/api/blogposts');
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  return (
    <main className="site-blog">
      <BlogSidebar
        posts={posts}
        selectedPost={selectedPost}
        setSelectedPost={setSelectedPost}
      />
      <BlogContent selectedPost={selectedPost} />
    </main>
  );
}

export default BlogPage;
