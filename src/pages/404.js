import "../scss/main.scss";
import CTALink from "../atoms/CTALink";
import Layout from "../templates/Layout";

const Four0Four = () => (
  <Layout>
    <p>
      "&apos;Tis not possible!", I pleaded,
      <br />
      But my browser, so conceited,
      <br />
      Remained blank; I then repeated,
      <br />
      Just a blank and nothing more.
    </p>
    <p>
      Then, in answer to my query,
      <br />
      Through the net I loved so dearly,
      <br />
      Came its answer, dark and dreary...
    </p>
    <h2>Quoth the server, 404.</h2>
    <CTALink to="/">
      back to homepage
    </CTALink>
  </Layout>
);

export default Four0Four;
