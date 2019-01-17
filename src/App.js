
import React, { Component } from 'react';
import './App.css';
import fetchFirst from "./Fetch";
import RedditPost from './RedditPost';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sposts: []
    };
  }  

  componentDidMount() {
		fetchFirst("reactjs").then((posts)=>{
			this.state.posts = posts;
			this.setState({sposts: posts});
		});
  }    
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <ul>
            {this.state.sposts.map((post) =>
              <RedditPost {...post}/>
            )}
          </ul>          
        </p>
      </div>
    );
  }
}

export default App;
