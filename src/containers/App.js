import React, { Component } from "react";
import CardList from "../components/CardList.js";
import SearchBox from "../components/SearchBox.js";
import '../containers/App.css';
import Scroll from "../components/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundrt.js";





class App extends Component {
  constructor(){
    
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
 

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({robots: users}));
  }

  onSearchChange = (event) => {
     
    this.setState({searchField: event.target.value})
    
  
  }


  render() {
    const {robots , searchField} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
  return(
    <div className="tc">
        <h1 className="f1">RoboFriends</h1>

        <SearchBox searchChange={this.onSearchChange} />

        <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots}/>
        </ErrorBoundry>
         
        </Scroll>


    </div>
  );

  }


  
}

export default App;