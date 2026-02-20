function Link({ children, href, title }) {
  return (
    <a
      target="_blank"
      href={href}
      title={title}
      className="text-2xl md:text-3xl text-custom-color 
border border-neutral-700 
rounded-xl p-3 
transition-all duration-300 
hover:border-custom-color 
hover:scale-110 
hover:shadow-lg hover:shadow-custom-color/20"
    >
      {children}
    </a>
  );
}

export default Link;
