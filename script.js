
$(document).ready(function() {

    
    $(".project img").on("mouseover", projectRevealCard);
    $(".project img").on("mousedown", projectHighlightCard);
    $(".project img").on("mouseup",   projectCardFlip);

    $("#work").addClass("displayWork");
    fadeInProjects();

});


var projectRevealCard = function(event) {
    $(".project img").removeClass("revealCardImage");
    let cardImage = $(event.target);
    cardImage.addClass("revealCardImage");
}
var projectHighlightCard = function(event) {
    $(".project img").removeClass("highlightCardImage");
    let cardImage = $(event.target);
    cardImage.addClass("highlightCardImage");
}
var projectCardFlip = function(event) {
    $(".projectInfo").removeClass("slideUp");
    let cards = $(".project img");
    cards.removeClass("revealCardImage");
    $(".projectInfo").removeClass("slideUp");
    let card = $(event.target);
    let info = card.next(".projectInfo")[0];
    $(info).addClass("slideUp");
}

var fadeInProjects = function() {
    const projects = $(".project");
    projects.each( (index,project) => {
        
        setTimeout( () => {
           // console.log(project);
            $(project).addClass("displayProject");
        }, 500+  (240*index));
    });
}