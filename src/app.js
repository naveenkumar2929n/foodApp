
import React from "react";
import ReactDOM from "react-dom/client"


const title=<h1>title element</h1>
const Footer=()=>{
  return(
    <div className="footer">
      <h1>footer component</h1>
    </div>
  )
}
const Header=()=>{
  return(
    <div className="header">
      {title}
      <h1>Header component</h1>
      {Footer()}
      {<h1>{1000+1}</h1>}
    </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>)

