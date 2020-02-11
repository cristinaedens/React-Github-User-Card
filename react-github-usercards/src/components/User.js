import React from "react";

const UserCard = (props) => {
  console.log("this is props", props);
  return(
    <div>
      <img src = {props.avatar}/>
      <p>Name: {props.name}</p>
      <p>Bio: {props.bio}</p>
  <a href={props.url} target="_blank"><button>Click to Follow!</button></a>
    </div>
  );
}


export default UserCard;