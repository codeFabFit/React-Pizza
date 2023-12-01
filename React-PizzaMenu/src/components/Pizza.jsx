import React from 'react'

// one option
function Pizza(props) {
  return (
    <div>
        <h2>{props.name}</h2>
        <span>{props.price}</span>
        <p>{props.ingredients}</p>
        
        <img src = {props.photoName} alt="" />
    </div>
  )
}
// second option to do it || they both do the same; coder preference 

// function Pizza({name, ingreidents, photoName, price}) {
//   return (
//     <div>
//         <h2>{name}</h2>
//         <p>{ingredients}</p>
//         <span>{price}</span>
//         <img src = {photoName} alt="focaccia" />
//     </div>

export default Pizza;