import React from "react";
import clsx from "clsx";

export type Props ={
  outline?:boolean,
   className?:string,
   children: JSX.Element | JSX.Element[] | string | number,
   type?:string,
   onClick?: ()=>void,
}

const Button: React.FC<Props> =(props)=> {
  const { type,children, outline, className, ...rest } = props;

  const classNames = clsx(
    {
      btn: true,
      "btn-default": !outline,
      "btn-outline": outline,
    },
    className
  );

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
}
export default Button;