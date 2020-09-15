import React, { Component } from 'react';
import Validation from './validationComponent/validationComponent';
import './App.css';
import Char from './Char/char'

class App extends Component {

  state = {
    userInput:''
  }

  inputChangedHandler = (event)=>{
this.setState({userInput:event.target.value});
  }
  deleteCHarHandler = (index)=>{
    const text = this.state.userInput.split('');
    text.splice (index,1);
    const update = text.join('');
    this.setState({userInput:update})


  }
  render() {
   const charL = this.state.userInput.split('').map((ch,index)=>{
     return <Char character={ch} key={index} clicked={()=>this.deleteCHarHandler(index)} />
   })

    return (
      <div className="App">
        <input type="text" onChange={this.inputChangedHandler} />
    <p>{this.state.userInput}</p>
    <Validation length={this.state.userInput.length}/>
    {charL}
       </div>
    );
  }
}

export default App;
