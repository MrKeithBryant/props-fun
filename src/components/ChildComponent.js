import React, { Component } from 'react';

export default ({onClick}) => (
  <div>Dumb Component receiving Props
    <div>
      <input type="submit" onClick={onClick}/>
    </div>
  </div>
);
