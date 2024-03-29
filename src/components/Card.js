import React from "react";
import star from "./images/star.png"
/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/
/*<div className="card--badge">SOLD OUT</div>*/
export default function Card(props){
  let badgeText
  if (props.item.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
      badgeText = "ONLINE"
  }
    return (
        <div className="card">
             {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`${props.item.coverImg}`}  alt="Cardimg" className="card--image"/>
            <div className="card-stats">
            <img src ={star} alt="star" className="card--star"/>
            <span>{props.item.stats.rating}</span>
            <span className="gray">({props.item.stats.reviewCount})</span>
            <span className="gray">{props.item.location}</span>
            <p className="card--title">{props.item.description}</p>
            <p className="card--price"><span className="bold">From {props.item.price}$ </span>/ person</p>
            </div>
        </div>
    )
}