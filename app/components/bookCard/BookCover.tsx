import Image from "next/image";

type BookCoverProps = {
  cover_edition_key?: string;
  title: string;
  author_name?: string[];
};

export const BookCover = ({
  cover_edition_key,
  title,
  author_name,
}: BookCoverProps) => {
  const imageUrl = !cover_edition_key
    ? "https://placehold.net/400x600.png"
    : `https://covers.openlibrary.org/b/olid/${cover_edition_key}.jpg`;

  return (
    <div className="flex w-1/3 md:w-full max-w-28 relative aspect-2/3">
      <Image
        src={imageUrl}
        alt={`Book cover of "${title}" ${author_name ? ` by ${author_name}` : ""}`}
        fill={true}
        className="object-contain object-top"
        loading="eager"
        sizes="112px"
      />
    </div>
  );
};
