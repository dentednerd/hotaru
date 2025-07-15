import Brands from "../../molecules/Brands";
import HeadedSection from "../../atoms/HeadedSection";
import Timeline from "../../molecules/Timeline";

const Experience = () => (
  <div className="home-page-organism">
    <HeadedSection heading="brands I've worked with">
      <Brands />
      <Timeline />
    </HeadedSection>
  </div>
);

export default Experience;
