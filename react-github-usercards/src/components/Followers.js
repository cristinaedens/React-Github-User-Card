import React from "react";

const FollowerCard = (props) => {
  return(
    <div>
      <img src = {props.avatar}/>
      <p>{props.name}</p>
      <p>{props.bio}</p>
      <p>{props.login}</p>
    </div>
  );
}

export default FollowerCard;