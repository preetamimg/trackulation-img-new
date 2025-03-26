import Image from "next/image";
import React from "react";

type renderValueImageProps = {
  value : string,
  items : {
    icon : string,
    label : string
  }
}

type renderMenuItemImageProps = {
  label : string,
  items : {
    icon : string,
    label : string
  }
}

export const renderValueImage : React.FC<renderValueImageProps> = ({value, items}) => {
  console.log('item', items, value)
  return (
    <div className="flex items-center gap-2">
      <Image
        width={20}
        height={20}
        loading="lazy"
        quality={90}
        alt="replaceImage"
        src={items?.icon}
      ></Image>
      {items?.label}
    </div>
  );
};

export const renderMenuItemImage : React.FC<renderMenuItemImageProps> = ({label, items}) => {
  console.log('label', label)
  return (
    <div className="flex items-center gap-2">
      <Image
        width={20}
        height={20}
        loading="lazy"
        quality={90}
        alt="replaceImage"
        src={items?.icon}
      ></Image>
      {items?.label}
    </div>
  );
};