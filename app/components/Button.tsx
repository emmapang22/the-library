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
    "px-4 md:px-8 py-2 rounded transition ease-in-out duration-200 font-medium hover:cursor-pointer ";

  if (extraClasses) {
    className += extraClasses;
  }

  switch (buttonType) {
    case ButtonType.primary:
      className += " bg-primary-darker text-white hover:bg-primary";
      break;

    case ButtonType.secondary:
      className += " bg-secondary text-black hover:bg-secondary-darker";
      break;

    default:
      className +=
        " bg-gray-400 border hover:bg-gray-600 hover:text-white dark:bg-gray-200 text-black dark:hover:bg-gray-700";
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
