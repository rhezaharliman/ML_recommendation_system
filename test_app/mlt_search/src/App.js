import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RequestService from './utils/RequestService';
import { loadingBar } from '@aws-amplify/ui';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false }
    this.requestService = new RequestService();
    this.onSubmit = this.onSubmit.bind(this);
  };
  
  onSubmit(e) {
    e.preventDefault();
    this.setState({ isLoading: true });
    var query = this.query.value;
    console.log("QUERY= "+query);
    // requestToApi(query);

    this.requestService.getResults2(query).then(items => {
      console.log("===== REQUEST SUCCESS");
      this.setState({ isLoading: false });
          // this.setState({items: items});
      }
    );
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <input type="text" ref={ (c) => this.query = c } name="query" placeholder="Search..." />
          <button className='btn btn-secondary' onClick={this.onSubmit} >{ isLoading? "Loading..." : "search"}</button>
        </header>
      </div>
    );
  };
};

// TODO: There's a lot of things that's not yet handled

export default App;
