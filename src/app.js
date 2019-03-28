import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/app.css';
import Task  from './components/task.component';

class App extends Component {
  constructor(props){
    super(props);
    this.state={todoArr:[], inputValue:''};
    this.arr = [];
    this.todoNum = 0;
  }

  handleOnchange(event){
    const inputVal =  event.target.value;
    this.setState(()=>{return {inputValue:inputVal}});
  }

  removeElement = (elm) => {
    const arrCopy = this.state.todoArr.filter((datum, idx, arr)=>{
      return datum.key !== elm.key;
    });
    this.setState(()=>{return {todoArr: arrCopy}});
  }

  addTodo = ()=>{
    const todoText = this.state.inputValue.trim();
    if(todoText){
      this.todoNum++;
      const idKey = 'todo' + this.todoNum.toString();
      const todoObj = {"key":idKey, "todo":todoText}
      let arr = this.state.todoArr.slice();
      arr.push(todoObj);
      this.setState(()=> {return {todoArr: arr}} );
      this.setState(()=>{return {inputValue:''}});
    }
  }

  returnList = () => {
    return this.state.todoArr;
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <input type="text" className="app-input" value={this.state.inputValue} onChange={(e)=>this.handleOnchange(e)} autoFocus/>      
          <input className ="app-add" type="button" value="New" onClick={this.addTodo} />
            {this.state.todoArr.map((elm)=>{return(<div onClick={(e)=> this.removeElement(elm)}><Task  key={elm.key} taskText={elm.todo}/></div>)})}
        </header>
      </div>
    );
  }
}

export default App;
