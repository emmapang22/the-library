import { InferSchemaType } from "mongoose";
import { removeBook } from "../actions/bookActions";
import connectDB from "../lib/db";
import { BookModel, bookSchema } from "../models/BookModel";
import { BookCard } from "./bookCard/BookCard";
import { Book } from "../models/Book";

type BookFromDb = InferSchemaType<typeof bookSchema>;

const convertSavedBookToDto = (book: BookFromDb): Book => {
  return {
    key: book.key,
    title: book.title,
    author_name: book.author_name,
    cover_edition_key: book.cover_edition_key || undefined,
    first_publish_year: book.first_publish_year || undefined,
    series_name: book.series_name,
    series_position: book.series_position,
  } satisfies Book;
};

export const ReadingList = async () => {
  await connectDB();

  const savedBooks = await BookModel.find();

  const books: Book[] = savedBooks.map((book) => convertSavedBookToDto(book));

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
