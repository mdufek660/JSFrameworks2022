import "./App.css";
import {useState} from 'react';
import  countries from './assets/countries.json'
import  states from './assets/states.json'
// Import here

function App() {
  const [formValues, setFormValues] = useState({"firstName":"", "lastName":"", "addressLine1":"",
                                          "city":"", "province":"", "zipCode":"", "country":""});
  const [visible, setVisible]=useState(false);

  const handleChange = event =>{
    setFormValues({...formValues, [event.target.name]:event.target.value})
  }
  let formSubmission;

  const handleSubmit = event =>{

    event.preventDefault();
    setVisible(!visible)
  }

  return (
    <form className="container mt-4" method="POST" onSubmit={handleSubmit}>
      {/* You will need to handle form submission */}
      <div className="mb-3">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input id="city" name="city" type="text" className="form-control" 
          onChange={handleChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        {/* Loop through the states you imported here */}
        <select id="state" name="state" className="form-control"
          onChange={handleChange}>
          <option value=""> </option>
          {states.map((province, idx)=>{
            return(
              <option value={province} key={"p-${idx}"}>{province}</option>
              )
          })}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        {/* Loop through the countries you imported here */}
        <select id="country" name="country" className="form-control"
          onChange={handleChange}>
          <option value=""></option>
          {countries.map((country, idx) => {
            return (
              <option value={country} key={"c-${idx}"}>
                {country}
              </option>
            );
          })}
          </select>
      </div>
      <button type="submit" className="btn btn-primary" >
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}
      { visible && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {/* Add <li></li> tags here */}
            {Object.values(formValues).map((value, idx)=>{return <li key={'value-${idx}'}>{value}</li>})}
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;
