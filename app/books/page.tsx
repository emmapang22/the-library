import { Suspense } from "react";
import { BooksResult } from "../components/BooksResult";
import { SearchBooks } from "../components/SearchBooks";
import { searchBooks } from "../lib/searchBooks";
import { OpenLibraryResponse } from "../models/OpenLibraryResponse";
import { Pagination } from "../components/pagination/Pagination";

type BooksProps = {
  searchParams: Promise<{ q: string; page?: string }>;
};

export default async function Books({ searchParams }: BooksProps) {
  const { q, page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;

  const result = q
    ? await searchBooks(q, page)
    : ({
        numFound: 0,
        start: 0,
        q: "",
        docs: [],
      } satisfies OpenLibraryResponse);

  console.log(result);

  return (
    <div className="w-full flex flex-col items-center max-w-125 gap-4">
      <SearchBooks />
      {q && (
        <Suspense fallback={<>Loading books...</>}>
          <BooksResult query={q} books={result.docs} />
          <Pagination numberOfBooks={result.numFound} q={q} page={page} />
        </Suspense>
      )}
    </div>
  );
}
