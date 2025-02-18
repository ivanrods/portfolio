function Link({ children, href }) {
  return (
    <a
      target="_blank"
      href={href}
      className="text-2xl md:text-3xl text-blue-600 border-2 border-neutral-600 rounded-md px-4 py-4 transition duration-300 hover:bg-neutral-00 hover:text-blue-700"
    >
      {children}
    </a>
  );
}

export default Link;
