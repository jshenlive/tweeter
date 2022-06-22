// document.addEventListener("input",(event)=>{
//   console.log(this);
// }) 

$(document).ready(function() {
  $("textarea").keyup(function(){
    let count = $(this).val();
    let sum = 140-count.length;

    if (sum < 0){
      $(this).parent().find(".counter").text(sum).css("color","red");
    }else{
      $(this).parent().find(".counter").text(sum);
    }
  })
});
