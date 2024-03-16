$(document).ready(function () {

    $(".games-options-list-link").click(function() {

        if($(".games-slide-container").hasClass("hide-container")){
            $(".software-slide-container").removeClass("show-container").addClass("hide-container");
            $(".website-slide-container").removeClass("show-container").addClass("hide-container");
            $(".games-slide-container").removeClass("hide-container").addClass("show-container");

            $(".slide-option-container-games").removeClass("hide-container").addClass("show-container");
            $(".slide-option-container-website").removeClass("show-container").addClass("hide-container");
            $(".slide-option-container-software").removeClass("show-container").addClass("hide-container");
        }
    });

    $(".website-options-list-link").click(function() {

        if($(".website-slide-container").hasClass("hide-container")){
            $(".software-slide-container").removeClass("show-container").addClass("hide-container");
            $(".games-slide-container").removeClass("show-container").addClass("hide-container");
            $(".website-slide-container").removeClass("hide-container").addClass("show-container");
            
            $(".slide-option-container-website").removeClass("hide-container").addClass("show-container");
            $(".slide-option-container-games").removeClass("show-container").addClass("hide-container");
            $(".slide-option-container-software").removeClass("show-container").addClass("hide-container");
        }
    });

    $(".software-options-list-link").click(function() {
        
        if($(".software-slide-container").hasClass("hide-container")){
            $(".website-slide-container").removeClass("show-container").addClass("hide-container");
            $(".games-slide-container").removeClass("show-container").addClass("hide-container");
            $(".software-slide-container").removeClass("hide-container").addClass("show-container");
  
            
            $(".slide-option-container-software").removeClass("hide-container").addClass("show-container");
            $(".slide-option-container-games").removeClass("show-container").addClass("hide-container");
            $(".slide-option-container-website").removeClass("show-container").addClass("hide-container");
        }
    });

});