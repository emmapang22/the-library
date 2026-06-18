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
    "px-4 md:px-8 py-2 rounded transition ease-in-out duration-200 font-medium hover:cursor-pointer focus:outline-2 focus:outline-offset-2";

  if (extraClasses) {
    className += extraClasses;
  }

  switch (buttonType) {
    case ButtonType.primary:
      className +=
        " bg-primary-darker text-white hover:bg-secondary hover:text-black focus:outline-secondary";
      break;

    case ButtonType.secondary:
      className +=
        " bg-secondary text-black hover:bg-primary dark:hover:bg-primary-lighter hover:text-white focus:outline-secondary";
      break;

    default:
      className +=
        " bg-gray-400 border hover:bg-gray-600 hover:text-white dark:bg-gray-200 text-black dark:hover:bg-gray-700 focus:outline-black";
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
