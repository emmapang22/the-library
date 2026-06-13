import { ReactNode } from "react";

export enum ButtonType {
  primary,
  secondary,
}

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  buttonType?: ButtonType;
  extraClasses?: string;
};

export const Button = ({
  children,
  onClick,
  buttonType,
  extraClasses,
}: ButtonProps) => {
  let className =
    "px-8 py-2 rounded transition ease-in-out duration-200 font-medium hover:cursor-pointer ";

  if (extraClasses) {
    className += extraClasses;
  }

  switch (buttonType) {
    case ButtonType.primary:
      className += " bg-slate-700 text-white hover:bg-slate-800";
      break;

    case ButtonType.secondary:
      className += "";
      break;

    default:
      className += "bg-gray-500 text-gray-900 hover:bg-gray-300";
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
