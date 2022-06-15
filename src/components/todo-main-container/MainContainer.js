import React from 'react';

function MainContainer({ children }) {
  const myStyle = {
    display: 'flex',
    flexWrap: 'nowrap',
    backgroundColor: '#fafcde',
    margin: '2rem',
    paddingLeft: '2rem',
  };
  return <div style={myStyle}>{children}</div>;
}

export default MainContainer;
