import React from 'react';
import PageIntro from '../atoms/PageIntro';
import Layout from '../templates/Layout';
import ShowreelTemplate from '../templates/Showreel';

const Showreel = () => (
  <Layout>
    <PageIntro
      title="Showreel"
      text="Footage of me talking tech, in case you need to know what I look and sound like."
    />
    <div>
      <ShowreelTemplate />
    </div>
  </Layout>
);

export default Showreel;
