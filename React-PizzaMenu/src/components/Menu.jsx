import React from 'react'
import Pizza from './Pizza'

function Menu() {
  return (
    <main className='menu'>
        <h2>Our Menu</h2>
    <Pizza 
    name="Focaccia"
    ingredients="Bread with itialian olive oil and rosemary"
    photoName="pizzas/focaccia.jpg"
    price={6}
    />

    </main>
  )
}

export default Menu;