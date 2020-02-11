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
        followers: "",
        followers_url: []
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
        login: response.data.login,
        followers: response.data.followers,
        url: response.data.html_url
      }) //this closes the 1st setState
    }) //this closes the first axios call

    axios.get("https://api.github.com/users/cristinaedens/followers")
    .then (response => {
      console.log(response)
      this.setState({
        followers_url: response.data
      }) //this closes the 2nd setState
    }) //this closes the 2nd axios call
  } //this closes componentDidMount
  render(){
  return (
    <div className="App">

    <div className="App-header">
      <div className="my-card">
        <UserCard
        avatar = {this.state.avatar}
        name = {this.state.name}
        bio = {this.state.bio}
        url = {this.state.url}
        />
        </div>
    </div>
    <h3>My Followers</h3>
      <div className="map-div">
      {this.state.followers_url.map(followme =>{
        return (
        <div className="followers" key={followme.id}>
          
        <img className="followerimg" src = {followme.avatar_url}/>
        <div className="followerInfo">
        <p>UserName: {followme.login}</p>
        <p>If you would like to follow me here is my link!</p>
        <a href={followme.html_url} target="_blank">{followme.html_url}</a>
        </div>
        </div>
        )
      })}
      </div>
    </div>
  );
}
}

export default App;
