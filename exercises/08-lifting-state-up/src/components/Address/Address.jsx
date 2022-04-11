import { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function App() {
  const [displayResults, setDisplayResults] = useState(false);
  const [formInfo, setFormInfo]=useState({})
  /**
   * You will need to call on useState here for form fields
   * e.g. first name, last name, etc.
   */

  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
  return <>{displayResults ? <AddressResults formInfo={formInfo}/> : <AddressForm formInfo={formInfo} setFormInfo2={setFormInfo} setDisplayResults={setDisplayResults}/>}</>;
}

export default App;
