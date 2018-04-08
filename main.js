$(document).ready(function(){
    'use strict';
    paper.install(window); // installs Paper.js in global scope
    paper.setup(document.getElementById('mainCanvas')); // attaches Paper.js to canvas


    var tool = new Tool();
    var c = Shape.Circle(200, 200, 80); // cercul1 si coordonatele sale
    c.fillColor = 'black'; // culoarea cercului1
    var text = new PointText(200, 200); // bucata unde va aparea textul 
    text.justification = 'center'; // textul va fi in mijlocul cercului.
    text.fillColor = '#f4f4'; // culoarea textului
    text.fontSize = 20; // marimea textului
    text.content = 'hello world'; // textul in sine-> hello world
    tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = 'red';
    };


    paper.view.draw(); // tells Paper.js to actually draw smthing on screen.
});

// acest program este realizat cu libraria Paper.js
