function Text({ text }) {
  return (
    <p className="text-base md:text-lg text-neutral-400 leading-relaxed  md:text-left hover:text-neutral-300">
      {text}
    </p>
  );
}

export default Text;
