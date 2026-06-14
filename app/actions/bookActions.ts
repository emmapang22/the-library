"use server";

import { revalidatePath } from "next/cache";
import connectDB from "../lib/db";
import { Book } from "../models/Book";
import { BookModel } from "../models/BookModel";

export const addToReadingList = async (b: Book) => {
  await connectDB();

  await BookModel.create(b);

  revalidatePath("/reading-list");
};

export const removeBook = async (book: Book) => {
  await connectDB();

  const key = book.key;

  await BookModel.deleteOne({ key });

  revalidatePath("/reading-list");
};
