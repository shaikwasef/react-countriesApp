import React from "react";
import "./style.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countryList: [] };
  }


  async componentDidMount() {
    const countryListNames = await axios.get(
      "https://restcountries.eu/rest/v2/all"
    );
    countryListNames.data.forEach(value => {
      this.setState({ countryList: this.state.countryList.concat(value.name) });
    });
  }

  render() {
    const countryNames = this.state.countryList.map((value, key) => {
      return <option key={key}>{value}</option>;
    });
    return (<div className = "container">
    <select>{countryNames}</select>
    <div className = "displayBox">
    <div className="resultDisplay"></div>
    <div className="resultDisplay partition">NAME :</div>
    <div className="resultDisplay partition">CAPITAL :</div>
    <div className="resultDisplay partition">REGION :</div>
    <div className="resultDisplay partition">SUBREGION :</div>
    <div className="resultDisplay population partition ">POPULATION :</div>
    </div>
    </div> );
  }
}

export default App;
