const mongoose = require("mongoose");
const List = require("./list.model");
const Category = require("./category.model");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxLength: 25,
      required: true,
      unique: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
      min: 1,
      required: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

itemSchema.pre("save", async function (next) {
  const categoryId = this.category;
  const category = await Category.findById(categoryId);

  if (!category) {
    throw new Error("Invalid category!");
  }

  next();
});

itemSchema.pre("remove", async function (next) {
  const lists = await List.updateMany(
    { items: this._id },
    { $pull: { items: this._id } }
  );
  next();
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
