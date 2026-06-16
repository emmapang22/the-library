import { PaginationBtn } from "./PaginationBtn";

type PaginationBtnContainerProps = {
  page: number;
  q: string;
  numberOfPages: number;
};

export const PaginationButtonsContainer = ({
  page,
  q,
  numberOfPages,
}: PaginationBtnContainerProps) => {
  if (numberOfPages === 1 || !numberOfPages) {
    return null;
  }

  if (numberOfPages > 1 && numberOfPages < 7) {
    return (
      <>
        {Array.from({ length: numberOfPages }).map((_, i) => (
          <PaginationBtn key={i + 1} page={i + 1} q={q} currentPage={page} />
        ))}
      </>
    );
  }

  if (page < 5) {
    return (
      <>
        {Array.from({ length: 5 }).map((_, i) => (
          <PaginationBtn key={i} page={i + 1} q={q} currentPage={page} />
        ))}
        <span aria-hidden="true">...</span>
        <PaginationBtn page={numberOfPages} q={q} />
      </>
    );
  }

  if (page > numberOfPages - 4 || page === numberOfPages) {
    return (
      <>
        <PaginationBtn page={1} q={q} />
        <span aria-hidden="true">...</span>

        {Array.from({ length: 5 }).map((_, i) => (
          <PaginationBtn
            key={i}
            page={numberOfPages - 4 + i}
            q={q}
            currentPage={page}
          />
        ))}
      </>
    );
  }

  return (
    <>
      <PaginationBtn page={1} q={q} />
      <span aria-hidden="true">...</span>
      <PaginationBtn page={page - 2} q={q} />
      <PaginationBtn page={page - 1} q={q} />
      <PaginationBtn page={page} q={q} currentPage={page} />
      <PaginationBtn page={page + 1} q={q} />
      <PaginationBtn page={page + 2} q={q} />
      <span aria-hidden="true">...</span>
      <PaginationBtn page={numberOfPages} q={q} />
    </>
  );
};
