$(document).ready(function(){
    'use strict';
    paper.install(window); // installs Paper.js in global scope
    paper.setup(document.getElementById('mainCanvas')); // attaches Paper.js to canvas


    var tool = new Tool();
    var c = Shape.Circle(200, 200, 80); // circle and his coordonates
    c.fillColor = 'black'; // circle color
    var text = new PointText(200, 200); // text 
    text.justification = 'center'; // text's position will be centered
    text.fillColor = '#f4f4'; // text color
    text.fontSize = 20; // text size
    text.content = 'hello world'; // text = 'hello world' 
    tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = 'red';
    };


    paper.view.draw(); // tells Paper.js to actually draw smthing on screen.
});

// made with jQuery and Paper.js 
