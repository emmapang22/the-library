import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white dark:bg-black dark:text-white text-black font-sans flex justify-between items-center w-full px-4 lg:px-8 py-4 sticky top-0 z-40">
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
    </header>
  );
};
