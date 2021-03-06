import React from "react";
import "./style.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state({countryList : []});
  }

  async componentDidMount() {
    const countryListNames = await axios.get("https://restcountries.eu/rest/v2/all");
    countryListNames.data.forEach((value) => {this.setState({countryList : this.state.countryList.concat(value.name)})});
  }

  render() {
    return <select>{countryNames}</select>;
  }
}

export default App;
