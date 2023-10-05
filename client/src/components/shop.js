import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

function Shop() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('dogs'); // Initial category

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
      {
        id: 5,
        category: "dogs",
        name: "shirts",
        price: 10.55,
      },
      // { 
      //   id: 6,
      //   category: "cats",
      //   name: "sweaters",
      //   price: "9.45",
      // },
      // {
      //   id: 7,
      //   category: "dogs",
      //   name: "Bioline Flea Spray",
      //   price: "8.59",
      //  },
    ];

    setProducts(fetchedProducts);
  }, []);

  return (
    <div>
        <Navbar />
      <h2>Shop here</h2>
      <nav>
        <button onClick={() => setActiveCategory('dogs')}>Dogs</button>
        <button onClick={() => setActiveCategory('cats')}>Cats</button>
      </nav>
      {displayProducts(activeCategory)}
    </div>
  );
}

export default Shop;