$(document).ready(function() {

    var optionOne = $(".slide-options-software-one");
    var optionTwo = $(".slide-options-software-two");

    var containerOne = $(".slide-text-software-container-one");
    var containerTwo = $(".slide-text-software-container-two");

    var hide = "hide-text";
    var show = "show-text";

    $(optionOne).click(function() {
        if($(containerOne).hasClass(hide)){
            $(containerOne).removeClass(hide).addClass(show);
            
            $(containerTwo).removeClass(show).addClass(hide);
        }
    });

    $(optionTwo).click(function() {
        if($(containerTwo).hasClass(hide)){
            $(containerTwo).removeClass(hide).addClass(show);
            $(containerOne).removeClass(show).addClass(hide);
        }
    });


});