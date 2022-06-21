import React, { useState } from 'react';
import FindInPageIcon from '@mui/icons-material/FindInPage';

function Header({ setsearchResults, todoList }) {
  const [searchText, setSearchText] = useState('');
  const inputStyle = {
    textAlign: 'center',
    padding: '1rem 0',
    width: '20rem',
    margin: '0 0rem',
    border: 'none',
    borderRadius: '2rem',
  };
  const searchIcon = {
    color: 'white',
  };
  const searchHandler = (event) => {
    console.log();
    const text = event.target.value;
    setSearchText(text);
    if (text.length < 1) {
      setsearchResults(todoList);
      return;
    }
    console.log('text is ' + text);
    const results = todoList.filter((t) =>
      t.description.toLowerCase().includes(text.toLowerCase())
    );
    console.log(results);
    setsearchResults(results);
  };

  return (
    <header style={{ textAlign: 'center', margin: '2rem', display: 'flex' }}>
      <h1 style={{ margin: '0 5% 0 30%' }}>My ToDo List</h1>
      <div style={{ display: 'flex' }}>
        <input
          type='text'
          placeholder='search ToDo'
          style={inputStyle}
          value={searchText}
          onChange={searchHandler}
        />
        <FindInPageIcon fontSize='large' sx={searchIcon} />
      </div>
    </header>
  );
}

export default Header;
