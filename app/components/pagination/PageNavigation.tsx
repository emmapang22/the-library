import { PageBtn } from "./PageBtn";

type PaginationBtnContainerProps = {
  page: number;
  q?: string;
  numberOfPages: number;
  isReadingList?: boolean;
  limit?: number;
};

export const PageNavigation = ({
  page,
  q,
  numberOfPages,
  isReadingList,
  limit,
}: PaginationBtnContainerProps) => {
  if (numberOfPages === 1 || !numberOfPages) {
    return null;
  }

  if (numberOfPages > 1 && numberOfPages < 7) {
    return (
      <>
        {Array.from({ length: numberOfPages }).map((_, i) => (
          <PageBtn
            key={i + 1}
            page={i + 1}
            q={q}
            currentPage={page}
            isReadingList={isReadingList}
            limit={limit}
          />
        ))}
      </>
    );
  }

  if (page < 5) {
    return (
      <>
        {Array.from({ length: 5 }).map((_, i) => (
          <PageBtn
            key={i + 1}
            page={i + 1}
            q={q}
            currentPage={page}
            isReadingList={isReadingList}
            limit={limit}
          />
        ))}
        <span aria-hidden="true">...</span>
        <PageBtn
          page={numberOfPages}
          q={q}
          isReadingList={isReadingList}
          limit={limit}
        />
      </>
    );
  }

  if (page > numberOfPages - 4 || page === numberOfPages) {
    return (
      <>
        <PageBtn page={1} q={q} isReadingList={isReadingList} limit={limit} />
        <span aria-hidden="true">...</span>

        {Array.from({ length: 5 }).map((_, i) => (
          <PageBtn
            key={i + 1}
            page={numberOfPages - 4 + i}
            q={q}
            currentPage={page}
            isReadingList={isReadingList}
            limit={limit}
          />
        ))}
      </>
    );
  }

  return (
    <>
      <PageBtn page={1} q={q} isReadingList={isReadingList} limit={limit} />
      <span aria-hidden="true">...</span>
      <PageBtn
        page={page - 2}
        q={q}
        isReadingList={isReadingList}
        limit={limit}
      />
      <PageBtn
        page={page - 1}
        q={q}
        isReadingList={isReadingList}
        limit={limit}
      />
      <PageBtn
        page={page}
        q={q}
        currentPage={page}
        isReadingList={isReadingList}
        limit={limit}
      />
      <PageBtn
        page={page + 1}
        q={q}
        isReadingList={isReadingList}
        limit={limit}
      />
      <PageBtn
        page={page + 2}
        q={q}
        isReadingList={isReadingList}
        limit={limit}
      />
      <span aria-hidden="true">...</span>
      <PageBtn
        page={numberOfPages}
        q={q}
        isReadingList={isReadingList}
        limit={limit}
      />
    </>
  );
};
