import React from 'react';
import ReactDOM from 'react-dom';

const Index = () => {
  return (
    <div> this is a divv </div>
  )
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Index />, wrapper) : false;
