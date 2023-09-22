import React from "react";
import style from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  rest?: any;
};
const CTAB = ({ children, onClick, ...rest }: Props) => {
  return (
    <button onClick={onClick} className={style.ctab} {...rest}>
      {children}
    </button>
  );
};

export default CTAB;
