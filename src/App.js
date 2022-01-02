import './App.css';
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect( ()=> {
    refreshPage();
  }, []);

  const funcSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  const refreshPage = () => {
    setIsLoading(true);

    var options = {
      method: 'GET',
      url: 'https://covid-19-data.p.rapidapi.com/country',
      params: {name: search, format:'json'},
      headers: {
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
        'x-rapidapi-key': '7d617ac138mshf6344666c9fc1eep16f8fejsnfceb2920b5c7'
      }
    };

    Axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  
  


  return (
    <div className="App">
      <h1>Track covid changes in every country.</h1>
      <div className="search-container">
                    <input
                        className="search"
                        placeholder="Search"
                        type="text"
                        onChange={funcSearch}
                    />
                    <i className="fas fa-search" onClick={refreshPage}></i>
                </div>
    </div>
  );
}

export default App;
