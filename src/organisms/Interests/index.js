import React from 'react'
import styled from '@emotion/styled'
import Flipcard from './Flipcard'
import OrangeBox from '../../atoms/OrangeBox'

const StyledInterests = styled('section')`
  text-align: center;
  margin-bottom: 1em;

  h3 {
    font-family: 'Lato', sans-serif;
    padding-bottom: 0;
  }

  .cards {
    margin: 0 auto 2em auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
  }

  @media screen and (orientation: portrait) {
    h2 {
      font-size: 1em;
    }
    .orange-box h2 {
      font-size: 24px;
    }
  }
`

const DownloadLink = styled('p')`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.6em;
  line-height: 1em;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: 2vw 0;

  a {
    color: #c30;
    transition: .5s ease;

    &:hover {
      text-shadow: none;
      color: #f90;
      transition: .5s ease;
    }
  }
`

const Interests = () => {
  return (
    <StyledInterests>
      <h2>These are my interests beyond code.</h2>

      <section className="cards">

        <Flipcard
          title="Music"
          content="My degree is in music. I sing and play guitar, bass and piano. I've played guitar at the Albert Hall and for the Queen."
        />

        <Flipcard
          title="Video games"
          content="An unexpected benefit from my developer career so far is that I've become quite good at CS:GO."
        />

        <Flipcard
          title="Anime"
          content="FLCL and Steins;Gate are among my favourite series."
        />

        <Flipcard
          title="Crochet"
          content="I taught myself to crochet whilst I was ill one day. Making gifts for friends and family can be very relaxing."
        />

        <Flipcard
          title="Books"
          content="Neil Gaiman is my author of choice, closely followed by Ursula Le Guin and George R R Martin."
        />

        <Flipcard
          title="Cats"
          content="I have a cat called Zac. He's pretty awesome."
        />

      </section>

      <OrangeBox>
        <h2>
          And finally, some fun facts about me.
        </h2>
        <p>If I were a student at Hogwarts, I would be in Ravenclaw.</p>
        <p>If I lived in Westeros, I would bend the knee to House Targaryen.</p>
        <p>
          According to 
          <a href="https://www.16personalities.com">16personalities.com</a>
          , I am an Advocate, or an INFJ.
        </p>
      </OrangeBox>

      <h2>I&apos;d love to hear from you. Get in touch!</h2>

      <DownloadLink>
        <a href="https://www.dropbox.com/s/fekqikh5iek86t2/Joanne%20Imlay%20CV.pdf?dl=0" target="_blank" rel="noopener noreferrer">
          Download this CV in PDF format
        </a>
      </DownloadLink>

    </StyledInterests>
  )
}

export default Interests
