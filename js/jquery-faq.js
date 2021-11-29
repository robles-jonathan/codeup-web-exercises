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

    // Use button to change background to last LI to all ULs
    $('#btn-1').click(function(){
        $('ul').each(function (index, element) {
            $(element).children().last().css('background', 'yellow');
        });
    });

    $('h3').click(function(){
        $(this).next().css('font-weight', 'bold');
    })

    $('li').click(function(){
        $(this).parent().children().first().css('color', 'blue');
    })


})