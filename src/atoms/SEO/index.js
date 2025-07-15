import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet-async';
import { useLocation } from '@reach/router';

export default function SEO(props) {
  const { site, featuredImage } = useStaticQuery(graphql`
    query SeoMetaData {
      site {
        siteMetadata {
          title
          description
          siteUrl
          og {
            siteName
          }
        }
      }
      featuredImage: file(
        absolutePath: { glob: "**/src/assets/fallback.svg"}
      ) {
        publicURL
      }
    }
  `);

  const ogImage = props.featuredImage ?? featuredImage?.childImageSharp?.gatsbyImageData;
  const title = props.title ?? site?.siteMetadata?.title;
  const description = props.description ?? site?.siteMetadata?.description;
  const location = useLocation();

  const metas = [
    {
      name: 'description',
      content: description
    },
    {
      name: 'og:image',
      content: ogImage.publicURL
    },
    {
      name: 'og:image:width',
      content: `${ogImage.width}`
    },
    {
      name: 'og:image:height',
      content: `${ogImage.height}`
    },
    {
      name: 'og:type',
      content: 'website'
    },
    {
      name: 'og:title',
      content: title
    },
    {
      name: 'og:description',
      content: description
    },
    {
      name: 'og:site_name',
      content: site.siteMetadata.og.siteName
    },
    {
      name: 'og:url',
      content: `${site?.siteMetadata?.siteUrl}${location.pathname}`
    }
  ];

  if (props.keywords) {
    metas.push({
      name: 'keywords',
      content: props.keywords
    });
  }

  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      {
        metas.map(meta => (
          <meta key={meta.name} name={meta.name} content={meta.content} />
        ))
      }
    </Helmet>
  );
}
