import React from 'react';
import {cdnUrl} from "../utils/constants"

export const RestaurantCard = (props) =>{
      const {resData} = props;
      const {cloudinaryImageId,name,cuisines,avgRating} = resData?.info
      return(
            <div className='res-card'>
                  <div > 
                  <img className='res-logo' alt='res-logo' src={cdnUrl + cloudinaryImageId}></img>
                  </div>
                  <h3>{name} </h3>
                  <h4>{cuisines.join(", ")}</h4>
                  <h4>{avgRating} Ratting</h4>
                  <h4>{resData.info.sla.deliveryTime} Delivery Time</h4>
            </div>
      );
}
