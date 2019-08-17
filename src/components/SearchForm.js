import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

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
    <Menu.Item position="right">
      <section className="search-form">
        <form onSubmit={onSearch}>
          <input
            onChange={handleInputChange}
            placeholder="Search"
            value={name}
            name="name"
          />
          <NavLink to={`/search/${name}`}><button type="submit">Search</button></NavLink>
        </form>
      </section>
    </Menu.Item>
  );
}
