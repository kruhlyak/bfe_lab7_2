import React from "react";

function GoodsCard(props) {
  return (
    <div className="goods-card" style={styles.card}>
      <img src={props.image} alt={props.name} style={styles.image} />
      <h3>{props.name}</h3>
      <p>Cost: {props.price} грн</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    margin: "10px",
    width: "150px",
  },
  image: {
    width: "100px",
    height: "100px",
    marginBottom: "10px",
  },
};

export default GoodsCard;
