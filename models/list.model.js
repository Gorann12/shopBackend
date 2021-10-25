const mongoose = require("mongoose");
const Shop = require("./shop.model");

const listSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxLength: 35,
      required: true,
      unique: true,
    },
    items: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Item",
      },
    ],
    shop: {
      type: mongoose.Types.ObjectId,
      ref: "Shop",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

listSchema.pre("save", async function (next) {
  const shopId = this.shop;
  const shop = await Shop.findById(shopId);

  if (!shop) {
    throw new Error("Shop not found");
  }

  next();
});

const List = mongoose.model("List", listSchema);
module.exports = List;
