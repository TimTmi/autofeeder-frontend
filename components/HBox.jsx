const HBox = ({ children, className = "" }) => (
  <div className={`flex flex-row items-center ${className}`}>{children}</div>
);

export default HBox;
