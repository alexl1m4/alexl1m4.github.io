var date = new Date();

var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var day = date.getDay();

var time = document.querySelector('.time');
var dateTime = document.querySelector('.time');

var now = new Date();

var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

var day = now.getDay();
var date = now.getDate();
var month = now.getMonth();
var year = now.getFullYear();

var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',];
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

hours = hours % 12 || 12;
minutes = minutes < 10 ? 'AM' : 'PM';



