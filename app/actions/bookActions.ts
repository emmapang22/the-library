"use server";

import { revalidatePath } from "next/cache";
import connectDB from "../lib/db";
import { Book } from "../models/Book";
import { BookModel } from "../models/BookModel";

export const addToReadingList = async (book: Book) => {
  await connectDB();

  const alreadyAdded = await BookModel.findOne({ key: book.key });

  if (alreadyAdded) {
    console.log("You already added this book to your reading list");
    return;
  }

  await BookModel.create(book);

  revalidatePath("/reading-list");
};

export const removeBook = async (book: Book) => {
  await connectDB();

  await BookModel.deleteOne({ key: book.key });

  revalidatePath("/reading-list");
};
