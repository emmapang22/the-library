import Link from "next/link";
import { ReactElement } from "react";

type ArrowBtnProps = {
  title: string;
  href: string;
  icon: ReactElement;
};

export const ArrowBtn = ({ title, href, icon }: ArrowBtnProps) => {
  return (
    <Link
      aria-label={title}
      title={title}
      className="bg-primary dark:bg-primary-lighter p-3 rounded-full hover:cursor-pointer hover:bg-secondary hover:text-black"
      href={href}
    >
      {icon}
    </Link>
  );
};
