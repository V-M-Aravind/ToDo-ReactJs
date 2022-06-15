import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutline';
import UndoIcon from '@mui/icons-material/Undo';
import { Tooltip } from '@mui/material';
function ToDoCard({
  list: { isCompleted, title, description, date, id },
  completeHandler,
  deleteHandler,
}) {
  const cardItemStyle = {
    backgroundColor: '#fff08c',
    margin: '2rem',
    marginLeft: 'auto',
    maarginRight: 'auto',
    borderRadius: '2rem',
    textAlign: 'left',
    padding: '2rem 1rem',
  };
  const dateStyle = {
    float: 'left',
  };
  const markCompleteHandler = () => {
    completeHandler({ isCompleted: true, title, description, date, id });
  };
  const markUnCompleteHandler = () => {
    completeHandler({ isCompleted: false, title, description, date, id });
  };
  const deleteIconHandler = () => {
    deleteHandler(id);
  };
  return (
    <div style={cardItemStyle}>
      {isCompleted ? (
        <Tooltip title='Move to ToDo'>
          <UndoIcon
            fontSize='large'
            sx={{ float: 'left' }}
            onClick={markUnCompleteHandler}
          />
        </Tooltip>
      ) : (
        <Tooltip title='Mark as Complete'>
          <CheckCircleIcon
            onClick={markCompleteHandler}
            fontSize='large'
            sx={{
              float: 'right',
              '&:hover': { color: 'green' },
            }}
          />
        </Tooltip>
      )}

      <br />
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <span style={dateStyle}>{date}</span>
        <Tooltip title='Delete'>
          <DeleteIcon
            onClick={deleteIconHandler}
            sx={{ float: 'right', '&:hover': { color: 'red' } }}
          />
        </Tooltip>
      </div>
    </div>
  );
}

export default ToDoCard;
