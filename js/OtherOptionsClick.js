$(document).ready(function() {

    var options = [$(".slide-options-other-one"), $(".slide-options-other-two"), $(".slide-options-other-three"), $(".slide-options-other-four")];
    var containers = [$(".slide-text-other-container-one"), $(".slide-text-other-container-two"), $(".slide-text-other-container-three"), $(".slide-text-other-container-four")];
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