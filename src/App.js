import React from "react";
import "./style.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countryList: [] , name : "", capital : "" , region : "" , subregion : "" , population : "" , flag : ""};
  }


  async componentDidMount() {
    const countryListNames = await axios.get(
      "https://restcountries.eu/rest/v2/all"
    );
    countryListNames.data.forEach(value => {
      this.setState({ countryList: this.state.countryList.concat(value.name) });
    });
  }

  async selectedOptionInfo(event){
    const url = "https://restcountries.eu/rest/v2/name/" + (event.target.options[event.target.selectedIndex].text);
    var flagLink = "";
    const info = await axios.get(url);
    info.data.forEach((value) => {
      this.setState({name : value.name , capital : value.capital , region : value.region , subregion : value.subregion , population : value.population , flag : value.flag});
    })
  }


  render() {
    const countryNames = this.state.countryList.map((value, key) => {
      return <option key={key}>{value}</option>;
    });
    return (<div className = "container">
    <select onChange = {() => this.selectedOptionInfo(event)}>{countryNames}</select>
    <div className = "displayBox">
    <div className="resultDisplay"></div>
    <div className="resultDisplay partition">NAME : <div>{this.state.name}</div></div>
    <div className="resultDisplay partition">CAPITAL : <div>{this.state.capital}</div></div>
    <div className="resultDisplay partition">REGION :</div>
    <div className="resultDisplay partition">SUBREGION :</div>
    <div className="resultDisplay population partition ">POPULATION :</div>
    </div>
    </div> );
  }
}

export default App;
