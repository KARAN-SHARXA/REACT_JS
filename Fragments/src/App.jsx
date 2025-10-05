import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/fooditems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
