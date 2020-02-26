import React, { Component } from 'react';
import Top from './components/top/Top'
import Mid from "./components/mid/Mid"
import Bottom from "./components/bottom/Bottom"

class App extends Component {
  state = {  }
  render() { 
    return ( 
        <div>
            <Top />
            <Mid />
            <Bottom />
        </div>
     );
  }
}
 
export default App;

