import Link from "next/link";

export const Header = () => {
  return (
    <header className="font-sans flex justify-center items-center w-full sticky top-0 z-40 pt-4 px-4">
      <div className="flex justify-between items-center bg-primary text-white dark:bg-primary-lighter w-full lg:w-9/12 px-6 lg:px-8 py-4 rounded-xl">
        <h2 className="text-xl font-bold">
          <Link href={"/"}>BookCollection</Link>
        </h2>

        <nav>
          <ul className="flex gap-6 font-medium">
            <li>
              <Link href={"/books"}>Search books</Link>
            </li>
            <li>
              <Link href={"/reading-list"}>Reading List</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
