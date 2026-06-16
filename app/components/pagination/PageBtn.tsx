import Link from "next/link";

type PaginationBtnProps = {
  page: number;
  q?: string;
  currentPage?: number;
  isReadingList?: boolean;
};

export const PageBtn = ({
  page,
  q,
  currentPage,
  isReadingList,
}: PaginationBtnProps) => {
  const className =
    currentPage === page
      ? "p-4 py-2 text-sm rounded hover:cursor-pointer font-medium bg-secondary text-black"
      : "p-4 py-2 text-sm rounded hover:cursor-pointer font-medium hover:bg-secondary hover:text-black";

  const title = currentPage === page ? "Current page" : `Page ${page}`;

  const href = isReadingList
    ? `/reading-list?page=${page}&limit=10`
    : `/books?q=${q}&page=${page}&limit=10`;

  return (
    <Link aria-label={title} title={title} className={className} href={href}>
      {page}
    </Link>
  );
};
