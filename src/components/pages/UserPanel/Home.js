import React, {Component} from 'react';
import Trending from '../../modules/Trending';
import Exclusive from '../../modules/Exclusive';

class Home extends Component {

  render() {

    return (
      <>
        <Trending/>
        <Exclusive />
      </>
    );
  }
}

export default Home;
