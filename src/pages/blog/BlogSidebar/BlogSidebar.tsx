import clsx from 'clsx';
import type { BlogPost } from '../../../types/blog-post-types';
import './BlogSidebar.css';

interface Props {
  posts: BlogPost[];
  selectedPost: BlogPost | null;
  setSelectedPost: (selectedPost: BlogPost) => void;
}

function BlogSidebar({ posts, selectedPost, setSelectedPost }: Props) {
  return (
    <aside className="blog-side-menu">
      <ul className="blog-main-menu">
        <li className="blog-main">
          My Blog
          <ul className="blog-post-list">
            {posts.map((blogPost) => {
              return (
                <li
                  key={blogPost.id}
                  className={clsx('sub-tab', `post-tab-${blogPost.id}`, selectedPost?.id === blogPost.id && 'selected')}
                  onClick={() => {
                    setSelectedPost(blogPost);
                  }}
                >
                  {blogPost.title}
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default BlogSidebar;
