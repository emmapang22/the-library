import { Button, ButtonType } from "./Button";

export const SearchBooks = () => {
  return (
    <form
      method="GET"
      action={"/books"}
      className="bg-blue-500 text-black flex flex-col md:flex-row gap-4 p-4 justify-center w-full rounded"
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

      <Button buttonType={ButtonType.primary}>Sök</Button>
    </form>
  );
};
