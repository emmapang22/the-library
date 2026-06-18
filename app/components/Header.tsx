import Link from "next/link";

export const Header = () => {
  return (
    <header className="font-sans flex justify-center items-center w-full sticky top-0 z-40 p-0 md:pt-4 md:px-4">
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center bg-primary text-white dark:bg-primary-lighter w-full lg:w-9/12 px-6 lg:px-8 py-4 md:rounded-xl shadow-xl md:shadow-2xl/30 drop-shadow-lg md:drop-shadow-xl">
        <h2 className="text-xl font-bold hover:text-secondary-lighter">
          <Link href={"/"}>BookCollection</Link>
        </h2>

        <nav className="">
          <ul className="flex gap-6 font-medium text-center">
            <li className="hover:text-secondary-lighter">
              <Link href={"/books"}>Search books</Link>
            </li>
            <li className="hover:text-secondary-lighter">
              <Link href={"/reading-list"}>Reading List</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
