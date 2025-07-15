import "./HeadedSection.scss";

const HeadedSection = ({ heading, children }) => {
  return (
    <section className="headed-section">
      <h2 className="headed-section-heading">{heading}</h2>
      {children}
    </section>
  );
};

export default HeadedSection;
