import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/app.scss';
import Task from './components/task.component';
import 'typeface-roboto';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todoArr: [], inputValue: '' };
    this.arr = [];
    this.todoNum = 0;
  }

  handleOnchange(event) {
    const inputVal = event.target.value;
    this.setState(() => { return { inputValue: inputVal } });
  }

  removeElement = (elm) => {
    const arrCopy = this.state.todoArr.filter((datum, idx, arr) => {
      return datum.key !== elm.key;
    });
    this.setState(() => { return { todoArr: arrCopy } });
  }

  addTodo = () => {
    const todoText = this.state.inputValue.trim();
    if (todoText) {
      this.todoNum++;
      const idKey = 'todo' + this.todoNum.toString();
      const todoObj = { "key": idKey, "todo": todoText }
      let arr = this.state.todoArr.slice();
      arr.push(todoObj);
      this.setState(() => { return { todoArr: arr } });
      this.setState(() => { return { inputValue: '' } });
    }
  }

  render() {
    return (
      <div className="app">
        <div className="app-div">
          <img src={logo} className="app-logo" alt="logo" />
          <input type="text" className="app-input" value={this.state.inputValue} onChange={(e) => this.handleOnchange(e)} autoFocus />
          <button className="app-add-value" onClick={this.addTodo}>
            <span>New</span>
            <span className="app-add"> + </span>
          </button>
          {this.state.todoArr.map((elm) => { return (<div onClick={(e) => this.removeElement(elm)}><Task key={elm.key} taskText={elm.todo} /></div>) })}
        </div>
      </div>
    );
  }
}

export default App;
