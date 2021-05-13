import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import {Switch, Route } from 'react-router-dom';
import {useState, useEffect} from 'react';
import MovieView from "./components/MovieView";

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchText,setSearchText ] = useState('');

//Api Key a7880a8a80c677f979436aa96855b158
//https://api.themoviedb.org/3/search/movie?api_key=a7880a8a80c677f979436aa96855b158&language=en-US&query=star%20Wars&page=1&include_adult=false


    useEffect(() => {
        if(searchText){
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=a7880a8a80c677f979436aa96855b158&language=en-US&query=${searchText}&page=1&include_adult=false`)
                .then(response => response.json())
                .then(data => {

                    setSearchResults(data.results)
                })
        }
    }, [searchText])


  return (
    <div >
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/about" component={AboutView}/>

          <Route path="/search" exact>
              <SearchView keyword={searchText} searchResults={searchResults}/>
          </Route>

          <Route path="/movies/:id" component={MovieView} />
      </Switch>
    </div>
  );
}

export default App;
