import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/task.component.scss';
import 'typeface-roboto';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { showCancel: false };
  }

  onMouseEnter = () => {
    this.setState(() => { return { showCancel: true }; });
  }

  onMouseLeave = () => {
    this.setState(() => { return { showCancel: false }; });
  }

  render() {
    return (
      <div className="task" onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}>
        <button className="task-button">
          <span className="task-value">{this.props.taskText}</span>
          <span className={this.state.showCancel ? 'task-cancel' : 'task-cancel-clr'}>x</span>
        </button>
      </div>
    );
  }
}

Task.propTypes = {
  taskText: PropTypes.string.isRequired
}

export default Task;
