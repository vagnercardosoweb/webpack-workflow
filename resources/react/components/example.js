import React from 'react';
import ReactDOM from 'react-dom';

import { parsedHtmlDataset } from '../../utils';

function Example() {
  return <h1>React example</h1>;
}

const element = document.getElementById('react-example');

if (element) {
  const dataset = parsedHtmlDataset(element.dataset);
  ReactDOM.render(<Example {...dataset} />, element);
}
