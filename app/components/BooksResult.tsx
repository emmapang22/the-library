import { OpenLibraryResponse } from "../models/OpenLibraryResponse";
import { BookCover } from "./BookCover";
import { WantToReadBtn } from "./WantToReadBtn";

type BooksResultProps = {
  query: string;
};

export const BooksResult = async ({ query }: BooksResultProps) => {
  if (!query) {
    return null;
  }

  const response = await fetch(
    `https://openlibrary.org/search.json?q=${query}&limit=10`,
  );
  const data: OpenLibraryResponse = await response.json();

  console.log(data);

  if (!data.docs || data.docs.length === 0) {
    return (
      <h1 className="text-center h5">
        Could not find any books matching your search: "{query}"
      </h1>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full mt-4">
      <h1 className="h4 text-center">Search results for "{query}"</h1>

      {data.docs.map((b) => (
        <div
          key={b.key}
          className="flex p-4 bg-[#f7f7f7] border-2 border-[#b4b4b4] dark:border-[#6e6e6e] rounded gap-4 dark:bg-[#242424]"
        >
          <BookCover
            cover_edition_key={b.cover_edition_key}
            title={b.title}
            author_name={b.author_name}
          />

          <div className="flex flex-2 flex-col w-full justify-between">
            <div className="flex flex-col">
              {b.series_name && (
                <p className="font-bold text-sm">
                  {b.series_name.join(", ")}{" "}
                  {!b.series_position || b.series_position[0] === "" ? (
                    ""
                  ) : (
                    <>#{b.series_position?.join(", ")}</>
                  )}
                </p>
              )}

              <h3 className="font-bold text-[16px] md:text-xl">{b.title}</h3>

              <div className="flex flex-col gap-1">
                <p className="text-sm">
                  By {b.author_name?.join(", ") || "Unknown author"}
                </p>

                {b.first_publish_year ? (
                  <p className="text-sm">Published: {b.first_publish_year}</p>
                ) : (
                  <p className="text-sm">Published: Unknown</p>
                )}
              </div>
            </div>

            <WantToReadBtn book={b} />
          </div>
        </div>
      ))}
    </div>
  );
};
