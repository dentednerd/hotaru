import dayjs from 'dayjs';

import CTALink from '../../atoms/CTALink';
import HeadedSection from '../../atoms/HeadedSection';
import talksData from '../../data/talksData';

import "./OutAndAbout.scss";

const OutAndAbout = () => {
  return (
    <HeadedSection heading="out and about">
      {talksData.map((talk) => (
        <div key={talk.name} className="out-and-about-item">
          <div className="item-date"> {dayjs(talk.date).format('YYYY')}</div>
          <div className="item-content">
            <h2>{talk.name}</h2>
            <p>{talk.description}</p>
          </div>
          <div className="links">
            {talk.links.map((link) => (
              <CTALink key={link.name} href={link.url}>
                {link.name}
              </CTALink>
            ))}
          </div>
        </div>
      ))}
    </HeadedSection>
  );
};

export default OutAndAbout;
