import clsx from 'clsx';
import type { BlogPost } from '../../../types/blog-post-types';
import './BlogSidebar.css';
import { useState } from 'react';

interface Props {
  posts: BlogPost[];
  selectedPost: BlogPost | null;
  setSelectedPost: (selectedPost: BlogPost | null) => void;
}

function BlogSidebar({ posts, selectedPost, setSelectedPost }: Props) {
  const [isOpened, setIsOpened] = useState(selectedPost !== null);
  const [onBlogTab, setOnBlogTab] = useState(false);

  function handleAccordian() {
    if (isOpened) {
      setIsOpened(false);
      setOnBlogTab(false);
    } else {
      setIsOpened(true);
    }
    setSelectedPost(null);
  }

  function toggleHoverOn() {
    setOnBlogTab(true);
  }

  function toggleHoverOff() {
    setOnBlogTab(false);
  }

  return (
    <aside className="blog-side-menu">
      <ul className="blog-main-list">
        <li
          className="my-blog-list"
          onMouseEnter={toggleHoverOn}
          onMouseLeave={toggleHoverOff}
        >
          <div className="my-blog-tab" onClick={handleAccordian}>
            <span className="sidebar-text">My Blog</span>
            <span
              className={clsx(
                'sidebar-arrow',
                (onBlogTab || isOpened) && 'downed',
              )}
            ></span>
          </div>
          <ul
            className={clsx(
              'blog-post-list',
              isOpened || onBlogTab ? 'expanded' : 'collapsed',
            )}
          >
            {Array.isArray(posts) && posts.map((blogPost) => {
              return (
                <li
                  key={blogPost.id}
                  className={clsx(
                    'sub-tab',
                    `post-tab-${blogPost.id}`,
                    selectedPost?.id === blogPost.id && 'selected',
                  )}
                  onClick={() => {
                    setSelectedPost(blogPost);
                    if (!isOpened) {
                      setIsOpened(true);
                    }
                  }}
                >
                  <div className="sub-tab-content">
                    <span className="sidebar-text">{blogPost.title}</span>
                    <span
                      className={clsx(
                        'blog-post-arrow',
                        selectedPost?.id === blogPost.id && 'selected',
                      )}
                    ></span>
                  </div>
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
