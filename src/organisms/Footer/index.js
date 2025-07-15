import ContactIcons from '../../molecules/ContactIcons';
import HeadedSection from '../../atoms/HeadedSection';

import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div>
      <HeadedSection heading="Times are hard.">
        The world is a difficult place to live in right now. It's becoming a radical act to look after yourself and your health, but it's no less essential than it ever has been. Stay hydrated. Take breaks from the news and social media as often as you need. Talk to the people around you about what's going on.
      </HeadedSection>
      <p>Free Palestine. Trans rights now.</p>
      <p className="signature">Joey xx</p>
      <ContactIcons />
    </div>
  </footer>
);

export default Footer;
