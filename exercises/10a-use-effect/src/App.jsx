// Import useEffect here
import {useEffect, useState}  from "react" 
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
// import Axios (or use Fetch)
import axios from 'axios';

function App() {
  /**
   * Set up your state
   */

   const [quote, setQuote] = useState("loading...");
   const [error, setError] = useState(false)


  /**
   * Make an AJAX call with the useEffect hook
   */

   useEffect(()=>{
    axios("https://ron-swanson-quotes.herokuapp.com/v2/quotes").then(response=>{setQuote(response.data[0])}).catch((err) => {setError(true); setQuote("error");})
   }, [])

  return (
    <body class="bg-warning text-center">
      <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
      <div class="container">
        {/* Display a loading message */}
        {/* Display an error message if the API fails */}
        <blockquote
          id="quote"
          class="blockquote bg-dark text-white border-0 mb-4"
          
        >
         {quote}
        </blockquote>
      </div>
    </body>
  );
}

export default App;
