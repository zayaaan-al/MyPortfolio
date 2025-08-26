import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  name: string;
  description: string;
};

const ServiceCard = ({ description, icon, name }: Props) => {
  return (
    <div
      className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 
      shadow-lg text-center hover:-translate-y-3 hover:shadow-cyan-400/30 
      transition-all duration-300"
    >
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <Image
          src={icon}
          alt={name}
          width={64}
          height={64}
          className="drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
        />
      </div>

      {/* Title */}
      <h1 className="text-xl md:text-2xl font-bold text-white mb-4">
        {name}
      </h1>

      {/* Description */}
      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
