"use strict";
$(document).ready(function () {
    //Click Function used to toggle first and second frame
    $('#btn1').click(function () {
        var oldClass = $(this).prev().attr('class').split(' ')[1];
        var newClass = $(this).parent().next().children().first().attr('class').split(' ')[1];
        //Toggles first frame class
        $(this).prev().attr('class', 'frame ' + newClass)
        //Toggles second frame class
        $(this).parent().next().children().first().attr('class', 'frame ' + oldClass);
    })

    //Click Function used to toggle middle frame with random frame
    $('#btn2').click(function () {
        var choice = Math.floor(Math.random() * 2);
        var frameChoice = (choice) ? $(this).parent().prev() : $(this).parent().next();
        var oldClass = $(this).prev().attr('class').split(' ')[1];
        var newClass = frameChoice.children().first().attr('class').split(' ')[1];
        $(this).prev().attr('class', 'frame ' + newClass);
        frameChoice.children().first().attr('class', 'frame ' + oldClass);
    })

    //Click Function used to toggle second and last frame
    $('#btn3').click(function () {
        var oldClass = $(this).prev().attr('class').split(' ')[1];
        var newClass = $(this).parent().prev().children().first().attr('class').split(' ')[1];
        $(this).prev().attr('class', 'frame ' + newClass);
        $(this).parent().prev().children().first().attr('class', 'frame ' + oldClass);
    })

})