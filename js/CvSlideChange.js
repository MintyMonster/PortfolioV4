$(document).ready(function() {

    var navWork = $(".cv-nav-work");
    var navEdu = $(".cv-nav-education");

    var workContainer = $(".work-container");
    var educContainer = $(".education-container");

    $(navWork).click(function() {
        $(workContainer).addClass("show-text").removeClass("hide-text");
        $(educContainer).addClass("hide-text").removeClass("show-text");
    });

    $(navEdu).click(function() {
        $(educContainer).addClass("show-text").removeClass("hide-text");
        $(workContainer).addClass("hide-text").removeClass("show-text");
    });
});