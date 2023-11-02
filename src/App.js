import React from "react";
import "./App.css"; // Add your CSS styles
import ProductList from "./ProductList";


const App = () => {
  return (
    <div className="App">
      <h1 style={{color: "black"}}>DevTown!</h1>

    

      <ProductList />
    </div>
  );
};

export default App;
