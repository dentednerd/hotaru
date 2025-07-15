import "./GradientBorder.scss";

const GradientBorder = ({ className, children }) => {
  return (
    <div className={`${className} gradient-border`}>
      <div className="gradient-border-content">
        {children}
      </div>
    </div>
  );
};

export default GradientBorder;
