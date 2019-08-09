// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {Menu, MenuItem} from '@momentum-ui/react';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//        <Menu>
//        <MenuItem  aria-label="hello" label="hello"/>
//        <MenuItem aria-label="bye" label="bye" />
//        </Menu>
//       </div>
//     );
//   }
// }


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  /*
  check = true // will display app variable content
  check = false, undefined, null  //doesn't display app variable content
  check = 0 // will print 0 instead of app content
  */
     const check = true;  
   const  app = <div className="App">
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
        </header>
      </div>;
   
      
    return (
      <div>
     {check && app}
     </div>
    );
  }
}

export default App;
