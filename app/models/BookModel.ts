import { model, models, Schema } from "mongoose";

export const bookSchema = new Schema(
  {
    key: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    author_name: [String],
    cover_edition_key: String,
    first_publish_year: Number,
    series_name: [String],
    series_position: [String],
  },
  { timestamps: true },
);

export const BookModel = models.book || model("book", bookSchema);
