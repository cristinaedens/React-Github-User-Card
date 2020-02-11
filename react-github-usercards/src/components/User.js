import React from "react";

const UserCard = (props) => {
  console.log("this is props", props);
  return(
    <div>
      <img src = {props.avatar}/>
      <p>{props.name}</p>
      <p>{props.bio}</p>
      <p>{props.login}</p>
    </div>
  );
}


export default UserCard;