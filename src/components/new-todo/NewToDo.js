import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Tooltip } from '@mui/material';

function NewToDo({ saveToDoHandler }) {
  const [clickedNewTodo, setClickedNewTodo] = useState(false);
  const [details, setDetails] = useState({ title: '', description: '' });
  const newToDoClickHandler = () => {
    setClickedNewTodo(true);
  };
  const mouseLeaveHandler = () => {
    setClickedNewTodo(false);
  };
  const titleHandler = (event) => {
    const title = event.target.value;
    setDetails((p) => ({ ...p, title }));
  };
  const descriptionHandler = (event) => {
    const description = event.target.value;
    setDetails((p) => ({ ...p, description }));
  };
  const addNewToDoHandler = () => {
    console.log(details);
    saveToDoHandler(details);
    setDetails({ title: '', description: '' });
  };
  const formStyle = {
    backgroundColor: '#fff08c',
    margin: '1rem auto',
    width: '50%',
    textAlign: 'center',
  };
  const inputStyle = {
    textAlign: 'center',
    width: '90%',
    padding: '1rem 0',
    margin: '1rem 1rem',
  };
  return (
    <form style={formStyle} onMouseLeave={mouseLeaveHandler}>
      <input
        type='text'
        placeholder={clickedNewTodo ? 'Todo Title' : 'click to add new to do'}
        style={inputStyle}
        onClick={newToDoClickHandler}
        onChange={titleHandler}
        value={details.title}
      />
      {clickedNewTodo && (
        <>
          <br />
          <input
            type='textbox'
            placeholder='Todo Description'
            style={inputStyle}
            onChange={descriptionHandler}
            value={details.description}
          />
          <br />
          <Tooltip title='Add new ToDo'>
            <AddCircleIcon
              fontSize='large'
              sx={{ '&:hover': { color: 'green' } }}
              onClick={addNewToDoHandler}
            />
          </Tooltip>
        </>
      )}
    </form>
  );
}

export default NewToDo;
