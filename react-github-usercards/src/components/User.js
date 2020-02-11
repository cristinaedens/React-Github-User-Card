import React from "react";

const UserCard = (props) => {
  console.log("this is props", props);
  return(
    <div>
      <img src = {props.avatar}/>
      <p>Name: {props.name}</p>
      <p>Bio: {props.bio}</p>
      <p>If you would like to follow me here is my link!</p>
  <a href={props.url} target="_blank"> {props.url}</a>
    </div>
  );
}


export default UserCard;