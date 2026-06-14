"use client";

import { addToReadingList } from "../actions/bookActions";
import { Book } from "../models/Book";
import { Button, ButtonType } from "./Button";

type WantToReadBtnProps = {
  book: Book;
};

export const WantToReadBtn = ({ book }: WantToReadBtnProps) => {
  return (
    <Button
      buttonType={ButtonType.secondary}
      extraClasses={" mt-4 lg:self-end w-full lg:w-auto "}
      onClick={() => {
        addToReadingList(book);
      }}
    >
      Want to read
    </Button>
  );
};
