import { Book } from "../../models/Book";
import { BookCover } from "./BookCover";
import { BookCardBtn } from "./BookCardBtn";

type BookCardProps = {
  b: Book;
  buttonText: string;
  buttonFunction: (book: Book) => Promise<void>;
};

export const BookCard = ({ b, buttonText, buttonFunction }: BookCardProps) => {
  return (
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
        <div>
          {b.series_name && (
            <p className="font-bold text-sm">
              {b.series_name.join(", ")}{" "}
              {!b.series_position ||
              b.series_position[0] === "" ||
              b.series_position.length === 0 ? (
                ""
              ) : (
                <>#{b.series_position?.join(", ")}</>
              )}
            </p>
          )}

          <h3 className="font-bold text-[16px] md:text-xl">{b.title}</h3>

          {b.author_name?.length === 2 ? (
            <p className="text-sm">By {b.author_name?.join(" and ")}</p>
          ) : (
            <p className="text-sm">
              By {b.author_name?.join(", ") || "Unknown author"}
            </p>
          )}

          {b.first_publish_year ? (
            <p className="text-sm">Published: {b.first_publish_year}</p>
          ) : (
            <p className="text-sm">Published: Unknown</p>
          )}
        </div>

        <BookCardBtn
          buttonText={buttonText}
          buttonFunction={buttonFunction}
          b={b}
        />
      </div>
    </div>
  );
};
