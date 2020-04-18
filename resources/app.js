import 'babel-polyfill';
import jQuery from 'jquery';
import 'bootstrap';
import './styles/app.scss';

if (typeof window !== 'undefined') {
  window.$ = global.$ = jQuery;
}
