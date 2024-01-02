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
  //cart 
  const [cart, setCart] = useState([]);

  console.log("cart", cart)

  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const filteredItems = products.filter((product) => {
    return product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  }
  );


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
        ({ category, company, title }) =>
          category === selected ||
          company === selected ||
          title === selected
      );
    }


    return filteredProducts.map(
      ({ id, img, title, star, reviews, prevPrice, newPrice }) => (
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
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);




  return (
    <>
      <Sidebar handleChange={handleChange} cart={cart} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Category handleChange={handleChange} />
      <Products result={result} />
    </>
  );
}

export default App;