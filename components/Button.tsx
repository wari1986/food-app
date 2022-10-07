import React from "react";

interface Props {
  style: string;
  text: string;
}

const Button: React.FC<Props> = ({
  style,
  text
}) => {
  return (
  <button
  className={style}
  >
  {text}
  </button>
  );
}

export default Button;
