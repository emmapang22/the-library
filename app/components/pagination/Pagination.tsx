import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageNavigation } from "./PageNavigation";
import { ArrowBtn } from "./ArrowBtn";

type PaginationProps = {
  numberOfBooks: number;
  q?: string;
  page: number;
  isReadingList?: boolean;
  limit?: number;
};

export const Pagination = ({
  numberOfBooks,
  q,
  page,
  isReadingList,
  limit,
}: PaginationProps) => {
  const numberOfPages = Math.ceil(Number(numberOfBooks) / 10);

  const previousPageLink = isReadingList
    ? `/reading-list?page=${page - 1}&limit=10`
    : `/books?q=${q}&page=${page - 1}&limit=${limit}`;

  const nextPageLink = isReadingList
    ? `/reading-list?page=${page + 1}&limit=10`
    : `/books?q=${q}&page=${page + 1}&limit=${limit}`;

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-4 flex-wrap lg:flex-nowrap"
    >
      {page > 1 && (
        <ArrowBtn
          title="Previous page"
          href={previousPageLink}
          icon={<ArrowLeft className="size-4" strokeWidth={3} />}
        />
      )}

      <PageNavigation
        page={page}
        q={q}
        numberOfPages={numberOfPages}
        isReadingList={isReadingList}
        limit={limit}
      />

      {page < numberOfPages && (
        <ArrowBtn
          title="Next page"
          href={nextPageLink}
          icon={<ArrowRight className="size-4" strokeWidth={3} />}
        />
      )}
    </nav>
  );
};
