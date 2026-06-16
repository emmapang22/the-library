import Link from "next/link";

type PaginationBtnProps = {
  page: number;
  q: string;
  currentPage?: number;
};

export const PageBtn = ({ page, q, currentPage }: PaginationBtnProps) => {
  const className =
    currentPage === page
      ? "p-4 py-2 text-sm rounded hover:cursor-pointer font-medium bg-secondary text-black"
      : "p-4 py-2 text-sm rounded hover:cursor-pointer font-medium hover:bg-secondary hover:text-black";

  const title = currentPage === page ? "Current page" : `Page ${page}`;

  return (
    <Link
      aria-label={title}
      title={title}
      className={className}
      href={`/books?q=${q}&page=${page}&limit=10`}
    >
      {page}
    </Link>
  );
};
