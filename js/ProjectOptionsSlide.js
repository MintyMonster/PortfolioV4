$(document).ready(function () {

    var hideClass = "hide-container";
    var showClass = "show-container";
    var selected = "selected-option";

    $(".games-options-list-link").click(function() {
        toggleContainers(".games-slide-container", ".slide-option-container-games");
    });

    $(".website-options-list-link").click(function() {
        toggleContainers(".website-slide-container", ".slide-option-container-website");
    });

    $(".software-options-list-link").click(function() {
        toggleContainers(".software-slide-container", ".slide-option-container-software");
    });

    $(".other-options-list-link").click(function() {
        toggleContainers(".other-slide-container", ".slide-option-container-other");
    })

    function toggleContainers(slideContainer, slideOptionContainer) {
        $(".slide-container, .slide-option-container").removeClass(showClass).addClass(hideClass);
        $(slideContainer + ", " + slideOptionContainer).removeClass(hideClass).addClass(showClass);
    }
});
