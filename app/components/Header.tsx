import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white text-black flex justify-between items-center px-4 lg:px-8 py-4 sticky top-0">
      <h2>
        <Link href={"/"}>BookCollection</Link>
      </h2>

      <nav>
        <ul className="flex gap-6">
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
