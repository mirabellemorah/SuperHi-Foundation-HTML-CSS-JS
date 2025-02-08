//$('.showFilters').on('click', function () {
  //if ($('.filtersLists').is(':visible')) {
    //$('.filtersLists').slideUp(400);
    //$('.showFilters').text('Show filters');
  //} else {
    //$('.filtersLists').slideDown(400);
  
 //   $('.showFilters').text('Hide filters');
  //}
  //return false;
//});

$('.showFilters').on('click', function () {
    if ($('.filtersLists').is(':visible')) {
      $('.filtersLists').hide(); // Hides the element
      $('.showFilters').text('Show weeks');
    } else {
      $('.filtersLists').css('display', 'flex').show(); // Ensures display is flex
      $('.showFilters').text('Hide weeks');
    }
    return false;
  });
  
  $('.filtersLists a').on('click', function () {
  //get the value of the data filter attribute
  var filter = $(this).attr('data-filter')
  
    $('.website').hide()
    $(filter).show()
  
    $('.filtersLists a').removeClass('selected')
    $(this).addClass('selected')
  
    return false
  })