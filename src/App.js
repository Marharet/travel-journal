import React from "react";
import Header from "./components/Header";
import TravelItem from "./components/TravelCard";
import data from "./trips"


export default function App() {

  const tripCard = data.map((item)=>{
    return <TravelItem 
              id = {item.id}
              {...item}/>
  })

  return (
    <div >
      <Header />
      <div className="container">
        {tripCard}
      </div>
    </div>
  );
}

