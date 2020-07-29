import React, { Component } from "react";
import "./App.css";
import Circles from "./components/Circles";
import CircleSelector from "./components/CircleSelector";

class App extends Component {
  state = {
    selectedCircle: 1,
  };
  handleColorChange = (selected) => {
    this.setState({
      selectedCircle: selected,
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            selectedCircle={this.state.selectedCircle}
            handleColorChange={this.handleColorChange}
          />
          <Circles selectedCircle={this.state.selectedCircle} />
        </main>
      </div>
    );
  }
}
export default App;
