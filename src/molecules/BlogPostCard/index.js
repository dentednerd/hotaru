import { Link } from 'gatsby';
import dayjs from 'dayjs';

import "./BlogPostCard.scss";

const BlogPostCard = ({ post }) => (
  <Link className="blog-post-card" to={post.fields.slug}>
    <div className="title">
      {post.frontmatter.title}
      <p>{dayjs(post.frontmatter.date).format("YYYY")}</p>
    </div>
  </Link>
);

export default BlogPostCard;
