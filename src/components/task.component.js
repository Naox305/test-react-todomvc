import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/task.component.css';

class Task extends Component {
  render() {
    return (
      <div className="task">
      <input className ="task-button" type="button" value={this.props.taskText}/>
      </div>
    );
  }
}

Task.propTypes = {
  taskText: PropTypes.string.isRequired
}

export default Task;
