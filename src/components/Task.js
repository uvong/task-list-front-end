import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  const onTaskButtonClick = () => {
    props.updateTasks(props.id);
  };

  const onXButtonClick = () => {
    props.deleteTask(props.id);
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${
          props.isComplete ? 'tasks__item__toggle--completed' : ''
        }`}
        onClick={onTaskButtonClick}
      >
        {props.title}
      </button>
      <button className="tasks__item__remove button" onClick={onXButtonClick}>
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateTasks: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
