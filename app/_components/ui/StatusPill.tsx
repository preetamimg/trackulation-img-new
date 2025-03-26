import React from "react";

interface statusProps {
  status? : string 
  type? : string | boolean
}

const StatusPill : React.FC<statusProps> = ({status, type}) => {
  return (
    <span className={`px-[0.375rem] py-[0.25rem] capitalize text-xs  font-medium rounded-full ${(type === true || status?.toLowerCase() === 'active') ? 'bg-[#ECFDF3] text-[#027A48]' : status?.toLowerCase() === 'pending' ? 'bg-theme7 text-theme5' : 'bg-theme7 text-theme5'}  inline-flex items-center justify-center text-nowrap gap-2`}>
      <span className={`${(type === true || status?.toLowerCase() === 'active') ? 'bg-[#12B76A]' : status?.toLowerCase() === 'pending' ? 'bg-theme13' : 'bg-theme13'} size-[0.375rem] rounded-full flex items-center justify-center`}></span>{" "}
      {status ?  status : ''}
      {type === true ? 'True' : 'False'} 
    </span>
  );
};

export default StatusPill;
