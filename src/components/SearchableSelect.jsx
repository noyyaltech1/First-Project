
import React, { useState } from "react";
import { useEffect } from "react";
function SearchableSelect() {
  const fruits = [
    "Apple",
    "Orange",
    "Banana",
    "Grapes",
    "Pineapple",
    "Mango",
    "Watermelon"
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");




const [filteredFruits, setFilteredFruits] = useState([]);

console.log("1. Component rendering");

useEffect(() => {
  console.log("2. useEffect executed. ");

  const result = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(search.toLowerCase())
  );

  console.log("3. Filtered fruits:", result);

  setFilteredFruits(result);
}, [search]);


// console.log("1. Component rendering. Search:", search);

// const filteredFruits = fruits.filter((fruit) =>
//   fruit.toLowerCase().includes(search.toLowerCase())
// );

console.log("2. Filtered fruits:", filteredFruits);


  const handleSelect = (fruit) => {
    setSelected(fruit);
    setSearch("");
    setIsOpen(false);
  };

  return (
    <div>
      <h3>Select a Fruit</h3>

      {/* Dropdown box */}
      <button onClick={() => setIsOpen(!isOpen)}>
        {selected || "Select a fruit"} ▼
      </button>

      {/* Search box INSIDE dropdown */}
      {isOpen && (
        <div>
          <input
            type="text"
            placeholder="Search fruits..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />

          {/* Filtered dropdown options */}
          {filteredFruits.length > 0 ? (
            filteredFruits.map((fruit) => (
              <div
                key={fruit}
                onClick={() => handleSelect(fruit)}
              >
                {fruit}
              </div>
            ))
          ) : (
            <p>No fruits found</p>
          )}
        </div>
      )}

      <p>Selected fruit: {selected}</p>
    </div>
  );
}

export default SearchableSelect;
