import Text from "./Text";
function ServiceCard({ title, description, children, positon }) {
  return (
    <div
    data-aos="fade-up"
      className={`flex flex-col max-w-2xl border-2 border-neutral-600 px-8 pt-8 rounded-xl transition duration-300 hover:bg-neutral-800
    ${positon} `}
    >
      <div className="flex gap-4">
        {children}

        <h3 className="text-2xl md:text-3xl inline">{title}</h3>
      </div>

      <Text text={description} />
    </div>
  );
}

export default ServiceCard;
