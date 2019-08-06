import React from 'react';
import ReactDOM from 'react-dom';

import 'jquery';
import 'popper.js';
import 'bootstrap';
import './app.scss';

export default function App() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <h1 className="text-center">Workflow webpack + ReactJS</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('[data-react]'));
