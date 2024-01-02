import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";
import Category from "./Category/Category";

function App() {
  const [cart, setCart] = useState([]);
  const handleQuantityChange = (item, action) => {
    setCart((items) => {
      const index = items.findIndex((cartItem) => cartItem.id === item.id);
      if (index !== -1) {
        const updatedCart = [...items];
        if (action === "increase") {
          updatedCart[index] = { ...updatedCart[index], quantity: (updatedCart[index].quantity || 1) + 1 };
        } else if (action === "decrease" && updatedCart[index].quantity > 1) {
          updatedCart[index] = { ...updatedCart[index], quantity: updatedCart[index].quantity - 1 };
        }
        return updatedCart;
      }
      return items;
    });
  };
  const totalPrice = cart.reduce((total, currentItem) => total + parseInt(currentItem.newPrice) * parseInt(currentItem.quantity), 0);
  const handleRemoveFromCart = (removeItem) => {
    setCart((items) => items.filter((cartItem) => cartItem.id !== removeItem.id));
  };

  
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const filteredItems = products.filter((product) => {
    return product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;
    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, company, title }) => category === selected || company === selected || title === selected
      );
    }

    return filteredProducts.map(({ id, img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        cart={cart}
        setCart={setCart}
        key={id}
        id={id}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <div className="flex gap-1">
        <div className="w-1/3">
          <Sidebar
            handleQuantityChange={handleQuantityChange}
            cart={cart}
            totalPrice={totalPrice}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        </div>
        <div className="w-2/3 p-4">
          <Navigation query={query} handleInputChange={handleInputChange} />
          <Recommended handleClick={handleClick} />
          <Category handleChange={handleChange} />
          <Products result={result} />
        </div>
      </div>
    </>
  );
}

export default App;
