import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import Screen from '../atoms/Screen';
import Layout from '../templates/Layout';
import showreel from '../templates/Showreel';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.topSection = React.createRef();
    this.section0 = React.createRef();
    this.section1 = React.createRef();
    this.section2 = React.createRef();
    this.section3 = React.createRef();
    this.section4 = React.createRef();
    this.scroll = this.scroll.bind(this);
  }

  scroll(ref) { // eslint-disable-line class-methods-use-this
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const Hero = styled('div')`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `;

    return (
      <Layout>
        <Screen
          className="purple"
          ref={this.topSection}
          onClick={() => this.scroll(this.section0)}
        >
          <Hero>
            <h1>showreel</h1>
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ margin: '0 0.5rem 0 0', opacity: 1 }}
            />
          </Hero>
        </Screen>
        <Screen
          className="sage"
          ref={this.section0}
          onClick={() => this.scroll(this.section1)}
        >
          {showreel[0]}
        </Screen>
        <Screen
          className="lemon"
          ref={this.section1}
          onClick={() => this.scroll(this.section2)}
        >
          {showreel[1]}
        </Screen>
        <Screen
          className="sky"
          ref={this.section2}
          onClick={() => this.scroll(this.section3)}
        >
          {showreel[2]}
        </Screen>
        <Screen
          className="sage"
          ref={this.section3}
          onClick={() => this.scroll(this.section4)}
        >
          {showreel[3]}
        </Screen>
        <Screen
          className="lemon"
          backToTop
          ref={this.section4}
          onClick={() => this.scroll(this.topSection)}
        >
          {showreel[4]}
        </Screen>
      </Layout>
    );
  }
}