// Import useEffect here
import { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  /**
   * dogImages
   * @type {Array} an array of image URLs
   * @example
   * [
   *     "https://images.dog.ceo/breeds/terrier-scottish/n02097298_7694.jpg",
   *     "https://images.dog.ceo/breeds/lhasa/n02098413_1137.jpg"
   * ]
   */
  const [dogImages, setDogImages] = useState([]);
  const [numDisplay, setNumDisplay] = useState(1);
  const [error, setError]=useState(false)

  function changeHandler(e){
    setNumDisplay(e.target.value)
    getNewImages();
  }

  function getNewImages(){
    let newAddress = "https://dog.ceo/api/breeds/image/random/"+numDisplay
    console.log(newAddress)
    axios(newAddress).then(response=>{console.log(response);setDogImages(response.data.message);}).catch((err) => {setError(true);})
  }

  /**
   * You may need to set something else in state
   */

  /**
   * Make an AJAX call with the useEffect hook https://dog.ceo/api/breeds/image/random/3
   */
   useEffect(()=>{
    axios("https://dog.ceo/api/breeds/image/random/1").then(response=>{setDogImages(response.data.message);}).catch((err) => {setError(true);})
   }, [])

  return (
    <div className="App">
      <h1>Dogs</h1>
      {/* Make me a controlled input */}
      <select onChange={changeHandler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <button onClick={getNewImages}>Submit</button>
      <div className="container">
        {dogImages.map((dogImage, idx) => {
          return <img key={`dog-${idx}`} height="200" src={dogImage} />;
        })}
      </div>
    </div>
  );
}

export default App;
