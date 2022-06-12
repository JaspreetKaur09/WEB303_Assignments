// WEB303 Assignment 3
// Jaspreet Kaur

$.getJSON("data/glitchTeam.json", function (JSONDataFromFile, statusText, jqXHRObject){
    $.each(JSONDataFromFile.members, function(i, val){
     
        let nameObject = $(`<h4 class="getJSONRequest">${val.fullname}</h4>`);
        let positionObject = $(`<h6 class="getJSONRequest">${val.position}</h6>`);
        let shortbioObject = $(`<pclass="getJSONRequest">${val.shortbio}</p>`);
        $("div#glitch-team")
        .append(nameObject)
        .append(positionObject)
        .append(shortbioObject);
    });
});

$.ajax({
    url: "glitchTeam.json",

    beforeSend: function (){
           let loadText = $("<h2></h2>").text("Loading team...");
           $(`div#glitch-team`).append(loadText);
    },
    error: function(){
        alert("OOPs! Content could not be retrieved.")
    },

    success: function(){
        forEach()
    }
});

$(function(){
   $('').on
});
