import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { assets } from '../../templates/Portfolio/assets';
import { stackMap } from '../../helpers';

export default ({ project }) => {
  const ProjectWrapper = styled('section')`
    display: flex;
    flex-flow: row nowrap;
    width: 100vw;
    color: #7a7495;

    div {
      padding: 2rem;
      width: 50%;

      @media(max-width: 767px) {
        padding: 1rem 0;
        width: calc(100% - 2rem);
      }
    }

    p {
      max-width: 100%;
      margin-bottom: 2rem;
      
      @media(max-width: 767px) {
        font-size: 18px;
        line-height: 22px;
      }
    }

    h2 {
      text-align: right;
      font-variant: small-caps;
      letter-spacing: 0.1rem;
      margin-bottom: 0;
      text-shadow: 0.1rem 0.1rem 0.1rem #fff;
    }

    @media (max-width: 767px) {
      max-width: 100vw;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      position: relative;
    }
  `;

  const Stack = styled('p')`
    text-align: right;
    font-variant: small-caps;
    font-family: Josefin Sans, sans-serif;
    font-weight: 200;
    font-size: 0.8625rem;
  `;

  const StyledRelatedPosts = styled('section')`
    margin: 1rem 0;

    h3 {
      color: #7a7495;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }

    @media(max-width: 767px) {
      font-size: 18px;
      line-height: 22px;
    }
  `;

  const Visit = styled('a')`
    display: block;
    width: 50%;
    background-color: #ff7dab;
    color: #fff;
    font-weight: 700;
    font-size: 0.9rem;
    font-variant: small-caps;
    margin: 0 auto 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    text-align: center;
    box-shadow: 0.1rem 0.1rem 0.1rem #828dac;
    transition: box-shadow 0.1s;

    &:hover {
      text-decoration: none;
      box-shadow: 0.05rem 0.05rem 0.05rem #828dac;
      transition: box-shadow 0.1s;
    }

    @media(max-width: 1023px) {
      width: calc(100% - 2rem);
    }
  `;

  const Images = styled('div')`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

    @media(max-width: 1023px) {
      flex-flow: column nowrap;
      justify-content: flex-start;
    }

    @media(max-width: 767px) {
      width: calc(100vw - 2rem);
      padding: 0;
    }
  `;

  const Shot = styled('img')`
    max-width: calc(50vw - 4rem);
    margin-bottom: 2rem;

    @media(min-width: 768px) and (max-width: 1023px) {
      height: auto;
    }

    @media(max-width: 767px) {
      width: calc(100vw - 2rem);
      min-width: calc(100vw - 2rem);
      min-height: calc((100vw - 2rem) * 0.5625);
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  `;

  return (
    <ProjectWrapper>
      <div>
        <h2>{project.title}</h2>
        <Stack>
          {stackMap(project.stack)}
        </Stack>
        <section dangerouslySetInnerHTML={{ __html: project.caption }}/>
        {project.relatedPosts && (
          <StyledRelatedPosts>
            <h3>Read more in my journal:</h3>
            {project.relatedPosts.map(link => (
              <Link to={link.slug} key={link.name}>
                {link.name}
              </Link>
            ))}
          </StyledRelatedPosts>
        )}
        {project.links.map(link => (
          <Visit href={link.url}>
            {link.text}
          </Visit>
        ))}
      </div>
      <Images>
        {project.images.map(image => (
          <Shot src={assets[image]} alt={project.title}/>
        ))}
      </Images>
    </ProjectWrapper>
  );
};
