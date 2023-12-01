import React from "react";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closedHour = 22;
  console.log(hour);
  //if the hour is greater than or euqal to openHour
  //less than or equal to closed hour alert we are open
  const isOpen = hour >= openHour && hour <=closedHour 

//   if(hour >= openHour && hour <=closedHour){
//     //do this
//   } else {
//     // do ths
//   }

  return (
    <footer className='footer'>
      {new Date().toLocaleDateString()} Come try the best pizza around
      <div className="order">
        {
            isOpen && (
                <p>We're open until {closedHour}:00. Come visit us or order online </p>
            )
            
        }
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

export default Footer;
