import React, { useState, useEffect } from "react";
import BeerCard from "./BeerCard";
import SearchBar from "./SearchBar";

function App() {
  const [allBeers, setAllBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((data) => {
        setAllBeers(data);
        setFilteredBeers(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const filteredResults = allBeers.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBeers(filteredResults);
  }, [searchTerm, allBeers]);

  return (
    <div className="container">
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="card-container">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
}

export default App;
