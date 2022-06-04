// WEB303 Assignment 2
// Jaspreet Kaur


$(function () {
    $("#content-wrapper").on("click", function () {
      makeXHRCallForJSON();
    });
  });

  function makeXHRCallForJSON(){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', "prospect.html");
  
   
  xhr.onload = function (){
      if (xhr.status === 200){
        let elm = document.getElementById("prospect");
        elm.innerHTML = xhr.responseText;
          
      }
  };
  xhr.send();
}

function makeXHRCallForJSON(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "convert.html");

 
xhr.onload = function (){
    if (xhr.status === 200){
      let elm2 = document.getElementById("convert");
      elm2.innerHTML = xhr.responseText;
        
    }
};
xhr.send();
}

 function makeXHRCallForJSON(){
    var xhr = new XMLHttpRequest();
  xhr.open('GET', "retain.html");

 
 xhr.onload = function (){
     if (xhr.status === 200){
       let elm3 = document.getElementById("retain");
       elm3.innerHTML = xhr.responseText;
           }
 };
 xhr.send();
}







