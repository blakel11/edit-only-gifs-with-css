(function($){
  //iterate through each img
  $('img').each(function(i){
    var $src = $(this).attr('src').slice(-3);
    //if the last 3 letters === "gif" add a class to the object
    if($src === "gif") {
      $(this).addClass("gif");
    }
  });
})(jQuery);
