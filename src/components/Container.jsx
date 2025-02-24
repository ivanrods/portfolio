function Container({ children, color, id }) {
  return (
    <div id={id} className={`px-4 justify-center ${color}`}>
      <div className="max-w-6xl py-24 mx-auto">{children}</div>
    </div>
  );
}

export default Container;
