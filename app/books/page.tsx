import { Suspense } from "react";
import { BooksResult } from "../components/BooksResult";
import { SearchBooks } from "../components/SearchBooks";
import { searchBooks } from "../lib/searchBooks";
import { OpenLibraryResponse } from "../models/OpenLibraryResponse";
import { Pagination } from "../components/pagination/Pagination";

type BooksProps = {
  searchParams: Promise<{ q: string; page?: string; limit?: string }>;
};

export default async function Books({ searchParams }: BooksProps) {
  const { q, page: pageParam, limit: limitParam } = await searchParams;
  const page = Number(pageParam) || 1;
  const limit = Number(limitParam) || 10;

  let result: OpenLibraryResponse;
  let errorMessage = "";

  try {
    result = q
      ? await searchBooks(q, page, limit)
      : ({
          numFound: 0,
          start: 0,
          q: "",
          docs: [],
        } satisfies OpenLibraryResponse);
  } catch (error) {
    console.error("Error getting books:", error);
    errorMessage =
      "Failed to load books. Reload the page or enter another search term.";

    result = {
      numFound: 0,
      start: 0,
      q: "",
      docs: [],
    } satisfies OpenLibraryResponse;
  }

  console.log(result);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <SearchBooks />

      {errorMessage && (
        <div className="text-center">
          <p>{errorMessage}</p>
        </div>
      )}

      {q && !errorMessage && (
        <Suspense fallback={<>Loading books...</>}>
          <div className="w-full flex flex-col items-center max-w-125 gap-4">
            <BooksResult query={q} books={result.docs} />
            <Pagination
              numberOfBooks={result.numFound}
              q={q}
              page={page}
              limit={limit}
            />
          </div>
        </Suspense>
      )}
    </div>
  );
}
