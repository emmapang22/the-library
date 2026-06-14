"use client";

import { Book } from "../../models/Book";
import { Button, ButtonType } from "../Button";

type BookCardProps = {
  buttonText: string;
  buttonFunction: (book: Book) => Promise<void>;
  b: Book;
};

export const BookCardBtn = ({
  buttonText,
  buttonFunction,
  b,
}: BookCardProps) => {
  return (
    <Button
      buttonType={ButtonType.secondary}
      extraClasses={" mt-4 lg:self-end w-full lg:w-auto "}
      onClick={() => {
        buttonFunction(b);
      }}
    >
      {buttonText}
    </Button>
  );
};
