const Wrapper = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-1 flex-col px-4 ${className}`}>{children}</div>
  );
};

export default Wrapper;
