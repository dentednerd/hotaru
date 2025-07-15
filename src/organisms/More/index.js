import HeadedSection from "../../atoms/HeadedSection";
import MixedText from "../../atoms/MixedText";
import MostRecentBlogPost from "../../molecules/MostRecentBlogPost";
import Portfolio from "../../molecules/Portfolio";

import "./More.scss";

const More = () => (
  <HeadedSection heading="...but wait, there's more">
    <div className="flex-container">
      <MostRecentBlogPost />
      <div className="portfolio-container">
        <Portfolio />
        <MixedText>
          a few <span>side projects</span>
        </MixedText>
      </div>
    </div>
  </HeadedSection>
);

export default More;
