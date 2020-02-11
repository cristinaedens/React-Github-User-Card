import React from 'react';
import axios from "axios";
import UserCard from "./components/User";
import FollowerCard from "./components/Followers";
import './App.css';

class App extends React.Component {
  constructor() {
    super() 
      this.state = {
        avatar: "",
        name: "",
        bio: "",
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
        bio: response.data.bio
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
      <header className="App-header">
     
      </header>
    </div>
  );
}
}

export default App;
