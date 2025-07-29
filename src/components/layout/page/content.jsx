const Content = ({ children, className = "" }) => {
  return (
    <main className={`flex flex-1 overflow-auto py-4 ${className}`}>
      {children}
    </main>
  );
};

export default Content;
