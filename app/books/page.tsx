import { Suspense } from "react";
import { BooksResult } from "../components/BooksResult";
import { SearchBooks } from "../components/SearchBooks";

type BooksProps = {
  searchParams: Promise<{ q: string }>;
};

export default async function Books({ searchParams }: BooksProps) {
  const { q } = await searchParams;

  return (
    <div className="w-full flex flex-col items-center max-w-125 gap-4">
      <SearchBooks />

      <Suspense fallback={<>Loading books...</>}>
        <BooksResult query={q} />
      </Suspense>
    </div>
  );
}
