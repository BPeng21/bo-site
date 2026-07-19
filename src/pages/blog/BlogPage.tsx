import { useEffect, useState } from 'react';
import BlogSidebar from './BlogSidebar/BlogSidebar.tsx';
import BlogContent from './BlogContent/BlogContent.tsx';
import type { BlogPost } from '../../types/blog-post-types.ts';
import axios from 'axios';
import './BlogPage.css';

interface Props {
  selectedPost: BlogPost | null;
  setSelectedPost: (selectedPost: BlogPost | null) => void;
}

function BlogPage({ selectedPost, setSelectedPost }: Props) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/blogposts`,
      );
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
