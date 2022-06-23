//Counts the number of characters in the textarea 
// - will color to red when length of text is greater than maxLength

const maxLength = 140;

$(document).ready(function() {
  $("textarea").keyup(function(){
    let count = $(this).val();
    let sum = maxLength-count.length;

    if (sum < 0){
      $(this).parent().find(".counter").text(sum).css("color","red");
      $("#error-message2").slideUp();
    }else{
      $(this).parent().find(".counter").text(sum).css("color","#545149");
    }
  })
});
