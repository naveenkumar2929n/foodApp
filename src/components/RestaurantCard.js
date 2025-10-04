const  RestaurantCard=(props)=>{
  const{resData}=props;
const{name,cuisines,costForTwo,cloudinaryImageId,avgRating}=resData?.info;
  
  return(
    <div className="res-card">
      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join("  , ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>⭐{avgRating} stars</h4>
    </div>
  )
}

export default RestaurantCard;