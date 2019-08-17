import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SearchForm() {
  const [name, setName] = useState(); 

  const handleInputChange = (event) => {
    setName(event.target.value);
  }

  const onSearch = (event) => {
    console.log("PRESSED");
    setName("");
    event.preventDefault();
  }
  // TODO: Add stateful logic for query/form data
  return (
    <section className="search-form">
      <form onSubmit={onSearch}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <NavLink to={`/search/${name}`}><button type="submit">Search</button></NavLink>
      </form>
    </section>
  );
}
