import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import CTALink from '../atoms/CTALink';
import PageHeader from '../molecules/PageHeader';
import Modal from '../organisms/Modal';
import Layout from '../templates/Layout';
import { Programmer } from '../assets/undraws';
import { colors } from '../tokens';
import talksData from '../data/talksData';

const StyledShowreel = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const List = styled('ul')`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;

  li.talk {
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: solid 1px ${colors.constants.purple};

    &:last-of-type {
      border-bottom: none;
    }

    section.links {
      display: flex;
      flex-flow: row wrap;
      gap: 1rem;
    }
  }

  h3 {
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    width: fit-content;
  }
`;

const ShowreelTemplate = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(
    'https://www.youtube.com/embed/locZbr8Dx1A'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!showModal) document.body.style.overflow = "auto";
  }, [showModal]);

  return (
    <>
      <Layout>
        <StyledShowreel>
          <PageHeader>
            <Programmer />
            <>
              <p>Sometimes folks like to get me on camera saying nice things about tech. What they don&apos;t always know is that I love talking about tech, and I&apos;d talk for hours if they&apos;d let me.</p>
              <h2>Showreel</h2>
            </>
          </PageHeader>
          <List>
            {talksData.map(talk => (
              <li className="talk" key={talk.name}>
                <h3>{talk.name}</h3>
                {talk.event && (<h4>{talk.event}<br /><span className="dates">{talk.date}</span></h4>)}
                <p>{talk.description}</p>
                <section className="links">
                  <CTALink
                    icon={faYoutube}
                    onClick={() => {
                      setCurrentVideo(talk.youtubeUrl);
                      setShowModal(true);
                    }}
                  >
                    watch
                  </CTALink>
                  {talk.relatedLinks?.map(link => (
                    <CTALink
                      ghost
                      key={link.name}
                      href={link.url}
                      icon={faExternalLinkAlt}
                    >
                      {link.name}
                    </CTALink>
                  ))}
                </section>
              </li>
            ))}
          </List>
        </StyledShowreel>

      </Layout>
      <Modal show={showModal} setShow={setShowModal} currentVideo={currentVideo} />
    </>
  );
};

export default ShowreelTemplate;
