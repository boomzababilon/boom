import React, { Component } from 'react';
import  {Route} from 'react-router-dom';
//import image from './immage/boboom.jpg'
//import image from './immage/bb.jpg'
//import image1 from './immage/jj.png'
//import image2 from './immage/kk.png'
//import image3 from './immage/tt.png'
//import Indexpage from './components/Pages/IndexPage';
//import Page from '/.components/Pages/Page';


import Homepages from "./component/Page/HomePages";


class App extends Component {


  render() {

    return (
      <div >
          <Route path='/' component={Homepages} />

      </div>
    )
  }
}

export default App;
