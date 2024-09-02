import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').html(`${count} clicks on the button`);
}

$(document).ready(function() {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append("<p id='count'></p>");
  $('body').append('<p>Copyright - Holberton School</p>');

  // Bind debounce function from Lodash to button click
  $('button').on('click', _.debounce(updateCounter, 300));
});
