import React from "react";
import GoodsCard from "./GoodsCard";

function GoodsGallery() {
  const goods = [
    { id: 1, name: "Apple", price: 15, image: "apple.png" },
    { id: 2, name: "Pear", price: 20, image: "pear.png" },
    { id: 3, name: "Grape", price: 25, image: "grape.png" },
    { id: 4, name: "Peach", price: 18, image: "peach.png" },
    { id: 5, name: "Banana", price: 12, image: "banana.png" },
    { id: 6, name: "Orange", price: 14, image: "orange.png" },
  ];

  return (
    <div style={styles.gallery}>
      {goods.map((item) => (
        <GoodsCard
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

const styles = {
  gallery: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
};

export default GoodsGallery;
