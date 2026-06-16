import { PageBtn } from "./PageBtn";

type PaginationBtnContainerProps = {
  page: number;
  q: string;
  numberOfPages: number;
};

export const PageNavigation = ({
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
          <PageBtn key={i + 1} page={i + 1} q={q} currentPage={page} />
        ))}
      </>
    );
  }

  if (page < 5) {
    return (
      <>
        {Array.from({ length: 5 }).map((_, i) => (
          <PageBtn key={i} page={i + 1} q={q} currentPage={page} />
        ))}
        <span aria-hidden="true">...</span>
        <PageBtn page={numberOfPages} q={q} />
      </>
    );
  }

  if (page > numberOfPages - 4 || page === numberOfPages) {
    return (
      <>
        <PageBtn page={1} q={q} />
        <span aria-hidden="true">...</span>

        {Array.from({ length: 5 }).map((_, i) => (
          <PageBtn
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
      <PageBtn page={1} q={q} />
      <span aria-hidden="true">...</span>
      <PageBtn page={page - 2} q={q} />
      <PageBtn page={page - 1} q={q} />
      <PageBtn page={page} q={q} currentPage={page} />
      <PageBtn page={page + 1} q={q} />
      <PageBtn page={page + 2} q={q} />
      <span aria-hidden="true">...</span>
      <PageBtn page={numberOfPages} q={q} />
    </>
  );
};
