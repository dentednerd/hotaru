import "./PageHeader.scss";

const PageHeader = ({ style, children }) => (
  <header className="page-header" style={style}>
    {children[0]}
    <div className="text">
      {children[1]}
    </div>
  </header>
);

export default PageHeader;
