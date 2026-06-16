import { removeBook } from "../actions/bookActions";
import { BookCard } from "./bookCard/BookCard";
import { Book } from "../models/Book";

type ReadingListProps = {
  books: Book[];
};

export const ReadingList = async ({ books }: ReadingListProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="h1 text-center mb-6">My reading list</h1>

      {books.map((b) => (
        <BookCard
          key={b.key}
          b={b}
          buttonText="Remove book"
          buttonFunction={removeBook}
        />
      ))}
    </div>
  );
};
