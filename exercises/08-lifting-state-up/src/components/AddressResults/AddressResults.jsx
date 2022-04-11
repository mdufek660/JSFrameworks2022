/**
 * After the user submit the form, this displays what the user entered.
 * @param {Object} props which should somehow include:
 * - first name
 * - last name
 * - address
 * - city
 * - state
 * - zipcode / postal code
 * - country
 */
function AddressResults(props) {
  return (
    <div className="card card-body bg-light mt-4 mb-4">
      Results:
      <ul className="list-unstyled mb-0">

        {Object.values(props.formInfo).map(function(info, index){
          console.log(props)
          return(<tr>
            <td>{info}</td>
            </tr>
            )
        })}</ul>
    </div>
  );
}

export default AddressResults;
