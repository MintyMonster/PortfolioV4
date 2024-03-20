$(document).ready(function() {

    var options = [$(".slide-options-games-one"), $(".slide-options-games-two"), $(".slide-options-games-three"), $(".slide-options-games-four"), $(".slide-options-games-five"), $(".slide-options-games-six")];
    var containers = [$(".slide-text-games-container-one"), $(".slide-text-games-container-two"), $(".slide-text-games-container-three"), $(".slide-text-games-container-four"), $(".slide-text-games-container-five"), $(".slide-text-games-container-six")];
    var hide = "hide-text";
    var show = "show-text";

    options.forEach(function(option, index) {
        option.click(function() {
            containers.forEach(function(container, containerIndex) {
                if(containerIndex === index) {
                    container.removeClass(hide).addClass(show);
                } else {
                    container.removeClass(show).addClass(hide);
                }
            });
        });
    });
});