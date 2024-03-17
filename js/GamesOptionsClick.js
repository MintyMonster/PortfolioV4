$(document).ready(function() {

    var options = [$(".slide-options-games-one"), $(".slide-options-games-two"), $(".slide-options-games-three"), $(".slide-options-games-four")];
    var containers = [$(".slide-text-games-container-one"), $(".slide-text-games-container-two"), $(".slide-text-games-container-three"), $(".slide-text-games-container-four")];
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