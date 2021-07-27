import React from 'react';
import styled from '@emotion/styled';
import CTALink from '../../../atoms/CTALink';

const Section = styled('section')`
  display: flex;
  flex-flow: column nowrap;
  width: 60%;
  margin-bottom: 1rem;
`;
const Categories = ({ cat }) => {
  return (
    <Section key={cat.fieldValue}>
      <h2>
        {cat.fieldValue.charAt(0).toUpperCase() + cat.fieldValue.substring(1)}
      </h2>
      {cat.nodes.map(node => (
        <CTALink to={node.fields.slug} key={node.id} style={{ margin: '0 0 1rem' }}>
          {node.frontmatter.title}
        </CTALink>
      ))}
    </Section>
  );
};

export default Categories;
