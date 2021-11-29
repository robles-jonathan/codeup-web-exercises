"use strict";
$(document).ready(function(){
    var heading = $("#heading").html();
    // alert(heading);

    var cardContents = $(".card").html();
    $(".card").html("<h2> Howdy from javascript </h2> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut autem cumque deleniti dolorem, dolorum eius esse eum fuga incidunt laborum nihil, odio porro provident quaerat quam qui repudiandae voluptate!</p>");


    alert($("#box").css("width"));

    $("#box").css("background", "cadetblue");
    $("#box").css("border-style", "dashed").css("opacity",".5")

    $("#box").css({
        "border-color": "red",
        "border-radius": "50%",
        "width": "400px",
        "height": "400px"
    });

    $("p").addClass("highlighted").addClass("underline");

    $(".highlighted").click(function(){
        $(this).removeClass("highlighted");
    });

    $("p").click(function(){
        $(this).toggleClass("underline");
    });

})