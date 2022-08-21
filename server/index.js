const express = require("express");

const app = express();

const router = express.Router();

const getProducts = () => {
  return new Promise((resolve) => {
    const products = [
      {
        id: 1,
        name: "Dress",
        price: 5000,
      },
      {
        id: 2,
        name: "Shoes",
        price: 4000,
      },
      {
        id: 3,
        name: "Shirt",
        price: 6000,
      },
    ];
    setTimeout(() => {
      resolve(products);
    }, 250);
  });
};

router.get("/api/comments", async (req, res) => {
  const comments = [
    {
      id: 1,
      content: "Hello 1",
    },
    {
      id: 2,
      content: "Hello 2",
    },
    {
      id: 3,
      content: "Hello 3",
    },
  ];

  setTimeout(() => {
    res.json({
      data: comments,
    });
  }, 3000);
});

router.get("/api/products", async (req, res) => {
  const products = await getProducts();
  res.json({
    data: products,
  });
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use(router);

app.listen(9090, () => {
  console.log("Server is running");
});
