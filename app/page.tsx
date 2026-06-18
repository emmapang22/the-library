import { BookSearch, FolderBookmark } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center gap-4 w-full md:px-4">
      <h1>Welcome to BookCollection!</h1>
      <p>Search books from OpenLibrary and build your own reading list</p>

      <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full mt-8">
        <Link
          href={"/books"}
          className="bg-primary dark:bg-primary-lighter hover:bg-secondary-darker text-white hover:text-black w-full md:w-auto flex items-center justify-center p-8 rounded-xl"
        >
          <div className="flex justify-center items-center gap-4">
            <BookSearch size={30} />
            <h3>Search books</h3>
          </div>
        </Link>

        <Link
          href={"/reading-list"}
          className="bg-primary dark:bg-primary-lighter hover:bg-secondary-darker text-white hover:text-black w-full md:w-auto flex items-center justify-center p-8 rounded-xl"
        >
          <div className="flex justify-center items-center gap-4">
            <FolderBookmark size={30} />
            <h3>Reading list</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}
