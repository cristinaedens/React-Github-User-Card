import React from 'react';
import axios from "axios";
import UserCard from "./components/User";
import './App.css';

class App extends React.Component {
  constructor() {
    super() 
      this.state = {
        avatar: "",
        name: "",
        bio: "",
        login: "",
        followers: []
      } //this closes state
  } //this closes constructor

  componentDidMount() {
    axios.get("https://api.github.com/users/cristinaedens")
    .then (response => {
      console.log (response.data);
      this.setState({
        avatar: response.data.avatar_url,
        name: response.data.name,
        bio: response.data.bio,
        login: response.data.login
      }) //this closes the 1st setState
    }) //this closes the first axios call

    axios.get("https://api.github.com/users/cristinaedens/followers")
    .then (response => {
      console.log(response)
      this.setState({
        followers: response.data
      }) //this closes the 2nd setState
    }) //this closes the 2nd axios call
  } //this closes componentDidMount
  render(){
  return (
    <div className="App">

    <div className="App-header">
        <UserCard
        avatar = {this.state.avatar}
        name = {this.state.name}
        bio = {this.state.bio}
        />
        
    </div>

      {this.state.followers.map(followme =>{
        return (
        <div className="followers">
        <img src = {followme.avatar_url}/>
        <div className="followerInfo">
        <p>UserName: {followme.login}</p>
        <p>If you would like to follow me here is my link!</p>
        <p>{followme.html_url}</p>
        </div>
        </div>
        )
      })}
    </div>
  );
}
}

export default App;
