import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body=()=>{
  const[listOfRestaurants,setListOfRestaurants]=useState(resList)
  return(
    <div className="body">
      <div className="filter">
        <div className="filter-btn">
          <button className="filter-btn" onClick={()=>{
            const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.avgRating>4.2);
            setListOfRestaurants(filteredRestaurants)

          }}>Top Rated Restaurants</button>
        </div>



      </div>
      <div className="res-container">
       {
        listOfRestaurants.map((restaurant)=><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
       }


      </div>
    </div>
  )
}

export default Body;