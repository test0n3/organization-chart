import React from 'react';
import { render } from 'react-dom';
import App from './app'
import CeoName from './components/ceo-view';

const $root = document.getElementById('root');

render(<CeoName />, $root);