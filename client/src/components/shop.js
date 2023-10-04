import React, { useEffect, useState } from 'react';

function Shop() {
  const [products, setProducts] = useState([]);

  // Function to display products based on the category
  function displayProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    return (
      <div id={`${category}-products`}>
        {filteredProducts.map(product => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  }

  useEffect(() => {
    // Simulating fetching products from an API or database
    const fetchedProducts = [
      {
        id: 1,
        category: "dogs",
        name: "Dog Food",
        price: 20.99,
      },
      {
        id: 2,
        category: "dogs",
        name: "Dog Collar",
        price: 10.99,
      },
      {
        id: 3,
        category: "cats",
        name: "Cat Toy",
        price: 5.99,
      },
      {
        id: 4,
        category: "cats",
        name: "Cat Food",
        price: 15.99,
      },
    ];

    setProducts(fetchedProducts);
  }, []);

  return (
    <div>
      <h2>Shop here</h2>
      <nav>
        <a href="#dogs">Dogs</a>
        <a href="#cats">Cats</a>
      </nav>
      {displayProducts('dogs')} {/* Initial display of dog products */}
    </div>
  );
}

export default Shop;
