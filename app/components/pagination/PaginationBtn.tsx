import Link from "next/link";

type PaginationBtnProps = {
  page: number;
  q: string;
  currentPage?: number;
};

export const PaginationBtn = ({ page, q, currentPage }: PaginationBtnProps) => {
  const className =
    currentPage === page
      ? "p-3 py-1 rounded hover:cursor-pointer bg-secondary text-black"
      : "p-3 py-1 rounded hover:cursor-pointer hover:bg-secondary hover:text-black";

  const title = currentPage === page ? "Current page" : `Page ${page}`;

  return (
    <button
      className={className}
      aria-label={title}
      title={title}
      type="button"
    >
      <Link
        href={`/books?q=${q}&page=${page}&limit=10`}
        className="font-medium"
      >
        {page}
      </Link>
    </button>
  );
};
