import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const defaultTask = {
  title: '',
  description: '',
};

const TaskForm = (props) => {
  const [formData, setFormData] = useState(defaultTask);

  const onFormChange = (event) => {
    const inputValue = event.target.value;
    const stateName = event.target.name;

    const newFormData = { ...formData };
    newFormData[stateName] = inputValue;
    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTask(formData);
    setFormData(defaultTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        placeholder="task title"
        value={formData.title}
        onChange={onFormChange}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        placeholder="description"
        value={formData.description}
        onChange={onFormChange}
      />
      <input type="submit" value="Create task" />
    </form>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
