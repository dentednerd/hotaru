import React from 'react';
import styled from '@emotion/styled';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Layout from '../templates/Layout';
import './global.css';

const videos = [
  'https://youtube.com/embed/gk_5ezTqd3c',
  'https://youtube.com/embed/l62-FZS5lGA',
  'https://youtube.com/embed/3Ew5dfitW6g',
  'https://youtube.com/embed/SsoueiuOUbc',
  'https://youtube.com/embed/Ua4bVgMO8ls',
  'https://youtube.com/embed/2bA0KAGYjIc',
];

const ShowreelBackground = styled('section')`
  background-color: #828dac;
  
  section.content {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem 0;
  }

  div {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    margin: 1rem auto;
    width: 100%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Showreel = () => {
  return (
    <Layout>
      <Header text="showreel" />
      <ShowreelBackground>
        <section className="content">
          {videos.map(item => (
            <div>
              <iframe
                title="showreel"
                src={item}
                frameBorder="0"
                allow="encrypted-media"
                allowFullScreen
              />
            </div>
          ))}
        </section>
      </ShowreelBackground>
      <Footer />
    </Layout>
  );
};

export default Showreel;
