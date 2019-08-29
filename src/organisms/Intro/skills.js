import React, { Fragment } from 'react'
import IntroSection from '../../atoms/IntroSection'
import skillsData from './skillsData'
import weakSkillsData from './weakSkillsData'
import logos from './logos'

const Skills = (props) => (
  <Fragment>
    <IntroSection className="skill-icons">
      <h2>Here&apos;s what I use every day.</h2>
      {skillsData.map(skill => (
        <a href={skill.link}><img src={logos[skill.image]} alt={skill.name} /></a>
      ))}
    </IntroSection>

    {props.jobHunt && (
      <IntroSection className="skill-icons also">
        <h2 style={{ fontSize: '1em' }}>(I&apos;ve got experience with these too.)</h2>
        {weakSkillsData.map(skill => (
          <a href={skill.link}><img src={logos[skill.image]} alt={skill.name} /></a>
        ))}
      </IntroSection>
    )}
  </Fragment>
)

export default Skills
