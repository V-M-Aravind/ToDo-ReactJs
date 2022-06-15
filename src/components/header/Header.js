import React, { useState } from 'react';
import FindInPageIcon from '@mui/icons-material/FindInPage';

function Header({ setsearchResults, todoList }) {
  const [searchText, setSearchText] = useState('');
  const inputStyle = {
    textAlign: 'center',
    width: '30%',
    padding: '1rem 0',
    margin: '1rem 0rem',
    border: 'none',
    borderRadius: '2rem',
  };
  const searchIcon = {
    position: 'absolute',
    paddingRight: '3rem',
    top: '4rem',
    right: '25rem',
  };
  const searchHandler = (event) => {
    const text = event.target.value;
    setSearchText(text);
    if (text.length < 1) {
      setsearchResults(todoList);
    } else {
      setsearchResults((p) => {
        return p.filter((t) =>
          Object.values(t).join(' ').toLowerCase().includes(text.toLowerCase())
        );
      });
    }
  };

  return (
    <header style={{ textAlign: 'center', margin: '2rem' }}>
      <h1 style={{ display: 'inline-block', marginLeft: '32%' }}>
        My ToDo List
      </h1>
      <span style={{ marginLeft: '6rem' }}>
        <input
          type='search'
          placeholder='search ToDo'
          style={inputStyle}
          value={searchText}
          onChange={(event) => {
            searchHandler(event);
          }}
        />
        <FindInPageIcon fontSize='large' sx={searchIcon} />
      </span>
    </header>
  );
}

export default Header;
