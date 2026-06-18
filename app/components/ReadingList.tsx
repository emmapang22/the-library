import { removeBook } from "../actions/bookActions";
import { BookCard } from "./bookCard/BookCard";
import { Book } from "../models/Book";

type ReadingListProps = {
  books: Book[];
};

export const ReadingList = ({ books }: ReadingListProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {books.map((b) => (
        <BookCard
          key={b.key}
          b={b}
          buttonText="Remove book"
          buttonFunction={removeBook}
          isReadingList={true}
        />
      ))}
    </div>
  );
};
