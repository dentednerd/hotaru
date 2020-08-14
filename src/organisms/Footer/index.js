import React from 'react';
import styled from '@emotion/styled';

const StyledFooter = styled('footer')`
  background-color: #332E4A;
  color: #fff;
  min-height: 25vh;
  height: auto;
  padding: 2rem;
  width: calc(100vw - 4rem);

  div {
    border-top: solid 1px #fff;
    padding-top: 1rem;
    margin-top: 1rem;
    width: calc(50% - 2rem);

    @media(max-width: 767px) {
      width: 100%;
    }
  }

  h2 {
    font-size: 0.75rem;
    letter-spacing: 0.1rem;
    font-weight: 200;
    text-transform: uppercase;
  }

  p {
    font-family: Josefin Sans, sans-serif;
    max-width: 100%;
    font-size: 0.75rem;
    line-height: 0.8625rem;
    font-weight: 200;
  }
`;

const Footer = () => (
  <StyledFooter>
    <a href="mailto:jo.imlay@gmail.com"><img src="https://img.icons8.com/bubbles/64/000000/new-post.png" alt="Mail"/></a>
    <a href="https://twitter.com/dentednerd"><img src="https://img.icons8.com/bubbles/64/000000/twitter-circled.png" alt="Twitter"/></a>
    <a href="https://www.linkedin.com/in/joanne-imlay-4a7a7056/"><img src="https://img.icons8.com/bubbles/64/000000/linkedin.png" alt="LinkedIn"/></a>
    <a href="https://github.com/dentednerd"><img src="https://img.icons8.com/bubbles/64/000000/github.png" alt="Github"/></a>
    <div>
      <h2>joanneimlay.dev &copy; 2020</h2>
      <p>"When people call people nerds, mostly what they're saying is 'you like stuff', which is not a good insult at all."<br />-- John Green</p>
    </div>
  </StyledFooter>
);

export default Footer;
