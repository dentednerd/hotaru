import React from "react"
import WhiteBand from "../components/atoms/WhiteBand"
import WhiteProject from "../components/molecules/WhiteProject"
import RedProject from "../components/molecules/RedProject"
import Header from '../components/organisms/Header'
import PortfolioHeader from '../components/PortfolioHeader'
import IconLinks from '../components/molecules/IconLinks'

import './style.css'

const projectsData = [
  {
    link: 'https://codeninjas-nc5.herokuapp.com',
    image: './CodeNinjasShot.png',
    thumb: './CodeNinjasThumb.png',
    title: 'Code Ninjas',
    caption: 'An educational game built in Mongo, Express, React, Redux and Bulma. Accessibility was important to my design approach in this project.',
    stack: ['React', 'Redux', 'Bulma', 'Express', 'MongoDB'],
  },
  {
    link: 'https://northcoders-news-dentednerd.herokuapp.com',
    image: './NCNewsShot.png',
    thumb: './NCNewsThumb.png',
    title: 'Northcoders News',
    caption: 'A Reddit clone built in Express, Mongo, React, Redux and Bulma. I opted for a simple design with this project in order to let the content speak for itself.',
    stack: ['React', 'Redux', 'Bulma', 'Express', 'MongoDB'],
  },
  {
    link: 'https://dentednerd.github.io/Trell-Jo/',
    image: './TrellJoShot.png',
    thumb: './TrellJoThumb.png',
    title: 'TrellJo',
    caption: 'A Trello clone built in React and Bulma. I tried not to deviate the design too much from the original site.',
    stack: ['React', 'Bulma'],
  },
  // {
  //   link: 'https://m.me/Charcodeizard',
  //   image: './CharCodeShot.png',
  //   thumb: './CharCodeThumb.jpg',
  //   title: 'CharCodeizard',
  //   caption: 'An award-winning Facebook bot using Node and Express. I had fun creating this little character to amuse my Northcoders friends.',
  // },
  {
    link: 'https://dentednerd.github.io/Northwitter/',
    image: './NorthwitterShot.png',
    thumb: './NorthwitterThumb.png',
    title: 'Northwitter',
    caption: 'A Twitter clone built in React and Bootstrap. I really liked the idea of a cute, pastel version of Twitter.',
    stack: ['React', 'Bootstrap'],
  },
  {
    link: 'https://github.com/dentednerd/LowbarAdv',
    image: './LowBarShot.png',
    thumb: './LowBarThumb.png',
    title: 'Lowbar',
    caption: 'Pure JavaScript implementations of Underscore functions.',
    stack: ['JavaScript'],
  },
  {
    link: 'https://dentednerd.github.io/precourse-section-3/',
    image: './DNReviewsShot.png',
    thumb: './DNReviewsThumb.png',
    title: 'Dented Nerd Reviews',
    caption: 'A small project to showcase my HTML and CSS design skills, with a little jQuery animation. ',
    stack: ['HTML', 'CSS', 'jQuery'],
  },
]

const Portfolio = () => {
  return (
    <div className="portfolio">
      <WhiteBand>
        <Header />
      </WhiteBand>
      <PortfolioHeader />
      {projectsData.map((project, index) => {
        if (index % 2 === 0) {
          return <WhiteProject key={project.title} project={project} />
        }
        return <RedProject key={project.title} project={project} />
      })}
      <IconLinks />
    </div>

  )
}

export default Portfolio
