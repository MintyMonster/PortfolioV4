$(document).ready(function () {

    var hide = "hide-container";
    var show = "show-container";

    $(".games-options-list-link").click(function() {
        toggleContainers(".games-slide-container", ".slide-option-container-games");
    });

    $(".website-options-list-link").click(function() {
        toggleContainers(".website-slide-container", ".slide-option-container-website");
    });

    $(".software-options-list-link").click(function() {
        toggleContainers(".software-slide-container", ".slide-option-container-software");
    });

    function toggleContainers(slideContainer, slideOptionContainer) {
        var $slideContainers = $(".slide-container");
        var $slideOptionContainers = $(".slide-option-container");

        $slideContainers.removeClass(show).addClass(hide);
        $(slideContainer).removeClass(hide).addClass(show);

        $slideOptionContainers.removeClass(show).addClass(hide);
        $(slideOptionContainer).removeClass(hide).addClass(show);
    }

});
