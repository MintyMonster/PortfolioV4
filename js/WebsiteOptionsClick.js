$(document).ready(function() {

    var optionOne = $(".slide-options-website-one");
    var optionTwo = $(".slide-options-website-two");
    var optionThree = $(".slide-options-website-three");
    var optionFour = $(".slide-options-website-four");

    var containerOne = $(".slide-text-website-container-one");
    var containerTwo = $(".slide-text-website-container-two");
    var containerThree = $(".slide-text-website-container-three");
    var containerFour = $(".slide-text-website-container-four");

    var hide = "hide-text";
    var show = "show-text";

    $(optionOne).click(function() {
        if($(containerOne).hasClass(hide)){
            $(containerOne).removeClass(hide).addClass(show);
            
            $(containerTwo).removeClass(show).addClass(hide);
            $(containerThree).removeClass(show).addClass(hide);
            $(containerFour).removeClass(show).addClass(hide);
        }
    });

    $(optionTwo).click(function() {
        if($(containerTwo).hasClass(hide)){
            $(containerTwo).removeClass(hide).addClass(show);

            $(containerThree).removeClass(show).addClass(hide);
            $(containerFour).removeClass(show).addClass(hide);
            $(containerOne).removeClass(show).addClass(hide);
        }
    });

    $(optionThree).click(function() {
        if($(containerThree).hasClass(hide)){
            $(containerThree).removeClass(hide).addClass(show);

            $(containerTwo).removeClass(show).addClass(hide);
            $(containerFour).removeClass(show).addClass(hide);
            $(containerOne).removeClass(show).addClass(hide);
        }
    });

    $(optionFour).click(function() {
        if($(containerFour).hasClass(hide)){
            $(containerFour).removeClass(hide).addClass(show);

            $(containerOne).removeClass(show).addClass(hide);
            $(containerTwo).removeClass(show).addClass(hide);
            $(containerThree).removeClass(show).addClass(hide);
        }
    });


});