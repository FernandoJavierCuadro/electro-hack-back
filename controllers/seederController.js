const faker = require("faker");
const db = require("../db");
const {
  mongoose,
  User,
  Category,
  Product,
  Brand,
  Order,
} = require("../models");

module.exports = {
  seeder: async (req, res) => {
    const connection = mongoose.connection;
    await connection.dropDatabase();
    const categoryName = ["refrigerators", "tvs", "kitchen"];
    const brandArr = [];
    for (let i = 0; i < db.brandNames.length; i++) {
      const brand = new Brand({
        name: db.brandNames[i].name,
        logo: db.brandNames[i].logo,
      });
      await brand.save();
      brandArr.push(brand);
    }

    for (let j = 0; j < db.products.length; j++) {
      const category = new Category({
        name: categoryName[j],
        productsList: [],
      });
      for (let k = 0; k < db.products[j].length; k++) {
        const foundBrand = brandArr.find(
          (brand) => brand.name === db.products[j][k].brandName
        );

        const product = new Product({
          name: db.products[j][k].name,
          description: db.products[j][k].description,
          image: db.products[j][k].image,
          price: db.products[j][k].price,
          stock: db.products[j][k].stock,
          featured: db.products[j][k].featured,
          category: category._id,
          brand: foundBrand,
        });
        await product.save();
        category.productsList.push(product);
      }
      await category.save();
    }

    for (let l = 0; l < db.users.length; l++) {
      const user = new User({
        name: db.users[l].name,
        lastname: db.users[l].lastname,
        email: db.users[l].email,
        address: db.users[l].address,
        telephone: db.users[l].telephone,
        password: db.users[l].password,
        admin: db.users[l].admin,
        orderList: db.users[l].orderList,
        tokens: db.users[l].tokens,
      });

      for (m = 0; m < 20; m++) {
        const order = new Order({
          buyer: user,
          products: [],
          state: "paid",
          total: Math.floor(Math.random() * 20000 + 1),
        });
        await order.save();
      }
      await user.save();
    }

    res.json("new database created");
  },
};
