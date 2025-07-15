import BlogPostCard from '../BlogPostCard';
import { useBlogPosts } from './useBlogPosts';

import "./BlogPostList.scss";

const BlogPostList = () => {
  const posts = useBlogPosts();
  if (!posts) return null;

  return (
    <section className="blog-post-list">
      <div className="content">
        {posts.edges.map(({ node }) => (
          <BlogPostCard key={node.fields.slug} post={node} />
        ))}
      </div>
    </section>
  );
};



export default BlogPostList;
