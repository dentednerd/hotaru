import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import BlogPostCard from '../BlogPostCard';
import GradientBorder from "../../atoms/GradientBorder";
import MixedText from '../../atoms/MixedText';
import { useMostRecentBlogPost } from './useMostRecentBlogPost';

import './MostRecentBlogPost.scss';

const MostRecentBlogPost = () => {
  const post = useMostRecentBlogPost();
  if (!post) return null;

  const mostRecentPost = post.edges[0].node;
  const thisFeaturedImage = getImage(mostRecentPost.frontmatter.featuredImage);

  return (
    <GradientBorder className="most-recent-blog-post">
      <MixedText>the latest entry in my <span>journal</span>...</MixedText>
      <BlogPostCard post={mostRecentPost} />
      <GatsbyImage image={thisFeaturedImage} alt="" loading="lazy" />
    </GradientBorder>
  );
};

export default MostRecentBlogPost;
