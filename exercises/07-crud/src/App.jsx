import { useState } from "react";
import "./App.css";

const GroceryList = () => {


  const [name, setName]=useState("");
  const [price, setPrice]=useState();
  const [items, setItems]=useState([]);
  const [sum, setSum]=useState(0.00);
  const [quantity, setQuantity]=useState(1);

  const handleSubmit = event =>{
    event.preventDefault();
    if(name && name!="" && price && quantity>0){

      let tempCart=[];
      for(let i=quantity; i>0; i--){
        tempCart.push({"name":name, "price":price})
      }
      console.log("hello")
      newItem(tempCart)
      try{
        let tempNum=parseFloat(sum + price*quantity)
        
        setSum(tempNum)
      }
      catch(e){

      }
    
    }else{
      alert("Invalid item!")
    }
    console.log(items)
  }

  const newItem = itemsIn =>{
    setItems([...items, ...itemsIn])
  }

  const deleteItem = event =>{
    event.preventDefault();
    let tempNum = parseFloat(sum - items[event.target.id].price)
    setSum(tempNum)
    setItems(items.filter((item, currentIndex)=>currentIndex!=event.target.id))

  }

const emptyCart = () =>{
  setSum(0);
  setItems([])
}

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={handleSubmit}>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              onChange={e=>setName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
              onChange={e=>setPrice(parseFloat(e.target.value))}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              min="0"
              step="1"
              placeholder="Quantity of items"
              aria-label="Quantity of items"
              onChange={e=>setQuantity(parseFloat(e.target.value))}
            />
          </div>
          <div className="col-md-auto">
            <button type="submit" className="btn btn-success" >
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            
             {items.map((item, idx) =>{
              return(
                <tr>
                  <td>{item.name}</td>
                  <td>{item.price.toFixed(2)}</td>
                  <td>
                    <button aria-label="Delete" title="Delete" onClick={deleteItem} id={idx}>
                      &times;
                    </button>
                  </td>
                </tr>
                )
            })}

          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: ${sum.toFixed(2)}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-success" onClick={emptyCart}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
