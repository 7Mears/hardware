$(document).ready(function () {

  // add class
  $('.search').on('click', 'input', function() {
    $('#canvas').addClass('selected');
  });

  // remove class
  $('#canvas').on('click', function() {
    $(this).removeClass('.selected');
  });

});
