import { InferSchemaType } from "mongoose";
import { Pagination } from "../components/pagination/Pagination";
import { ReadingList } from "../components/ReadingList";
import connectDB from "../lib/db";
import { Book } from "../models/Book";
import { BookModel, bookSchema } from "../models/BookModel";

type BookFromDb = InferSchemaType<typeof bookSchema>;

export const convertSavedBookToDto = (book: BookFromDb): Book => {
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

type ReadingListPageProps = {
  searchParams: Promise<{ page?: string; limit?: string }>;
};

export default async function ReadingListPage({
  searchParams,
}: ReadingListPageProps) {
  const { page: pageParam, limit: limitParam } = await searchParams;
  const page = Number(pageParam) || 1;
  const limit = Number(limitParam) || 10;

  await connectDB();

  const savedBooks = await BookModel.find();

  const books: Book[] = savedBooks.map((book) => convertSavedBookToDto(book));

  const totalBooks = books.length;
  const startIndex = (page - 1) * limit;
  const paginatedBooks = books.slice(startIndex, startIndex + limit);

  return (
    <div className="w-full flex flex-col items-center max-w-125 gap-4">
      <ReadingList books={paginatedBooks} />
      <Pagination numberOfBooks={totalBooks} page={page} isReadingList={true} />
    </div>
  );
}
