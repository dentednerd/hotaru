import React from 'react';
import styled from '@emotion/styled';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import Layout from '../Layout';
import JournalFooter from './JournalFooter';

const JournalWrapper = styled('section')`
  display: flex;
  flex-flow: column nowrap;
  max-width: 800px;
  margin: 0 auto;
  background: #828dac;
`;

const ContentBackground = styled('section')`
  background-color: #828dac;
`;

const FooterBackground = styled('section')`
  background-color: #7a7495;
`;

const JournalTemplate = ({ data, children }) => {
  return (
    <Layout>
      <Header text="journal" />
      <ContentBackground>
        <JournalWrapper>
          {children}
        </JournalWrapper>
      </ContentBackground>
      <FooterBackground>
        <JournalFooter categories={data.categories.group} tags={data.tags.group} />
      </FooterBackground>
      <Footer />
    </Layout>
  )
}

export default JournalTemplate;
