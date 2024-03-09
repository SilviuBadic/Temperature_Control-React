import React from "react";

const Temperature = ({number, setNumber, mycolor, setColor}) => {

  const Increase = () => {
    const newNumber = number + 1;

    if(newNumber >= 20){
      setColor('hot-weather');
      document.getElementById('conclusion').innerHTML = "Need to take your hoodie down. It's getting hot.  ☀️";
    }
    else if (newNumber < 20 && newNumber >= 10){
      setColor('warm-weather');
      document.getElementById('conclusion').innerHTML = "Take you're jacket down, it's not that cold. ⛅";
    }
    else if(newNumber < 10 && newNumber >=0){
      setColor('cold-weather');
      document.getElementById('conclusion').innerHTML = "Cold, be careful. Put some clothes on you. 🌧";
}
    else{
      setColor('freezing-weather');  
      document.getElementById('conclusion').innerHTML = "It's freezing. Is this Antarctica? 🥶";
    }
    setNumber(newNumber);
};

  const Decrease = () => {
    const newNumber2 = number - 1;
   
    if(newNumber2 >= 20){
      setColor('hot-weather');
      document.getElementById('conclusion').innerHTML = "Need to take your hoodie down. It's getting hot. ☀️";
    }
    else if (newNumber2 < 20 && newNumber2 >= 10){
      setColor('warm-weather');
      document.getElementById('conclusion').innerHTML = "Take you're jacket down, it's not that cold. ⛅";
    }
    else if(newNumber2 < 10 && newNumber2 >=0){
      setColor('cold-weather');
      document.getElementById('conclusion').innerHTML = "Cold, be careful. Put some clothes on you. 🌧";
    }
    else{
      setColor('freezing-weather');
      document.getElementById('conclusion').innerHTML = "It's freezing. Is this Antarctica? 🥶";
    };
    setNumber(newNumber2);
  }

  return (
    <div className="main_div">
      <h1 className="temp_control">Temperature control</h1>
      <p>Press any button to increase or decrease the temperature.</p>
      <h2 id="conclusion">Brr. Cold.</h2>
      <div className={mycolor} id="temp">
         <h1>{number} °C</h1>
      </div>
        
      <div className="buttons">
        <button onClick={() => 
        {
        Increase();
      }
      } 
        type="button" className="increase_btn">+</button>
        <button onClick={() => {
          Decrease();
          }
          } 
          type="button" className="decrease_btn">-</button>
      </div>
      
    </div>
  )
}

export default Temperature;