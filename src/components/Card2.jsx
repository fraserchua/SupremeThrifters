import Image from "next/image";
import React from "react";

const Card = ({ className, image, title, children,img_width, div_width }) => {
  return (
    <div
      class={`flex flex-col rounded-lg bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ${div_width} md:flex-row ${className}`}
    >
      <Image
        src={image}
        className={`h-96 ${img_width} rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg max-xs:hidden`}
      />
      <div class="flex flex-col justify-start px-6 pt-6 pb-0 mb-0">
        <h5 class="mb-2 text-3xl font-bold text-neutral-300 dark:text-neutral-50">
          {title}
        </h5>
        {children}
      </div>
    </div>
  );
};

export default Card;
