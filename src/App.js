import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import LocationsList from "./components/LocationsList.js";
import CharacterList from "./components/CharacterList.js";
import { Route } from "react-router-dom";
import CharacterCard from "./components/CharacterCard.js";
import LocationCard from "./components/LocationCard.js";
import EpisodesList from "./components/EpisodesList.js"
import WelcomePage from "./components/WelcomePage"
//import AppRouter from "./components/AppRouter.js";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route path="/" exact={true} component={WelcomePage}/>
      <Route path="/locations" component={LocationsList} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/episodes" component={EpisodesList} />
      <Route path="/character/:id" component={CharacterCard}/>
      <Route path="/location/:id" component={LocationCard}/>
      {/* <AppRouter /> */}
    </main>
  );
}
