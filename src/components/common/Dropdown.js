import React, { useState } from 'react';

const Dropdown = ({titleIcon,isOpen,toggleDropdown,options,onClick}) => {
 
const handleClick=(item)=>{
  onClick(item)
}
  return (
    <div className="relative">
      <span onClick={toggleDropdown} className="px-4   rounded  focus:outline-none focus:ring-2 focus:ring-opacity-50">
        {titleIcon}
      </span>
      {isOpen && (
        <div className="absolute top-[80px]  right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50">
       {options&&options.map((item,id)=><span href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" key={id} onClick={()=>handleClick(item)}>{item.name}</span>)   }
         
        </div>
      )}
    </div>
  );
};

export default Dropdown;
