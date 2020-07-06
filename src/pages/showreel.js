import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import Screen from '../organisms/Screen';
import Layout from '../templates/Layout';
import showreel from '../templates/Showreel';
import Hero from '../organisms/Hero';
import './global.css';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.topSection = React.createRef();
    this.section0 = React.createRef();
    this.section1 = React.createRef();
    this.section2 = React.createRef();
    this.section3 = React.createRef();
    this.section4 = React.createRef();
    this.section5 = React.createRef();
    this.scroll = this.scroll.bind(this);
  }

  scroll(ref) { // eslint-disable-line class-methods-use-this
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <Layout>
        <Hero
          text="showreel"
          passedRef={this.topSection}
          passedNextRef={this.section0}
          icon={faYoutube}
          scrollFunc={this.scroll}
        />
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
          ref={this.section4}
          onClick={() => this.scroll(this.section5)}
        >
          {showreel[4]}
        </Screen>
        <Screen
          className="sky"
          backToTop
          ref={this.section5}
          onClick={() => this.scroll(this.topSection)}
        >
          {showreel[5]}
        </Screen>
      </Layout>
    );
  }
}
