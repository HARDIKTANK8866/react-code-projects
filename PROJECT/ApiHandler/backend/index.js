import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 699.99,
      images: [
        "https://example.com/images/smartphone1.jpg",
        "https://example.com/images/smartphone2.jpg",
        "https://example.com/images/smartphone3.jpg",
      ],
    },
    {
      id: 2,
      name: "Laptop",
      price: 1299.99,
      images: [
        "https://example.com/images/laptop1.jpg",
        "https://example.com/images/laptop2.jpg",
        "https://example.com/images/laptop3.jpg",
      ],
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: 199.99,
      images: [
        "https://example.com/images/earbuds1.jpg",
        "https://example.com/images/earbuds2.jpg",
        "https://example.com/images/earbuds3.jpg",
      ],
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 299.99,
      images: [
        "https://example.com/images/smartwatch1.jpg",
        "https://example.com/images/smartwatch2.jpg",
        "https://example.com/images/smartwatch3.jpg",
      ],
    },
    {
      id: 5,
      name: "Tablet",
      price: 499.99,
      images: [
        "https://example.com/images/tablet1.jpg",
        "https://example.com/images/tablet2.jpg",
        "https://example.com/images/tablet3.jpg",
      ],
    },
  ];

  if (req.query.search) {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(req.query.search.toLowerCase())
    );
    res.send(filteredProducts);
    return;
  }
  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);
