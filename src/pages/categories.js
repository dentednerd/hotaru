import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link, graphql } from 'gatsby';

const CategoriesPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <div>
    <div>
      <h1>Categories</h1>
      <ul>
        {group.map(cat => (
          <li key={cat.fieldValue}>
            <Link to={`/categories/${kebabCase(cat.fieldValue)}/`}>
              {`${cat.fieldValue} (${cat.totalCount})`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default CategoriesPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;
