import { Book } from "./Book";

export type OpenLibraryResponse = {
  numFound: number;
  start: number;
  q: string;
  docs: Book[];
};
