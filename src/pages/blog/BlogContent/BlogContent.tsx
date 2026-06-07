import type { BlogPost } from '../../../types/blog-post-types';
import './BlogContent.css';

interface Props {
  selectedPost: BlogPost | null;
}

function BlogContent({ selectedPost }: Props) {
  return (
    <article className="blog-content">
      <h2 className="blog-title">{selectedPost?.title || 'My blog'}</h2>
      {selectedPost?.content.map((contentBlock) => {
        if (contentBlock.type === 'text') {
          return <p key={contentBlock.id}>{contentBlock.value}</p>;
        } else {
          return <img key={contentBlock.id} src={contentBlock.value} />;
        }
      })}
    </article>
  );
}

export default BlogContent;
