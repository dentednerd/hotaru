import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import Flipcard from './Flipcard';
import OrangeBox from '../../atoms/OrangeBox';
import interests from './interests';

const StyledInterests = styled('section')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
  
  h2 {
    margin-bottom: 0.5em;
  }

  p {
    line-height: 1.5em;
    margin-bottom: 0.5em;
  }

  span {
    font-family: "Roboto Slab", serif;
    color: #c30;
    margin-bottom: 0;
    font-weight: bold;
    line-height: 1em;
  }

  @media screen and (orientation: portrait) {
    h2 {
      font-size: 1em;
    }
    .orange-box h2 {
      font-size: 24px;
    }
  }
`;

const Hobbies = styled('div')`
  width: 75%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DownloadLink = styled('p')`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.6em;
  line-height: 1em;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: 2vw 0;

  a {
    color: #c30;
    transition: .5s ease;

    &:hover {
      text-shadow: none;
      color: #f90;
      transition: .5s ease;
    }
  }
`;

const Interests = () => (
  <Fragment>
    <StyledInterests>
      <Hobbies>
        <h2>When I'm not working, I like...</h2>
        <section>
          {interests.map(interest => (
            <p>
              <span>
                {interest.name}
:
              </span>
              {' '}
              {interest.desc}
            </p>
          ))}
        </section>
      </Hobbies>
      <OrangeBox>
        <h2>Let&apos;s play a game! Guess which statement isn&apos;t true...</h2>
        <p>
          <a href="https://www.pottermore.com">Pottermore</a>
          {' '}
          says that I&apos;m a Ravenclaw.
        </p>
        <p>My favourite Final Fantasy game was XIII.</p>
        <p>At least once a year, I go back and re-read the Earthsea books.</p>
        <p>In World of Warcraft, my main character is a hunter.</p>
        <p>
          <a href="https://www.16personalities.com">16personalities.com</a>
          {' '}
          says that I&apos;m an Advocate, or an INFJ.
        </p>
        <p>I bend the knee to House Targaryen.</p>
        <p>My favourite Doctor? Eleven.</p>
      </OrangeBox>
    </StyledInterests>

    <h2>I&apos;d love to hear from you. Get in touch!</h2>
    <DownloadLink>
      <a href="https://www.dropbox.com/s/fekqikh5iek86t2/Joanne%20Imlay%20CV.pdf?dl=0" target="_blank" rel="noopener noreferrer">
          Download this CV in PDF format
      </a>
    </DownloadLink>
  </Fragment>
);

export default Interests;
