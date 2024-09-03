import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append('<main></main>');
$('main').append('<button>Click me</button>');
$('main').append('<p id="count">0</p>');

let count = 0;
$('button').on('click', _.debounce(() => {
  count += 1;
  $('#count').text(count);
}, 500));
