import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PaginationButtonsContainer } from "./PaginationButtonsContainer";

type PaginationProps = {
  numberOfBooks: number;
  q: string;
  page: number;
};

export const Pagination = ({ numberOfBooks, q, page }: PaginationProps) => {
  const numberOfPages = Math.ceil(Number(numberOfBooks) / 10);

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-4 flex-wrap lg:flex-nowrap"
    >
      {page > 1 && (
        <button
          className="bg-primary dark:bg-primary-lighter p-3 rounded-full hover:cursor-pointer hover:bg-secondary hover:text-black"
          aria-label="Previous page"
          title="Previous page"
          type="button"
        >
          <Link href={`/books?q=${q}&page=${page - 1}&limit=10`}>
            <ArrowLeft className="size-4" strokeWidth={3} />
          </Link>
        </button>
      )}

      <PaginationButtonsContainer
        page={page}
        q={q}
        numberOfPages={numberOfPages}
      />

      {page < numberOfPages && (
        <button
          className="bg-primary dark:bg-primary-lighter p-3 rounded-full hover:cursor-pointer hover:bg-secondary hover:text-black"
          aria-label="Next page"
          title="Next page"
          type="button"
        >
          <Link href={`/books?q=${q}&page=${page + 1}&limit=10`}>
            <ArrowRight className="size-4" strokeWidth={3} />
          </Link>
        </button>
      )}
    </nav>
  );
};
