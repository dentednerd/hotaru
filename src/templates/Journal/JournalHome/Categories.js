import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Section = styled('section')`
  display: flex;
  flex-flow: column nowrap;
`;

const Categories = ({ cat }) => {
  return (
    <Section key={cat.fieldValue}>
      <h2>
        {cat.fieldValue.charAt(0).toUpperCase() + cat.fieldValue.substring(1)}
      </h2>
      {cat.nodes.map(node => (
        <Link to={node.fields.slug}>
          <p key={node.id}>
            &raquo;
            &nbsp;
            {node.frontmatter.title}
          </p>
        </Link>
      ))}
    </Section>
  );
};

export default Categories;
