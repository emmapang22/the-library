import { addToReadingList } from "../actions/bookActions";
import { Book } from "../models/Book";
import { BookCard } from "./bookCard/BookCard";

type BooksResultProps = {
  query: string;
  books: Book[];
};

export const BooksResult = async ({ query, books }: BooksResultProps) => {
  if (!books || books.length === 0) {
    return (
      <h1 className="text-center h5">
        Could not find any books matching your search: "{query}"
      </h1>
    );
  }
  return (
    <div className="flex flex-col gap-4 w-full mt-4">
      <h1 className="h4 text-center">Search results for "{query}"</h1>

      {books.map((b) => (
        <BookCard
          key={b.key}
          b={b}
          buttonText="Want to read"
          buttonFunction={addToReadingList}
        />
      ))}
    </div>
  );
};
