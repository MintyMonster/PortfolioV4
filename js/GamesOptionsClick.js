$(document).ready(function() {

    var optionOne = $(".slide-options-games-one");
    var optionTwo = $(".slide-options-games-two");
    var optionThree = $(".slide-options-games-three");
    var optionFour = $(".slide-options-games-four");

    var containerOne = $(".slide-text-games-container-one");
    var containerTwo = $(".slide-text-games-container-two");
    var containerThree = $(".slide-text-games-container-three");
    var containerFour = $(".slide-text-games-container-four");

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