"use strict";
$(document).ready(function() {
    // alert( 'The DOM has finished loading!' );


    // Id Selectors
    var mainTitle = $('#main-title').html('Changed the MAIN TITLE!!')
    // var idContents = $('#para1').html();
    // alert('The content of ID para1 is : ' + idContents);
    //
    // var liFourContents = $('#liFour').html();
    // alert('The content of ID liFour is : ' + liFourContents);
    //
    // //Use the same id on 2 elements. How does this change the jQuery selection?
    // //Will only select the first ID not the second.
    //
    // var idOfLi = $('#li').html();
    // alert('The content of ID li is : ' + idOfLi);

    //Class Selectors
    // $('.codeup').css('border','1px solid red');
    //Give another element an id of codeup. Does this element get a border now?
    // No that element does that get a border.

    //Element Selectors

    // $('li').css('font-size','20px');
    //
    // $('h1').css('background-color', 'yellowgreen');
    // $('p').css('background-color', 'yellowgreen');
    // $('li').css('background-color', 'yellowgreen');
    // var h1Contents = $('h1').html();
    // alert(h1Contents);
    //Multiple Selectors

    // $('h1, p,li').css('background-color', 'green');


    //MOUSE EVENTS
    mainTitle.click(function(){
        $(this).css('background','cadetblue');
    });

    var paragraphs = $('p');
    paragraphs.dblclick(function(){
        $(this).css('font-size','18px');
    });

    var li = $('li');
    li.hover(function (){
        $(this).css('color', 'red');
    }, function (){
        $(this).css('color', 'black');
    });
});

//Remove your custom jQuery code from previous exercises.
//
// Add jQuery code that will change the background color of an h1 element when clicked.
//
// Make all paragraphs have a font size of 18px when they are double clicked.
//
// Set all li text color to red when the mouse is hovering; reset to black when it is not.
