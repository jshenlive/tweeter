$(document).ready(function() {
  $("#icons").children().hover(function(){
    $(this).css("color","red");
  }, function(){
    $(this).css("color","black");
  })},
);

$(document).ready(  function(){
  $("article").hover(function(){
    $(this).css("box-shadow","5px 5px 5px orange");
  }, function(){
      $(this).css("box-shadow","")
  })
});
