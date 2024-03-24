$(document).ready(function() {

    const svg = $(".svg-button");
    const navbar = $(".responsive-menu");

    const hide = $("hide-burger");
    const show = $("show-burger");


    $("#svg-button").click(function() {

        if($("#svg-button").hasClass("active")){

            $("#responsive-menu").removeClass("hide-burger").addClass("show-burger");

        }

        if(!$("#svg-button").hasClass("active")) {
            
            $("#responsive-menu").removeClass("show-burger").addClass("hide-burger");
        }

    });
});