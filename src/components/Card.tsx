interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  imagen: string;
}

function Card({ title, subtitle, description, imagen }: CardProps) {
  return (
    <div className="bg-gray-200 p-4 rounded-2xl shadow-lg w-[30%]">
      <div className="bg-purple-300 w-full h-[250px] rounded-xl flex items-center justify-center">
        {/* Aquí iría la imagen */}
        <span className="text-white font-bold">{imagen}</span>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold font-header ">{title}</h2>
        <h3 className="text-sm font-header font-regular">{subtitle}</h3>
        <p className="font-body text-md mt-2">{description}</p>
      </div>
    </div>
  );
}

export default Card;
