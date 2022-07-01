import React, { ChangeEvent } from "react";
import clsx from "clsx";

export type Props ={
  outline:string,
    value: string,
   className:string,
   placeholder:string,
   required:boolean,
   type:string,
   onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}
const  Input: React.FC<Props> =(props)=> {
  const { onInputChange,className, value, placeholder, required, type = "text", ...rest } = props;

  const classNames = clsx({ input: true }, className);

  return (
    <label className="label">
      {placeholder}
      {required && <span className="input-required">*</span>}
      <div>
        <input
          value={value}
          onChange={onInputChange}
          type={type}
          placeholder={placeholder}
          className={classNames}
          required={required}
          {...rest}
        />
      </div>
    </label>
  );
}
export default Input;