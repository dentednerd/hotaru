import Community from '../organisms/Community';
import Experience from '../organisms/Experience';
import Header from '../organisms/Header';
import Layout from '../templates/Layout';
import More from '../organisms/More';

const HomePage = () => {
  return (
    <Layout>
      <div className="home-page-container">
        <Header />
        <Experience />
        <Community />
        <More />
      </div>
    </Layout>
  );
};

export default HomePage;
