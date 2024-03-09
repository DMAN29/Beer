import React from "react";

function BeerCard({ beer }) {
  return (
    <div className="card">
      <img
        src={beer.image_url}
        alt={beer.name}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "200px",
          height: "500px",
        }}
      />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
    </div>
  );
}

export default BeerCard;
