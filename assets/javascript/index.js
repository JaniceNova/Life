
// var a = 0;

// $(".square").click(function () {
//     if (a === 0){
//     $("#square1").html("<input type='text' name='lastname' value='Mouse'><br><br><input type='submit' value='Submit'>")
//      a=1
//                 }   
//     else{
//      $("#square1").html("")
//       a=0
//              }   
//   });
 

$("#submit").click(function (evt) {
   
  evt.preventDefault();
  if ($("#inputbox").val().toLowerCase()==="life"){
    window.location.href="page2.html";
  }
  
  });