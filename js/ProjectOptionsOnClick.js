$(document).ready(function() {

    $(".slide-options-games-one").click(function() {
        if($(".slide-text-games-container-one").hasClass("hide-text")){
            $(".slide-text-games-container-one").removeClass("hide-text").addClass("show-text");
            
            $(".slide-text-games-container-two").removeClass("show-text").addClass("hide-text");
            $(".slide-text-games-container-three").removeClass("show-text").addClass("hide-text");
            $(".slide-text-games-container-four").removeClass("show-text").addClass("hide-text");
        }
    });

    $(".slide-options-games-two").click(function() {
        if($(".slide-text-games-container-two").hasClass("hide-text")){
            $("slide-text-games-container-two").removeClass("hide-text").addClass("show-text");

            $(".slide-text-games-container-one").removeClass("show-text").addClass("hide-text");
            $(".slide-text-games-container-three").removeClass("show-text").addClass("hide-text");
            $(".slide-text-games-container-four").removeClass("show-text").addClass("hide-text");
        }
    })

    $(".slide-options-games-three").click(function() {
        if($(".slide-text-games-container-three").hasClass("hide-text")){
            $("slide-text-games-container-three").removeClass("hide-text").addClass("show-text");

            $(".slide-text-games-container-one").removeClass("show-text").addClass("hide-text");
            $(".slide-text-games-container-two").removeClass("show-text").addClass("hide-text");
            $(".slide-text-games-container-four").removeClass("show-text").addClass("hide-text");
        }
    })

    $(".slide-options-games-four").click(function() {
        if($(".slide-text-games-container-four").hasClass("hide-text")){
            $("slide-text-games-container-four").removeClass("hide-text").addClass("show-text");

            $(".slide-text-games-container-one").removeClass("show-text").addClass("hide-text");
            $(".slide-text-games-container-three").removeClass("show-text").addClass("hide-text");
            $(".slide-text-games-container-two").removeClass("show-text").addClass("hide-text");
        }
    })


});