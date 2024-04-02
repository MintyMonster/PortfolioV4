$(document).ready(function () {
    var jsonData; // Declare a variable to store the JSON data

    $.getJSON('../json/images.json', function (data) {
        jsonData = data; // Store the JSON data in the variable
        $.each(data.images, function (index, item) {
            var grid = `
            <div class="projects-image-container ${item.category}">
                <img src="${item['url-icon']}" alt="${item['name']} image" class="project-image">
                <div class="overlay">
                    <div class="title">${item['name']}</div>
                    <a href="#" class="learn-more-link" data-item-id="${item.id}">
                        <div class="learn-more">Learn more</div>
                    </a>
                </div>
            </div>
            `;
            $('#projects-container').append(grid);
        });
    });

    $('#projects-container').on('click', '.learn-more-link', function (event) {
        event.preventDefault();
        var itemId = $(this).data('item-id');
        var itemData = getItemDataById(itemId); // Pass itemId only, since jsonData is in the outer scope
        console.log("itemId:", itemId);
        console.log("jsonData:", jsonData);
        console.log("parsed", itemData);

        if (itemData) {
            console.log("Item data found for itemId:", itemId);
            $(".modal-title").text(itemData.name);
            $(".modal-description").text(itemData.description);
            $(".projects-modal-full").addClass("show");

            $(".modal-icons").empty();
            $.each(itemData.icons, function (index, icon) {
                var iconHtml = `<li class="icon-li" alt="icon"><i class="${icon}"></i></li>`;
                $(".modal-icons").append(iconHtml);
            });

            // Animations
            setTimeout(function () {

                $(".modal-icons").addClass("slide-in");
                $(".modal-github").addClass("slide-in-github");
                $(".modal-title").addClass("slide-in");
                $(".projects-modal-image").addClass("show");
                $(".modal-description").addClass("show");

            }, 100);

            $(".projects-modal-image").attr('src', itemData['url-full']);
            $(".modal-github").attr('href', itemData['github']);
        } else {
            console.log("Item data is undefined for itemId:", itemId);
        }
    });

    $('.modal-close, .projects-modal-full').click(function () {
        $(".projects-modal-full").removeClass("show");
        $(".modal-icons").removeClass("slide-in");
        $(".modal-github").removeClass("slide-in-github");
        $(".modal-title").removeClass("slide-in");
        $(".projects-modal-image").removeClass("show");
        $(".modal-description").removeClass("show");
    });

    $(".projects-modal").click(function (event) {
        event.stopPropagation();
    });

    function getItemDataById(itemId) {
        // Convert itemId to a string
        itemId = String(itemId).trim();
        console.log("Searching for itemId:", itemId);
        for (let i = 0; i < jsonData.images.length; i++) {
            // Check for exact match without trimming
            if (jsonData.images[i].id === itemId) {
                console.log("Found itemData:", jsonData.images[i]);
                return jsonData.images[i];
            }
        }
        console.log("Item with itemId", itemId, "not found.");
        return null; // Or any other appropriate value to indicate that the item wasn't found
    }


});




const shuffleArray = (array) => {

    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;

    }

    return array;
}
