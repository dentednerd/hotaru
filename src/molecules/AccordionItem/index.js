import CTALink from '../../atoms/CTALink';
import FaIcon from '../../atoms/FaIcon';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';

import "./AccordionItem.scss";

const toggleOpen = (e) => {
  const thisItem = e.target.parentNode;
  thisItem.classList.toggle('open');

  const siblings = [...thisItem.parentNode.childNodes].filter(
    (node) => node !== thisItem
  );
  siblings.forEach((node) => node.classList.remove('open'));
};

const AccordionItem = ({ talk }) => {
  // const theme = useTheme()

  return (
    <div className="accordion-item">
      <button className="toggle" onClick={(e) => toggleOpen(e)}>
        <h3>{talk.name}</h3>
        <FaIcon icon={faChevronDown} />
      </button>

      <div className="content">
        <p className="description">{talk.description}</p>

        <div className="links">
          {talk.links?.map((link) => (
            <CTALink key={link.name} href={link.url}>
              {link.name}
            </CTALink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
