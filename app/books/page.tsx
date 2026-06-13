import { Suspense } from "react";
import { BooksResult } from "../components/BooksResult";
import { SearchBooks } from "../components/SearchBooks";

type BooksProps = {
  searchParams: Promise<{ q: string }>;
};

export default async function Books({ searchParams }: BooksProps) {
  const { q } = await searchParams;

  return (
    <>
      <SearchBooks />

      <Suspense fallback={<>Loading books...</>}>
        {q && <h1>Search results for '{q}'</h1>}
        <BooksResult query={q} />
      </Suspense>
    </>
  );
}
