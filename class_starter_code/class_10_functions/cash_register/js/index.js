$(document).ready(function() {

  var total = 0;

  $('.entry').submit(transactionSubmit);

  function transactionSubmit(evt) {
    evt.preventDefault();

    var newVal = $('.new-entry').val();

    newVal = parseFloat(newVal);

    $('.entries').append('<li>' + newVal + '</li>');

    total += newVal;

    formatCurrency();

    $('.total').text('$' + total);

    $('.new-entry').val("");
  };

  function formatCurrency(number) {
    console.log(number);

    // Do code to format currency
  }


}); // end ready