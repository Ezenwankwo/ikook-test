import React from "react";

interface IncludeItemProps {
  icon: string;
  text: string;
}

const IncludeItem: React.FC<IncludeItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3 leading-none mt-3">
      <img
        src={icon}
        className="aspect-[1] object-contain w-[26px] self-stretch shrink-0 my-auto"
        alt=""
      />
      <span className="text-[#3F3E3D] self-stretch my-auto">{text}</span>
    </div>
  );
};

interface MenuIncludesProps {
  quote?: any;
}

export const MenuIncludes: React.FC<MenuIncludesProps> = ({ quote }) => {
  return (
    <section className="flex w-full flex-col text-sm text-[#3F3E3D] font-normal bg-[#FFFCF5] mt-[31px] px-[25px] py-[18px] rounded-lg max-md:px-5">
      <h3 className="text-black text-base font-medium">The Menu includes</h3>

      <div className="flex items-center gap-3 leading-none mt-[18px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/ff501a58d59a405f99206348782d743c/a117d3a9fb84465cd582ba7eba5b0c6bf2275fa4?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[26px] self-stretch shrink-0 my-auto"
          alt=""
        />
        <span className="text-[#3F3E3D] self-stretch my-auto">
          All ingredients
        </span>
      </div>

      {quote?.includedItems?.map((item: any) => (
        <IncludeItem key={item.id} icon={item.icon} text={item.text} />
      ))}

      <p className="text-[#3F3E3D] text-[8px] leading-5 max-md:mr-[9px]">
        We pay the chefs after the event, to protect your money
      </p>
    </section>
  );
};
