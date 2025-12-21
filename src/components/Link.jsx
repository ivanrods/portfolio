function Link({ children, href, title }) {
  return (
    <a
      target="_blank"
      href={href}
      title={title}
      className="text-2xl md:text-3xl text-custom-color border border-neutral-600 rounded-lg p-3 transition duration-300 hover:border-custom-color"
    >
      {children}
    </a>
  );
}

export default Link;
