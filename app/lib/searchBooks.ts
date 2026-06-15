import { OpenLibraryResponse } from "../models/OpenLibraryResponse";

export const searchBooks = async (q: string, page: number) => {
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${q}&page=${page}&limit=10`,
  );
  const data: OpenLibraryResponse = await response.json();

  return data;
};
