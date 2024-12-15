import React from "react";
import GoodsCard from "./components/GoodsCard";

function App() {
  const products = [
    {
      id: 1,
      name: "Яблуко",
      price: 15,
      image: `${process.env.PUBLIC_URL}/images/apple.png`,
    },
    {
      id: 2,
      name: "Груша",
      price: 20,
      image: `${process.env.PUBLIC_URL}/images/pear.png`,
    },
    {
      id: 3,
      name: "Виноград",
      price: 25,
      image: `${process.env.PUBLIC_URL}/images/grape.png`,
    },
    {
      id: 4,
      name: "Персик",
      price: 18,
      image: `${process.env.PUBLIC_URL}/images/peach.png`,
    },
    {
      id: 5,
      name: "Банан",
      price: 22,
      image: `${process.env.PUBLIC_URL}/images/banana.png`,
    },
    {
      id: 6,
      name: "Апельсин",
      price: 24,
      image: `${process.env.PUBLIC_URL}/images/orange.png`,
    },
  ];

  return (
    <div className="product-gallery">
      {products.map((product) => (
        <GoodsCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default App;
