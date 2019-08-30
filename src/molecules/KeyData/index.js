import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import OrangeBox from '../../atoms/OrangeBox';

const StyledTable = styled('table')`
  td.data {
    padding-left: 1em;
  }
`;

const KeyData = (props) => {
  const { latestBlog } = props;

  return (
    <OrangeBox>
      <StyledTable>
        <tbody>
          <tr>
            <td><span>Name: </span></td>
            <td className="data">Joanne Imlay</td>
          </tr>
          <tr>
            <td><span>DoB: </span></td>
            <td className="data">28 September 1984</td>
          </tr>
          <tr>
            <td><span>Location: </span></td>
            <td className="data">Manchester</td>
          </tr>
          <tr>
            <td><span>Latest blog: </span></td>
            <td className="data"><Link to={latestBlog.fields.slug}>{latestBlog.frontmatter.title}</Link></td>
          </tr>
        </tbody>
      </StyledTable>
    </OrangeBox>
  );
};

export default KeyData;
