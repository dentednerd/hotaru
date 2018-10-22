import React from 'react'
import Project from '../Project'

import './Portfolio.css'

const projectsData = [
  // {
  //   link: 'http://www.dentednerd.com',
  //   image: './DNDevShot.jpg',
  //   thumb: './DNDevThumb.jpg',
  //   title: 'Dented Nerd',
  //   caption: 'My tech blog, created in straightforward responsive HTML and CSS.',
  // },
  {
    link: 'https://codeninjas-nc5.herokuapp.com',
    image: './CodeNinjasShot.png',
    thumb: './CodeNinjasThumb.png',
    title: 'Code Ninjas',
    caption: 'An educational game built in Mongo, Express, React, Redux and Bulma. Accessibility was important to my design approach in this project.',
  },
  {
    link: 'https://northcoders-news-dentednerd.herokuapp.com',
    image: './NCNewsShot.png',
    thumb: './NCNewsThumb.png',
    title: 'Northcoders News',
    caption: 'A Reddit clone built in Express, Mongo, React, Redux and Bulma. I opted for a simple design with this project in order to let the content speak for itself.',
  },
  {
    link: 'https://dentednerd.github.io/Trell-Jo/',
    image: './TrellJoShot.png',
    thumb: './TrellJoThumb.png',
    title: 'TrellJo',
    caption: 'A Trello clone built in React and Bulma. I tried not to deviate the design too much from the original site.',
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
  },
  {
    link: 'https://github.com/dentednerd/LowbarAdv',
    image: './LowBarShot.png',
    thumb: './LowBarThumb.png',
    title: 'Lowbar',
    caption: 'Pure JavaScript implementations of Underscore functions.',
  },
  {
    link: 'https://dentednerd.github.io/precourse-section-3/',
    image: './DNReviewsShot.png',
    thumb: './DNReviewsThumb.png',
    title: 'Dented Nerd Reviews',
    caption: 'A small project to showcase my HTML and CSS design skills, with a little jQuery animation. ',
  }
]

class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayProject: 0,
    }
    this.showThisProject = this.showThisProject.bind(this)
  }

  showThisProject = i => {
    this.setState({ displayProject: i })
  }

  render() {
    const thumbnails = projectsData.map((project, i) => {
      return (
        <button
          tabIndex="0"
          onMouseOver={() => this.showThisProject(i)}
        >
          <img src={project.thumb} alt={project.title} />
        </button>
      )
    })

    const whichProject = this.state.displayProject

    return (
      <article className="portfolio-section">
        <h2>
          Here are some examples of my work.
        </h2>

        <div className="thumbnails">
          {thumbnails}
        </div>

        <div className="project-viewer">
          <Project
            link={projectsData[whichProject].link}
            image={projectsData[whichProject].image}
            title={projectsData[whichProject].title}
            caption={projectsData[whichProject].caption}
          />
        </div>

      </article >
    )
  }
}

export default Portfolio
