import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import './App.css';
import CharComponent from './CharComponent/CharComponent';



class App extends Component {
  
  constructor (props) {
    super(props);
    this.state = {text : ""};
  }

  changeInputHandler = (event) => {
    const text = event.target.value;
    this.setState({text : text});
  }

  clickChar = (event, index) => {
    let text = this.state.text.split('');
    text.splice(index, 1);
    text = text.join('');
    this.setState({text : text});
  }

  render() {
    
    const tamanho = this.state.text.length;
    const charArray = this.state.text.split('');
    //let tamanho = this.state.text.length;
    let divResultadoTamanho = null;
    let divCharacteres = [];

    charArray.map((element, index) => {
      divCharacteres = [...divCharacteres, (<CharComponent char={element} click={(event) => this.clickChar(event, index)}/>)];
    });
    
    if(tamanho) {
      divResultadoTamanho = (<div>Tamanho: {tamanho}</div>)
    }
    return (
      <div className="App">
        <div>
          <input type="text" onChange={this.changeInputHandler} value={this.state.text}></input>
        </div>
        {divResultadoTamanho}
        <ValidationComponent tamanho={tamanho}/>
        <hr></hr>
        {divCharacteres}
        
      </div>
    );
  }
}

export default App;
