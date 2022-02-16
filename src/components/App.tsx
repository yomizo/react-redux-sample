import React from "react";
import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For npm package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
