function Container({ children, color }) {
  return (
    <div className={`px-4 justify-center ${color}`}>
      <div className="max-w-6xl py-24 mx-auto">{children}</div>
    </div>
  );
}

export default Container;
