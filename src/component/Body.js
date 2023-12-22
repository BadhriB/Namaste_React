import React from 'react';
import { RestaurantCard } from './RestaurantCard';
import resList from '../utils/mockData';
import { useState , useEffect} from 'react';

export const Body = () =>{
      const [listOfRestaurant, setListOfRestaurant]= useState(resList || []);

      useEffect(()=>{
            fetchData()
      },[])
      const fetchData = async () =>{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9005361&lng=77.5471218&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
            let jsonData = json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
            setListOfRestaurant(jsonData);
      }
    return(
          <div className='body'>
                <div className='filter'>
                  <button className='filter-btn' onClick={()=>{
                        const filteredList = listOfRestaurant.filter((res)=>res.info.avgRating>4);
                        setListOfRestaurant(filteredList);
                  }}>Top rated Restaurant</button>
                </div>
                <div className='res-container'>
                      {
                            resList.map((restaurant)=>(<RestaurantCard key = 
                              {restaurant.info.id} resData = {restaurant}/>))
                      }
                </div>
          </div>
    );
}