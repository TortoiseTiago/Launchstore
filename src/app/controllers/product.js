const Category = require("../models/Category");
const Product = require("../models/Product");

const { age, date, formatPrice } = require("../../lib/utils");

module.exports = {
  create(req, res) {
    // Pegar as categorias
    Category.all()
      .then(function (results) {
        const categories = results.rows;
        return res.render("./products/create.njk", { categories });
      })
      .catch(function (err) {
        throw new Error(err);
      });
    // feito com .then().catch() apenas para entendimento da evolução do codigo
  },
  async post(req, res) {
    // Logica para salvar
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields");
      }
    }

    let results = await Product.create(req.body);
    const productId = results.rows[0].id;
    console.log(productId);

    return res.redirect(`/products/${productId}/edit`);
  },
  async edit(req, res) {
    let results = await Product.find(req.params.id);
    const products = results.rows[0];

    if (!products) return res.send("Product not found");

    products.old_price = formatPrice(products.old_price);
    products.price = formatPrice(products.price);

    results = await Category.all();
    const categories = results.rows;

    return res.render("./products/edit.njk", { products, categories });
  },
  async put(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields");
      }
    }

    req.body.price = req.body.price.replace(/\D/g, "");

    if (req.body.old_price != req.body.price) {
      const oldProduct = await Product.find(req.body.id);

      req.body.old_price = oldProduct.rows[0].price;
    }

    await Product.update(req.body);

    return res.redirect(`/products/${req.body.id}/edit`);
  },
  async delete(req, res) {
    await Product.delete(req.body.id);

    return res.redirect("/products/create");
  },
};
