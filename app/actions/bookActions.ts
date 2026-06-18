"use server";

import { revalidatePath } from "next/cache";
import connectDB from "../lib/db";
import { Book } from "../models/Book";
import { BookModel } from "../models/BookModel";

export const addToReadingList = async (book: Book) => {
  try {
    await connectDB();

    const alreadyAdded = await BookModel.findOne({ key: book.key });

    if (alreadyAdded) {
      throw new Error("You already added this book to your reading list");
    }

    await BookModel.create(book);

    revalidatePath("/reading-list");
  } catch (error) {
    throw new Error(`Could not add book to database: ${error}`);
  }
};

export const removeBook = async (book: Book) => {
  try {
    await connectDB();
    await BookModel.deleteOne({ key: book.key });

    revalidatePath("/reading-list");
  } catch (error) {
    throw new Error(`Could not remove book successfully: ${error}`);
  }
};
