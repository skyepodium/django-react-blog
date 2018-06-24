import React, { Component, Fragment } from 'react';
import Header from 'Header/Header';
import Banner from 'Banner/Banner';

class App extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <Banner />
      </Fragment>
    )
  }
}
export default App;
