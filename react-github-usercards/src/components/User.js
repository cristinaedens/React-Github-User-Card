import React from "react";

const UserCard = (props) => {
    return ( <
        div >
        <
        img src = { props.avatar }
        /> <
        p > { props.name } < /p> <
        p > { props.email } < /p> <
        p > { props.login } < /p> <
        /div>
    );
}

export default UserCard;