function Link({ children, href, title }) {
  return (
    <a
      target="_blank"
      href={href}
      title={title}
      className="text-2xl md:text-3xl text-blue-600 border-2 border-neutral-600 rounded-md p-3 transition duration-300 hover:bg-neutral-00 hover:text-blue-700  hover:bg-neutral-800"
    >
      {children}
    </a>
  );
}

export default Link;
