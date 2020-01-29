import React from 'react';
import Screen from '../Screen';
import {
  Hero, Intro, Code, Developer, CallToAction,
} from '../templates/Home';
import Layout from '../templates/Layout';
import './global.css';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.firstDiv = React.createRef();
    this.secondDiv = React.createRef();
    this.thirdDiv = React.createRef();
    this.fourthDiv = React.createRef();
    this.fifthDiv = React.createRef();
    this.scroll = this.scroll.bind(this);
  }

  scroll(ref) { // eslint-disable-line class-methods-use-this
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <Layout>
        <Screen
          ref={this.firstDiv}
          className="purple"
          onClick={() => this.scroll(this.secondDiv)}
        >
          <Hero />
        </Screen>
        <Screen
          ref={this.secondDiv}
          className="sage"
          onClick={() => this.scroll(this.thirdDiv)}
        >
          <Intro />
        </Screen>
        <Screen
          ref={this.thirdDiv}
          className="lemon"
          onClick={() => this.scroll(this.fourthDiv)}
        >
          <Code />
        </Screen>
        <Screen
          ref={this.fourthDiv}
          className="sky"
          onClick={() => this.scroll(this.fifthDiv)}
        >
          <Developer />
        </Screen>
        <Screen
          ref={this.fifthDiv}
          backToTop
          className="pink"
          onClick={() => this.scroll(this.firstDiv)}
        >
          <CallToAction />
        </Screen>
      </Layout>
    );
  }
}
