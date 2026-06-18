import { Pagination } from "../components/pagination/Pagination";
import { ReadingList } from "../components/ReadingList";
import connectDB from "../lib/db";
import { Book } from "../models/Book";
import { BookModel } from "../models/BookModel";

type ReadingListPageProps = {
  searchParams: Promise<{ page?: string; limit?: string }>;
};

export default async function ReadingListPage({
  searchParams,
}: ReadingListPageProps) {
  const { page: pageParam, limit: limitParam } = await searchParams;
  const page = Number(pageParam) || 1;
  const limit = Number(limitParam) || 10;

  let books: Book[] = [];
  let totalBooks = 0;
  let errorMessage = "";

  try {
    await connectDB();

    const savedBooks = await BookModel.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    books = JSON.parse(JSON.stringify(savedBooks));
    totalBooks = await BookModel.countDocuments();
  } catch (error) {
    console.error("Error fetching reading list:", error);
    errorMessage = "Failed to load books from the database.";
  }

  if (errorMessage) {
    return (
      <div className="text-center">
        <p>{errorMessage}</p>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="w-full flex flex-col items-center max-w-125 gap-4">
        <h1 className="h1 text-center mb-6">My reading list</h1>
        <p>You have not added any books to your reading list.</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center max-w-125 gap-4">
      <h1 className="h1 text-center mb-6">My reading list</h1>
      <ReadingList books={books} />
      <Pagination numberOfBooks={totalBooks} page={page} isReadingList={true} />
    </div>
  );
}
