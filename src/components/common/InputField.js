import React, { useState } from "react";
import tw from "twin.macro";
import PasIcon from "../../assets/passIcon.svg";
import EyeIcon from "../../assets/eyeIcon.svg";

import { ReactSVG } from "react-svg";
const Wrapper = tw.div`flex min-w-full h-[57px] bg-InputBgColor rounded-[24px] items-center group-active:bg-InputSelectedColor`;

const Inputflex = tw.div`grow`;

const InputParent = tw.div` flex flex-col`;

const Leftflex = tw.div`flex-none w-[30px] ml-3  border-secondary  border-r-[1px]`;
const Rightflex = tw.div`flex-none w-[30px] mr-2`;

// const Error = tw.p`text-red-500 mt-1 text-sm`;

const InputForm = (props) => {
  const {
    defaultValue,
    onChange,
    icon,
    label,
    focus,
    disabled,
    helperText,
    placeholder,
    value,
    ref,
    icon2,
    error,
    name,
    field,
    type,
    ...rest
  } = props;
  const [typeFlag, setTypeFlag] = useState(false);
  const [focused, setFocused] = useState(false);

  const baseList = ['gmail.com',"icloud.com","outlook.com",'yahoo.com', 'hotmail.com', 'aol.com', 'msn.com'];
 

  const handleKeyPress = (e) => {
    if (name === "name") {
      const regex = /^[A-Za-z ]+$/;
      if (!regex.test(e.key)) {
        e.preventDefault();
      }
    }
    if (name === "Otp") {
      const regex = /^(?!-|\d*\.?\d*e)[\d.]+$/;
      if (!regex.test(e.key)) {
        e.preventDefault();
      }
    }
  };
  const handleValue = (item) => {
    field.onChange(`${value}@${item}`);
  };
  return (
    <div className="min-w-full group relative">
      <Wrapper>
        <Leftflex>{icon}</Leftflex>
        <Inputflex>
          <InputParent>
            <div className="relative z-0 px-1">
              <input
                type={typeFlag ? "text" : type}
                defaultValue={defaultValue}
                onChange={onChange}
                onKeyPress={handleKeyPress}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                value={value}
                name={name}
                disabled={disabled}
                id="floating_standard"
                className="outline-none bg-transparent w-full text-md  text-black block mt-2.5 px-0 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder={focused ? placeholder : " "}
              />
              <label
                htmlFor="floating_standard"
                className={`absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 `}
              >
                {label}
              </label>
            </div>
          </InputParent>
        </Inputflex>
        {icon2 && type !== "password" && <Rightflex>{icon2}</Rightflex>}
        {type === "password" && (
          <Rightflex onClick={() => setTypeFlag((prev) => !prev)}>
            {typeFlag ? (
              <ReactSVG src={PasIcon} className="cursor-pointer" /> 
           
            ) : (
              <ReactSVG src={EyeIcon} className="cursor-pointer max-w-[26px] max-h-[20px]"/> 
             
            )}
          </Rightflex>
        )}
      </Wrapper>
      {error && <p className="text-[13px] text-red-600 ">{error}</p>}
      {(name==="Email" || type==="email") && value?.length>0 && !value.includes("@") && <div className="absolute h-auto flex w-[85%]  z-150 bg-InputBgColor shadow-card p-1 left-9 top-[60px]">
        <ul className="w-full">
          {baseList && baseList.map((item, id) => <li key={id} className="hover:bg-InputSelectedColor cursor-pointer p-1 w-full" onClick={() => handleValue(item)}>
            {`${value}`}<span className="text-primary ">{`@${item}`}</span>
          </li>)}
        </ul>
        </div>}
    </div>
  );
};
export default InputForm
