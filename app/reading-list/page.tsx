import connectDB from "../lib/db";
import { Book } from "../models/Book";
import { BookModel } from "../models/BookModel";

export default async function ReadingList() {
  await connectDB();

  const savedBooks: Book[] = await BookModel.find();

  return (
    <div>
      {savedBooks.map((b) => (
        <div key={b.key}>{b.title}</div>
      ))}
    </div>
  );
}
