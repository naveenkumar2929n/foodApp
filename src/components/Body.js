import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body=()=>{
  const[listOfRestaurants,setListOfRestaurants]=useState([])
  const[filteredRes,setFilteredRes]=useState([])
 const[searchText,setSearchText]=useState("")
 
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01020&lng=76.97010&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log(json);
    setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setFilteredRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    
  }
  return (listOfRestaurants.length===0)?<Shimmer/>:(
    <div className="body">
      <div className="filter">
        <div className="search-btn">
        <input type="text" onChange={(e)=>setSearchText(e.target.value)} ></input>
        <button onClick={()=>{
          const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setFilteredRes(filteredRestaurants)
        }}>search</button>
        </div>
        <div className="btn">
        <button className="filter-btn" onClick={()=>{
          const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.avgRating>4.4);
          setFilteredRes(filteredRestaurants)
        }}>Top Rated  Restaurants</button>
        </div>


      </div>
      <div className="res-container">
       {
        filteredRes.map((restaurant)=><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
       }


      </div>
    </div>
  )
}

export default Body;