import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, description }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-2xl shadow-lg w-[30%]">
      <div className="bg-purple-300 w-full h-[250px] rounded-xl flex items-center justify-center">
        {/* Aquí iría la imagen */}
        <span className="text-white font-bold">Imagen</span>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <h3 className="text-sm text-gray-600">{subtitle}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

const CardContainer: React.FC = () => {
  return (
    <div className="flex justify-between p-6">
      <Card
        title="Título 1"
        subtitle="Subtítulo 1"
        description="Descripción corta aquí."
      />
      <Card
        title="Título 2"
        subtitle="Subtítulo 2"
        description="Otra descripción interesante."
      />
      <Card
        title="Título 3"
        subtitle="Subtítulo 3"
        description="Más texto para completar la tarjeta."
      />
    </div>
  );
};

export default CardContainer;
