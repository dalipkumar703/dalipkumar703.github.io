import React, { useState , useContext} from 'react';
import ReactDOM from 'react-dom';

const languages = ['JavaScript', 'Python'];
const LanguageContext = React.createContext();


const LanguageProvider= LanguageContext.Provider;
const LanguageConsumer = LanguageContext.Consumer;
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // implement Context here so can be used in child components
      <LanguageProvider value={languages}>
      <MainSection />
      </LanguageProvider>
    );
  }
}

class MainSection extends React.Component {
  constructor(){
    super();
    this.state = {itemSelected : 0};
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(){
    this.setState({itemSelected: !this.state.itemSelected })
  }
  render() {
    return (
      <LanguageConsumer>
      {(props)=>{
     return(   <div>
        <p id="favoriteLanguage">Favorite programing language: {this.state.itemSelected? props[1]:props[0]}</p>
        <button id="changeFavorite" onClick={this.handleOnClick}>Toggle language</button>
      </div>)
      }
            }      
      </LanguageConsumer>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
