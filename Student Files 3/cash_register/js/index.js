$(document).ready(start);

var total = 0.0;

function start(){
  $('#entry').submit(runRegister);
}

//example for code to recall CSS
// function runRegister(e) {
//   e.preventDefault();
//   $('body').css('backgroundColor', 'black');
// }

function runRegister(e) {
  e.preventDefault();
  getItemValue();
  var itemValue = getItemValue();
  total = total + itemValue;
  console.log(total);
  writeTotaltoPage();
  clearValueInput();
  writeLineItem(itemValue);
} //"recipe" of the application- tells what the application needs to do
  //PART OF THE PROGRAM THAT DOES THE PROGRAM

function getItemValue() {
  var rawInput= $('#newEntry').val();
  var floatInput= parseFloat(rawInput);
  return floatInput;
}

function writeTotaltoPage() {
  var roundedTotal= total.toFixed(2);
  $('#total').text(roundedTotal);
}

function clearValueInput(){
  $('#newEntry').val('');
}

function writeLineItem(price) {
  price = price.toFixed(2);
  var row = '<tr><td>' + '$' + price + '</td></tr>';
  $('#entries').append(row);
}
