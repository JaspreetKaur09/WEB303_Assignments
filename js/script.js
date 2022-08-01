// Jaspreet Kaur 0784780

$(document).ready(function () {
    $("dearch").on("keyup", function (){
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            if (value == "") {
              $("#myTable tr").removeClass("highlight");
            } else $(this).toggleClass("highlight", $(this).text().toLowerCase().indexOf(value) != -1);
        });
    });

});