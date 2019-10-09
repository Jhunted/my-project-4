import React, { Component } from 'react';

class Searchbar extends Component {

  constructor() {
    super()
    state = {
      query: '',
      results: null,
    };
  }
 
  /*
    `https://api.jikan.moe/v3/search/type/?q=${query}&page=1`
  */

  handleChange () {
    // track the changes in the search bar
  }

  /**
   * THIS SHOULD BE AN ASYNC / AWAIT FUNCUTION
   */
  handleSubmit() {
    // update this.state.query

    // call API search function and pass in the value of this.state.query

    // update this.state.results 
  }

  render() {
    return (
      <>
        <h1>
        Searchbar component
        </h1>
      </>
    );
  }
}

export default Searchbar;
