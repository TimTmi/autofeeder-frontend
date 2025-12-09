const Panel = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Panel;
