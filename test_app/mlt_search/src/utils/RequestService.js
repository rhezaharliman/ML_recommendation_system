import Configuration from '../configurations/Configuration';
import axios from 'axios';
import { API } from "aws-amplify";

class RequestService {
  constructor() {
    const COUNT_LIMIT = 30;
    this.config = new Configuration();
  }

  async getResults2(query) {
    const response = await axios.post(
      this.config.REQUEST_URL,
      { headers: { 'Content-Type': 'application/json', 'x-api-key': "fogRZVNkiR4GAfRLvxQsq6dsFMfVw9wl54Mz5D7b" } },
      { "query": query,  "init_idx": 0,  "count": this.COUNT_LIMIT }
    );
    console.log(response.data)
  }

  async getResultsAws(query) {
    let apiName = 'hjmlipdub8'; // replace this with your api name.
    let path = '/path'; //replace this with the path you have configured on your API
    let myInit = {
        body: {}, // replace this with attributes you need
        headers: {} // OPTIONAL
    }
    
    API.post(apiName, path, myInit).then(response => {
        // Add your code here
    }).catch(error => {
        console.log(error.response)
    });
  }

  async getResults(query) {
    console.log("RequestService.getItem():");
    console.log("Item: " + query);
    return fetch(this.config.REQUEST_URL, {
        mode: "no-cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": this.config.API_KEY
        },
        body: {"query": query,  "init_idx": 0,  "count": 30}
      })
      .then(response => {
        if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.json();
      })
      .then(result => {
          console.log(result);
          return result;
        }
      )
      .catch(error => {
        this.handleError(error);
      });
  }
  handleResponseError(response) {
      throw new Error("HTTP error, status = " + response.status);
  }
  handleError(error) {
      console.log(error.message);
  }
}
export default RequestService;