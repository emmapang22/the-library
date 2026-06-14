import { addToReadingList } from "../actions/bookActions";
import { OpenLibraryResponse } from "../models/OpenLibraryResponse";
import { BookCard } from "./bookCard/BookCard";

type BooksResultProps = {
  query: string;
};

export const BooksResult = async ({ query }: BooksResultProps) => {
  if (!query) {
    return null;
  }

  const response = await fetch(
    `https://openlibrary.org/search.json?q=${query}&limit=10`,
  );
  const data: OpenLibraryResponse = await response.json();

  console.log(data);

  if (!data.docs || data.docs.length === 0) {
    return (
      <h1 className="text-center h5">
        Could not find any books matching your search: "{query}"
      </h1>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full mt-4">
      <h1 className="h4 text-center">Search results for "{query}"</h1>

      {data.docs.map((b) => (
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
