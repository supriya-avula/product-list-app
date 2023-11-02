import React, { useState } from "react";
import Product from "./Product";
import productsData from "./products";

const ProductList = () => {
  const [products, setProducts] = useState(productsData);
  const [filterText, setFilterText] = useState("");
  const [sortType, setSortType] = useState("price");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);

  // Filter products based on category
  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase().includes(filterText.toLowerCase())
  );

  // Sort products based on selected sort type
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortType === "price") {
      return a.price - b.price;
    }
    return 0;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Function to handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(sortedProducts.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="product-list">
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by category"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value="price">Sort by Price</option>
        </select>
      </div>
      <div className="products">
        {currentProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage}>Previous</button>
        {Array.from(
          { length: Math.ceil(sortedProducts.length / productsPerPage) },
          (_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default ProductList;
