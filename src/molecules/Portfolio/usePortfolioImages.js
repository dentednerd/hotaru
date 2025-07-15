import { graphql, useStaticQuery } from 'gatsby';

export const usePortfolioImages = () => {
  const { images } = useStaticQuery(
    graphql`
      {
        images: allImageSharp {
          edges {
            node {
              gatsbyImageData
            }
          }
        }
      }
    `
  );
  return images;
};
