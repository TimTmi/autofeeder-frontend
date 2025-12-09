const HBox = ({ children, className = "" }) => (
  <div className={`flex flex-row ${className}`}>{children}</div>
);

export default HBox;
