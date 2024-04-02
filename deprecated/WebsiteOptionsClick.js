$(document).ready(function() {

    var options = [$(".slide-options-website-one"), $(".slide-options-website-two"), $(".slide-options-website-three"), $(".slide-options-website-four")];
    var containers = [$(".slide-text-website-container-one"), $(".slide-text-website-container-two"), $(".slide-text-website-container-three"), $(".slide-text-website-container-four")];
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