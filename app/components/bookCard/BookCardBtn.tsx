"use client";

import { Book } from "../../models/Book";
import { Button, ButtonType } from "../Button";

type BookCardProps = {
  buttonText: string;
  buttonFunction: (book: Book) => Promise<void>;
  b: Book;
  isReadingList?: boolean;
};

export const BookCardBtn = ({
  buttonText,
  buttonFunction,
  b,
  isReadingList,
}: BookCardProps) => {
  const alertMsg = isReadingList
    ? "Removed from reading list"
    : "Added to reading list";

  const handleClick = () => {
    buttonFunction(b);
    alert(alertMsg);
  };

  return (
    <Button
      buttonType={ButtonType.secondary}
      extraClasses={" mt-4 lg:self-end w-full lg:w-auto "}
      onClick={handleClick}
    >
      {buttonText}
    </Button>
  );
};
