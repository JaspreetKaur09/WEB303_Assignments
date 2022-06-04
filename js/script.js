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
        let elm = document.getElementById("a#prospect");
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
      let elm = document.getElementById("a#convert");
      elm.innerHTML = xhr.responseText;
        
    }
};
xhr.send();
}

function makeXHRCallForJSON(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "retain.html");

 
xhr.onload = function (){
    if (xhr.status === 200){
      let elm = document.getElementById("a#retain");
      elm.innerHTML = xhr.responseText;
        
    }
};
xhr.send();
}
