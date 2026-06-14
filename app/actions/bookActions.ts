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
