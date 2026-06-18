import { Button, ButtonType } from "./Button";

export const SearchBooks = () => {
  return (
    <form
      method="GET"
      action={"/books"}
      className="bg-primary-lighter text-black flex flex-col md:flex-row gap-4 p-5 justify-center md:items-center w-full md:w-11/12 lg:w-full rounded-xl"
    >
      <label htmlFor="searchBooks" className="sr-only">
        Search books:
      </label>
      <input
        type="text"
        name="q"
        id="searchBooks"
        className="px-3 py-2 rounded w-full bg-white"
        placeholder="Search books..."
      />

      <label htmlFor="limit" className="text-white">
        Books per page
      </label>
      <select name="limit" id="limit" className="bg-white rounded p-2">
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>

      <Button buttonType={ButtonType.primary}>Search</Button>
    </form>
  );
};
