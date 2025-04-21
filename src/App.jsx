import React, { useState } from "react";
import ProductList from "./ProductList.jsx";
import "./App.css";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      description: "High-quality sound and noise cancellation.",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      description: "Track your fitness and receive notifications.",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 45.5,
      description: "Portable speaker with excellent bass.",
    },
    {
      id: 4,
      name: "Wireless Charger",
      price: 25.0,
      description: "Fast charging for your devices."
    }
  ]);

  return (
    <div className="App" style={{ textAlign: "center"}}>  
      <h1>🛒 Product Catalog</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
