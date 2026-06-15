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
        <PaginationBtn page={1} q={q} currentPage={page} />
        <PaginationBtn page={2} q={q} currentPage={page} />
        <PaginationBtn page={3} q={q} currentPage={page} />
        <PaginationBtn page={4} q={q} currentPage={page} />
        <PaginationBtn page={5} q={q} currentPage={page} />
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
        <PaginationBtn page={numberOfPages - 4} q={q} currentPage={page} />
        <PaginationBtn page={numberOfPages - 3} q={q} currentPage={page} />
        <PaginationBtn page={numberOfPages - 2} q={q} currentPage={page} />
        <PaginationBtn page={numberOfPages - 1} q={q} currentPage={page} />
        <PaginationBtn page={numberOfPages} q={q} currentPage={page} />
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
