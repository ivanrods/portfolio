import Text from "./Text";
function ServiceCard({ title, description, children, positon }) {
  return (
    <div
      data-aos="fade-up"
      className={`group flex flex-col gap-5 max-w-2xl bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 p-8 rounded-2xl transition-all duration-300 hover:border-custom-color hover:shadow-xl hover:shadow-custom-color/10
${positon}`}
    >
      <div className="flex gap-4">
        {children}

        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
      </div>

      <Text text={description} />
    </div>
  );
}

export default ServiceCard;
