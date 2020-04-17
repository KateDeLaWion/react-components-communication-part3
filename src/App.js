
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './components/parentToChild/Parent';

export default class App extends Component {
state={
  title: 'placeholder title'
}

changeTheWorld = (newTitle) => {
  this.setState({title: newTitle});
}

  render() {
    return (
      <div className="App">

      {/* This App.js acts as the Grand Parent */}

      <Parent changeTheWorldEvent={this.changeTheWorld.bind(this, 'new world')} 
              keepTheWorldSameEvent={this.changeTheWorld.bind(this, 'same world')}
              trade={this.state.title} />
        
      </div>
    );
  }
}






// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
