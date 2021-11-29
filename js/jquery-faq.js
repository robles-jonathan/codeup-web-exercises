"use strict";
$(document).ready(function() {
    $('body').append('<a href="#" id="displayLink">Toggle Display of Content</a>')
    $('body').append('<button type="button" id="displayContent">Toggle Display of Content</button>')

    $('#displayContent').click(function(){
        $('dd').toggleClass("invisible");
    })

    $('#displayLink').click(function(){
        $('dd').toggleClass("invisible");
    })

    $('dt').click(function(){
        $(this).addClass('highlight');
    })
})