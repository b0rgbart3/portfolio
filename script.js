// When the document has fully loaded
$(document).ready(function() {

    $(".closer").css({"display":"none"});

    // assign event handlers to the project images
    $(".project img").on("mouseover", projectRevealCard);
    $(".project img").on("mousedown", projectHighlightCard);
    $(".project img").on("mouseup",   projectCardFlip);
    $(".closer").on("mouseup", reset);

    // start the fade-in of the project work
    $("#work").addClass("displayWork");
    $("#work").on("mouseup", touchBody);
    $("html").on("mouseup", touchBody);
    fadeInProjects();

});

var touchBody = function() {
console.log("touched body");
reset();
}

// handle hover effect for project images
var projectRevealCard = function(event) {
    event.stopPropagation();
    $(".project img").removeClass("revealCardImage");
    let cardImage = $(event.target);
    cardImage.addClass("revealCardImage");
}
// handle mouse down for project images
var projectHighlightCard = function(event) {
    event.stopPropagation();
    $(".project img").removeClass("highlightCardImage");
    let cardImage = $(event.target);
    cardImage.addClass("highlightCardImage");
}
// handle mouse up (full click) for project images to reveal Info Card
var projectCardFlip = function(event) {
    event.stopPropagation();

    // remove the reveal from all the other card images
    let cards = $(".project img");
    cards.removeClass("revealCardImage");

    // remove the turnOn Class from all the closers
    $(".closer").removeClass("turnOn");

    // first remove this class from the other project images
    $(".projectInfo").removeClass("slideUp");
    let card = $(event.target);

    // turn off all the other closers -- and turn on this one
    let closer = card.parent().find(".closer");
    // add the turnOnClass for just this one closer
    closer.css({"display":"inline-block"});
    closer.addClass("turnOn");

    let info = card.next(".projectInfo")[0];
    $(info).addClass("slideUp");
    
}

var reset = function() {
    // turn off all the closer icons
    $(".closer").css({"display":"none"});
    $(".closer").removeClass("turnOn");

    // turn off all hover styling on the card images
    $(".project img").removeClass("revealCardImage");

    // turn off all highlight styling for the card images
    $(".project img").removeClass("highlightCardImage");

    // send all the info cards back to their original positions
    $(".projectInfo").removeClass("slideUp");

    
   
}

// Set up a sequence of fade in's for all the projects
var fadeInProjects = function() {
    const projects = $(".project");
    projects.each( (index,project) => {
        
        setTimeout( () => {
           // console.log(project);
            $(project).addClass("displayProject");
        }, 500+  (240*index));
    });
}