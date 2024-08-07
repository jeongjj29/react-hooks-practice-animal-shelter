import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onChangeType(newType) {
    setFilters({ type: newType });
  }

  function onFindPetsClick() {
    let filteredUrl;
    if (filters.type === "all") {
      filteredUrl = "http://localhost:3001/pets";
    } else {
      filteredUrl = `http://localhost:3001/pets?type=${filters.type}`;
    }

    fetch(filteredUrl)
      .then((r) => r.json())
      .then((data) => setPets(data));
  }

  function onAdoptPet(adoptedPetId) {
    pets.map((pet) => {
      if (pet.id === adoptedPetId) {
        return { ...pet, isAdopted: true };
      } else {
        return pet;
      }
    });
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              onChangeType={onChangeType}
              onFindPetsClick={onFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
