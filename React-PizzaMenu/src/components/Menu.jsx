import React from 'react'
import Pizza from './Pizza'

function Menu(props) {
  console.log(props.pizzaData)
  return (
    <main className='menu'>
        <h2>Our Menu</h2>
        {props.pizzaData.map((pizza) => (
          <Pizza {...pizza} key={pizza.name}/> 
        ))}
    

    </main>
  )
}
export default Menu;