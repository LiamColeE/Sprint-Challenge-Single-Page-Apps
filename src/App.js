import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import LocationsList from "./components/LocationsList.js";
import CharacterList from "./components/CharacterList.js";
import { Route } from "react-router-dom";
//import AppRouter from "./components/AppRouter.js";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route path="/locations" component={LocationsList} />
      <Route path="/characters" component={CharacterList} />
      {/* <AppRouter /> */}
    </main>
  );
}
