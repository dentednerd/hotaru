import React from 'react';
import styled from '@emotion/styled';
import CTALink from '../atoms/CTALink';
import introData from '../data/introData';
import Layout from '../templates/Layout';

const HomePage = () => {
  const HomeSection = styled('section')`
    background-color: ${props => props.theme[props.backgroundColor]};
    height: 100vh;
    max-width: 100vw;
    display: grid;
    place-items: center;
    scroll-snap-align: start;

    .container {
      display: grid;
      grid-template-rows: 2fr 1fr;
      grid-template-columns: 1fr;
      gap: 2rem;
      place-items: center;
      text-align: center;
      height: fit-content;

      @media(min-width: 1024px) {
        height: 100vh;
        grid-template-rows: 1fr;
        grid-template-columns: 2fr 1fr;
        column-gap: 1rem;
        row-gap: 0;
        text-align: left;
      }

      div.text-content > * {
        margin-inline: auto;

        @media (min-width: 1024px) {
          margin-inline: 0;
        }
      }
    }

    &::after {
      content: '';
      display: table;
      clear: both;
    }

    h2 {
      display: inline;
      width: fit-content;
      background: linear-gradient(
        130deg,
        ${props => props.theme.accentBold},
        ${props => props.theme.text}
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: "Raleway", sans-serif;
      font-weight: 900;
      margin-inline: auto !important;

      @media (min-width: 1024px) {
        margin-inline: 0 !important;
      }
    }

    svg:not(.icon) {
      align-self: start !important;
      max-height: 10rem;
      width: 100%;

      @media (min-width: 800px) {
        align-self: center !important;
      }
    }

    .content-wrapper {
      align-self: end;

      @media (min-width: 800px) {
        align-self: center;
      }
    }

    section.content {
      display: flex;
      flex-flow: column;
      justify-content: center;
      margin-bottom: 1rem;
      order: 2;

      @media (min-width: 1024px) {
        order: 1;
      }
    }

    a {
      margin-inline: auto;

      @media (min-width: 800px) {
        margin-inline: 0;
      }
    }
  `;

  return (
    <Layout>
      {introData.map((entry, index) => (
        <HomeSection index={index} key={entry.text} backgroundColor={entry.color}>
          <div className="container">
            <div className="text-content">
              <section className="content" dangerouslySetInnerHTML={{ __html: entry.content }} />
              <CTALink to={entry.link} icon={entry.icon}>
                {entry.text}
              </CTALink>
            </div>
            {entry.svg}
          </div>
        </HomeSection>
      ))}
    </Layout>
  );
}

export default HomePage;
