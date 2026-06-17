import { Pagination } from "../components/pagination/Pagination";
import { ReadingList } from "../components/ReadingList";
import connectDB from "../lib/db";
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

  await connectDB();

  const savedBooks = await BookModel.find()
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  const books = JSON.parse(JSON.stringify(savedBooks));
  const totalBooks = await BookModel.countDocuments();

  return (
    <div className="w-full flex flex-col items-center max-w-125 gap-4">
      <ReadingList books={books} isReadingList={true} />
      <Pagination numberOfBooks={totalBooks} page={page} isReadingList={true} />
    </div>
  );
}
