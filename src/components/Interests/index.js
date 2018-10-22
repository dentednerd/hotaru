import React from 'react'
import Flipcard from '../Flipcard'
import OrangeBox from '../OrangeBox'

import './Interests.css'

const Interests = () => {
  return (
    <article className="interests">
      <h2>These are my interests beyond code.</h2>

      <div className="cards">

        <Flipcard
          title={'Music'}
          content={`My degree is in music. I sing and play guitar, bass and piano. I've played guitar at the Albert Hall and for the Queen.`}
        />

        <Flipcard
          title={'Video games'}
          content={`An unexpected benefit from my developer career so far is that I've become quite good at CS:GO.`}
        />

        <Flipcard
          title={'Anime'}
          content={`FLCL and Steins;Gate are among my favourite series.`}
        />

        <Flipcard
          title={'Crochet'}
          content={`I taught myself to crochet whilst I was ill one day. Making gifts for friends and family can be very relaxing.`}
        />

        <Flipcard
          title={`Books`}
          content={`Neil Gaiman is my author of choice, closely followed by Ursula Le Guin and George R R Martin.`}
        />

        <Flipcard
          title={'Cats'}
          content={`I have a cat called Zac. He's pretty awesome.`}
        />

      </div>

      <OrangeBox>
        <h2>
          And finally, some fun facts about me.
        </h2>
        If I were a student at Hogwarts, I would be in Ravenclaw.<br />
        If I lived in Westeros, I would bend the knee to House Targaryen.<br />
        According to <a href="https://www.16personalities.com">16personalities.com</a>, I am an Advocate, or an INFJ.
      </OrangeBox>

      <h2>{`I'd love to hear from you. Get in touch!`}</h2>

    </article>
  )
}

export default Interests
