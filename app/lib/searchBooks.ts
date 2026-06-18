import { OpenLibraryResponse } from "../models/OpenLibraryResponse";

export const searchBooks = async (q: string, page: number, limit: number) => {
  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${q}&page=${page}&limit=${limit}`,
    );

    if (!response.ok) throw new Error(`Status: ${response.status}`);

    const data: OpenLibraryResponse = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Could not get books from OpenLibrary: ${error}`);
  }
};
