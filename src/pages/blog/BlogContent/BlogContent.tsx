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
      }) || 'Welcome to my blog! This is where I will take you step-by-step into my journey of creating my own website. Every day, I will be writing down key concepts I learned while working on the website. I will note some obstacles I had to overcome as well as the many possible solutions that come to mind in the process of creating not only a great looking website but a well structured and designed software product. I will also explain the reasons why I made a certain design choice looking at the advantages and drawbacks of each potential solution through the lens of a software (with a touch of UX) developer. I hope this blog will not only be some sort of benefit to me as I jot down my experience in the creation of this React Project, but also a benefit to anyone reading the blog that is also looking to learn how to create their own React product.'}
    </article>
  );
}

export default BlogContent;
