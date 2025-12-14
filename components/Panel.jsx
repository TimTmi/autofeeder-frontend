const Panel = ({ children, className = "" }) => {
  return (
    <div
      className={`
        bg-white rounded-2xl
        shadow-[0_0px_20px_-1px_rgba(0,0,0,0.25)]
        ring-1 ring-black/5
        flex flex-col overflow-hidden
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Panel;
