function Wrapper({ children, color, onClick }) {
  return (
    <div
    onClick={onClick}
      className={`px-8 py-8 border-2 border-stone-500 transition duration-300 hover:bg-neutral-800 rounded-md ${color} flex `}
    >
      {children}
    </div>
  );
}

export default Wrapper;
