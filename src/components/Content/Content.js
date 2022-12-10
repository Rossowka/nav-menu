import React from 'react';
import './style.scss'

function Content({ children }) {
  return <main className='content'>{ children }</main>;
}

export default Content;