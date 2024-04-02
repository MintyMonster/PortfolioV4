$(document).ready(function () {
    const content = $("#main-content-div");

    content.on('click', '.all-nav-link', function () {
        $(".projects-image-container").each(function () {
            $(this).show();
        })
    });

    content.on('click', '.games-nav-link', function () {
        console.log("Games nav link clicked!"); // Check if click event is captured
        $(".projects-image-container").each(function () {
            if (!$(this).hasClass('games')) {
                $(this).hide(); // Hide images not in the games category
            } else {
                $(this).show();
            }
        });
    });

    content.on('click', '.website-nav-link', function () {
        $(".projects-image-container").each(function () {
            if (!$(this).hasClass('website')) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });

    content.on('click', '.software-nav-link', function () {
        $(".projects-image-container").each(function () {
            if (!$(this).hasClass('software')) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });

    content.on('click', '.university-nav-link', function () {
        $(".projects-image-container").each(function () {
            if (!$(this).hasClass('university')) {
                $(this).hide();
            } else {
                $(this).show();
            }
        })
    })

});
