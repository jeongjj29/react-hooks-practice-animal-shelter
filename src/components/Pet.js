import React, { useState } from "react";

function Pet({ pet, onAdoptPet }) {
  const [isAdopted, setIsAdopted] = useState(pet.isAdopted);

  function handleAdoptClick() {
    onAdoptPet(pet.id);
    setIsAdopted(true);
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {pet.gender === "male" ? "♂" : "♀"}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button className="ui primary button" onClick={handleAdoptClick}>
            Adopt pet
          </button>
        )}
      </div>
    </div>
  );
}

export default Pet;
