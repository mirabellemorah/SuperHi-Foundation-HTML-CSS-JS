$(".photos a").on("click", function (ev) {
 
    //$(this).addClass("clicked");
    
    $("div.modal").fadeIn(500);
    
    var content = $(this).html()
    
    //grab modal and set it to the current image clicked
    $("div.modal-content").html(content);
    
    ev.preventDefault();
  });
  
  $("div.modal-background, div.modal-close").on("click", function (ev) {
    $("div.modal").fadeOut(500);
    ev.preventDefault();
  });