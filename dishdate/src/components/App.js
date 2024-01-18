import logo from '/home/skeesen8/dish-date/dishdate/src/logo.svg';
import '/home/skeesen8/dish-date/dishdate/src/App.css';
import {React,useState,useEffect} from 'react';

function App() {
  const [restaraunts,setRestaraunts] = useState()

  useEffect(()=>{
    fetch("https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20")
    .then((resp)=>{
      if(resp.ok){
        resp.json().then((listRestaraunts)=>setRestaraunts(listRestaraunts))
      } else{
        console.log('yelp api error')
      }
    })
  })
  console.log(restaraunts)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <code>DishDate</code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
