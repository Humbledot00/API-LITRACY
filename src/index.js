import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Navbar, HealthNews, LameJoke } from './App';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>,
  document.getElementById('Card')
);

ReactDOM.render(
  <React.StrictMode>
    <HealthNews />
  </React.StrictMode>,
  document.getElementById('HealthNews')
);

ReactDOM.render(
  <React.StrictMode>
    <LameJoke />
  </React.StrictMode>,
  document.getElementById('LameJoke')
);

