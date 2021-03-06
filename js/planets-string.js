(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * It could be useful to manipulate the way it is displayed on the HTML file.
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    planetsString = planetsArray.join('<br>');
    console.log(planetsString);

    var htmlString ="<ul><li>";
    htmlString += planetsArray.join('</li><li>');
    htmlString += "</li></ul>";

    document.getElementById("planets").innerHTML = planetsString;
    document.getElementById("planetsList").innerHTML = htmlString;
    document.write(htmlString)
    // document.body.innerHTML = htmlString;

})();
