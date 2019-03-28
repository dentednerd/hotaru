import React from 'react'
import styled from '@emotion/styled'
import { Link, graphql } from "gatsby"
import OrangeBox from '../../OrangeBox'

const KeyData = props => {
  return (
    <OrangeBox>
      <table>
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
              <td className="data"><Link to={props.latestBlog.fields.slug}>{props.latestBlog.frontmatter.title}</Link></td>
            </tr>
        </tbody>
      </table>
    </OrangeBox>
  )
}

export default KeyData