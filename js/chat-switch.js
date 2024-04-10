$(document).ready(function () {

    var opened = false;

    const shuffleArray = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    var responses = [
        { id: "greetingOne", text: "Hi there!" },
        { id: "greetingTwo", text: "What can I do for you?" },
        { id: "helloOne", text: "Hello to you too! :)" },
        { id: "helloTwo", text: "How can I help today?" },
        { id: "contactOne", text: "Email: camerongliddell@gmail.com" },
        { id: "contactTwo", text: "Or, you can go here:" },
        { id: "contactThree", text: "<a href='https://cameronliddell.com/contactme.html' target='_blank' class='bot-message-link'>Contact page</a>" },
        { id: "workOne", text: "I've worked on plenty! " },
        { id: "workTwo", text: "Find my projects here: " },
        { id: "workThree", text: "<a href='https://cameronliddell.com/projects.html' target='_blank' class='bot-message-link'>Projects page</a>" },
        { id: "aboutOne", text: "What do you want to know?" },
        { id: "aboutTwo", text: "Some would call me interesting..." },
        { id: "aboutThree", text: "You can read here:" },
        { id: "aboutFour", text: "<a href='https://cameronliddell.com/aboutme.html' target='_blank' class='bot-message-link'>About me page</a>" },
        { id: "homeOne", text: "Want to go home?" },
        { id: "homeTwo", text: "Come on, let's go: " },
        { id: "homeThree", text: "<a href='https://cameronliddell.com/index.html' target='_blank' class='bot-message-link'>Home page</a>" },
        { id: "experienceOne", text: "Do you mean work experience?" },
        { id: "experienceTwo", text: "Read about it here:" },
        { id: "experienceThree", text: "<a href='https://cameronliddell.com/cv.html' target='_blank' class='bot-message-link'>CV</a>" },
        { id: "languagesOne", text: "Quite a few!" },
        { id: "languagesTwo", text: "C#, C++ and Java for games" },
        { id: "languagesThree", text: "HTML, CSS and JS for websites" },
        { id: "languagesFour", text: "See them all here:" },
        { id: "languagesFive", text: "<a href='https://cameronliddell.com/cv.html' target='_blank' class='bot-message-link'>CV</a>" },
        { id: "favouriteOne", text: "I think this was my favourite!" },
        { id: "favouriteTwo", text: "I loved making my portfolio." },
        { id: "favouriteThree", text: "I also enjoyed making Discord Cambot" },
        { id: "favouriteFour", text: "I enjoy most of the projects I make!" },
        { id: "githubOne", text: "I do have a Github!" },
        { id: "githubTwo", text: "I upload all of my projects there!" },
        { id: "githubThree", text: "Here, enjoy:" },
        { id: "githubFour", text: "<a href='https://github.com/MintyMonster' target='_blank' class='bot-message-link'>Github</a>" },
        { id: "instagramOne", text: "I love Instagram!" },
        { id: "instagramTwo", text: "I use it to show off my projects!" },
        { id: "instagramThree", text: "<a href='https://www.instagram.com/cameronliddelldev/' target='_blank' class='bot-message-link'>Instagram</a>" },
        { id: "codepenOne", text: "I haven't used it much" },
        { id: "codepenTwo", text: "But I do have one!" },
        { id: "codepenThree", text: "<a href='https://codepen.io/cameron-liddell' target='_blank' class='bot-message-link'>CodePen.io</a>" },
        { id: "threadsOne", text: "Threads is fun!" },
        { id: "threadsTwo", text: "<a href='https://www.threads.net/@cameronliddelldev' target='_blank' class='bot-message-link'>Threads</a>" },
        { id: "linkdinOne", text: "I use LinkdIn!" },
        { id: "linkdinTwo", text: "I use it to show off my skills!" },
        { id: "linkdinThree", text: "<a href='https://www.linkedin.com/in/cameron-liddell-977a47213/' target='_blank' class='bot-message-link'>LinkdIn</a>" },
        { id: "emailOne", text: "Email: camerongliddell@gmail.com" },
        { id: "emailTwo", text: "or you can click here:" },
        { id: "emailThree", text: "<a href='mailto:camerongliddell@gmail.com' target='_blank' class='bot-message-link'>Email</a>" },
        { id: "dadjokeOne", text: "Of course, here's one for you! :)"},
    ]

    var userResponses = [
        { id: "userHello", text: "Just saying hello!" },
        { id: "userContact", text: "How can I contact you?" },
        { id: "userWork", text: "What have you worked on? " },
        { id: "userAbout", text: "Where can I learn about you?" },
        { id: "userHome", text: "Can you take me home? :)" },
        { id: "userExperience", text: "What experience do you have?" },
        { id: "userLanguages", text: "What languages do you work with?" },
        { id: "userFavourite", text: "What was your favourite project? " },
        { id: "userGithub", text: "Do you have Github?" },
        { id: "userInstagram", text: "What's your Instagram?" },
        { id: "userCodepen", text: "Do you use CodePen?" },
        { id: "userThreads", text: "Do you use Threads?" },
        { id: "userLinkdin", text: "Have you got LinkdIn?" },
        { id: "userEmail", text: "Email?" },
        {id: "userDadjoke", text: "Can I have a dad joke?" }
    ]

    // Bot message
    const returnMessage = (id, time) => {
        var message = ``;

        responses.forEach((response) => {
            if (response.id == id) {
                message = `<div class="bot-message-container message">
                <div class="bot-message message-inner"><p>${response.text}</p></div>
            </div>`
            }
        });

        hideOptions(time + 100);
        setTimeout(() => $(".chat-content").append(message), time);
        setTimeout(() => $(".chat-content").scrollTop($(".chat-content").prop("scrollHeight")), time);
    }

    // User message
    const returnUserMessage = (id, time) => {
        var message = ``;

        userResponses.forEach((response) => {
            if (response.id == id) {
                message = `<div class="user-message-container message">
                <div class="user-message message-inner"><p>${response.text}</p></div>
            </div>`
            }
        });

        hideOptions(time + 100);
        setTimeout(() => $(".chat-content").append(message), time);
        setTimeout(() => $(".chat-content").scrollTop($(".chat-content").prop("scrollHeight")), time);
    }

    // Only works for keyless APIs rn
    const returnMessageAPI = (link, time) => {
        var message = ``

        $.ajax({
            url: link,
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            success: function(response) {
                message = `<div class="bot-message-container message">
                <div class="bot-message message-inner"><p>${response.joke}</p></div>
            </div>`;
            console.log(`Joke success: ${response.status}`);
            },
            error: function(xhr, status, error){
                message = `<div class="bot-message-container message">
                <div class="bot-message message-inner"><p>Something went wrong....</p></div>
            </div>`;
                console.log(`Joke error: ${response.status}`);
            }
        });

        hideOptions(time + 100);
        setTimeout(() => $(".chat-content").append(message), time);
        setTimeout(() => $(".chat-content").scrollTop($(".chat-content").prop("scrollHeight")), time);
    }

    const generateButtons = () => {
        $(".chat-footer").empty();
        var shuffledPrompts = shuffleArray(prompts);
        var randomPrompts = shuffledPrompts.slice(0, 3);
        randomPrompts.forEach((prompt) => {
            var $button = $("<div>").addClass("chat-option-button").text(prompt.text).attr("id", prompt.id);
            $button.click((e) => {
                prompt.action(e);
            });

            $(".chat-footer").append($button);
        })
    }

    const showOptions = (time) => {
        setTimeout(() => {
            generateButtons();
            $(".chat-footer").removeClass("chat-footer-hide").addClass("chat-footer-show");
            $(".chat-content").css('height', '64%');
            $(".chat-content").scrollTop($(".chat-content").prop("scrollHeight"));

        }, time);
    }

    const hideOptions = (time) => {
        setTimeout(() => {

            $(".chat-footer").removeClass("chat-footer-show").addClass("chat-footer-hide");
            $(".chat-content").removeAttr('style');
        });
    }

    const firstMessages = () => {

        if (!opened) {
            returnMessage("greetingOne", 550);
            returnMessage("greetingTwo", 1500);
            returnMessage("greetingThree", 2000);
            showOptions(2500);
            opened = true;
        }
    }

    // Chat functions

    const handleAction = (userMessage, messages, delay, e) => {
        returnUserMessage(userMessage, 200);
        messages.forEach((message, index) => {
            setTimeout(() => returnMessage(message, 400 + index * 400), 800 + index * 400);
        });
        showOptions(delay + 1200);
        e.stopPropagation();
    }

    const handleActionAPI = (userMessage, messages, link, delay, e) => {
        returnUserMessage(userMessage, 200);
        messages.forEach((message, index) => {
            setTimeout(() => returnMessage(message, 400 + index * 400), 800 + index * 400);
        });

        returnMessageAPI(link, 800 + 3 * 400);
        showOptions(delay + 1200);
        e.stopPropagation();
    }

    const helloFunc = (e) => handleAction("userHello", ["helloOne", "helloTwo"], 2000, e);
    const contactFunc = (e) => handleAction("userContact", ["contactOne", "contactTwo", "contactThree"], 2500, e);
    const projectsFunc = (e) => handleAction("userWork", ["workOne", "workTwo", "workThree"], 2500, e);
    const aboutFunc = (e) => handleAction("userAbout", ["aboutOne", "aboutTwo", "aboutThree", "aboutFour"], 3000, e);
    const homeFunc = (e) => handleAction("userHome", ["homeOne", "homeTwo", "homeThree"], 2500, e);
    const experienceFunc = (e) => handleAction("userExperience", ["experienceOne", "experienceTwo", "experienceThree"], 2000, e);
    const languagesFunc = (e) => handleAction("userLanguages", ["languagesOne", "languagesTwo", "languagesThree", "languagesFour", "languagesFive"], 3500, e);
    const favouriteFunc = (e) => handleAction("userFavourite", ["favouriteOne", "favouriteTwo", "favouriteThree", "favouriteFour"], 2500, e);
    const githubFunc = (e) => handleAction("userGithub", ["githubOne", "githubTwo", "githubThree", "githubFour"], 2500, e);
    const instagramFunc = (e) => handleAction("userInstagram", ["instagramOne", "instagramTwo", "instagramThree"], 2000, e);
    const codepenFunc = (e) => handleAction("userCodepen", ["codepenOne", "codepenTwo", "codepenThree"], 2000, e);
    const threadsFunc = (e) => handleAction("userThreads", ["threadsOne", "threadsTwo"], 1500, e);
    const linkdinFunc = (e) => handleAction("userLinkdin", ["linkdinOne", "linkdinTwo", "linkdinThree"], 2500, e);
    const emailFunc = (e) => handleAction("userEmail", ["emailOne", "emailTwo", "emailThree"], 2000, e);
    const dadJokeFunc = (e) => handleActionAPI("userDadjoke", ["dadjokeOne"], 'https://icanhazdadjoke.com/', 1500, e);


    var prompts = [
        { id: "helloPrompt", text: "Just saying hello!", action: helloFunc },
        { id: "contactPrompt", text: "How can I contact you?", action: contactFunc },
        { id: "workPrompt", text: "What have you worked on?", action: projectsFunc },
        { id: "aboutPrompt", text: "Where can I learn about you?", action: aboutFunc },
        { id: "homePrompt", text: "Can you take me home?", action: homeFunc },
        { id: "experiencePrompt", text: "What experience do you have?", action: experienceFunc },
        { id: "languagesPrompt", text: "What languages do you work with?", action: languagesFunc },
        { id: "favouritePrompt", text: "What was your favourite project?", action: favouriteFunc },
        { id: "githubPrompt", text: "Do you have Github?", action: githubFunc },
        { id: "instagramPrompt", text: "What's your Instagram?", action: instagramFunc },
        { id: "codepenPrompt", text: "Do you use CodePen?", action: codepenFunc },
        { id: "threadsPrompt", text: "Threads? Do you use it?", action: threadsFunc },
        { id: "linkdinPrompt", text: "Have you got LinkdIn?", action: linkdinFunc },
        { id: "emailPrompt", text: "Email?", action: emailFunc },
        { id: "dadJokePromp", text: "Can I have a dad joke?", action: dadJokeFunc}

    ]

    $(".chat-container").click(() => {
        if ($(".chat-container").hasClass("chat-minimised")) {
            $(".chat-container").addClass("chat-maximised").removeClass("chat-minimised");
            firstMessages();
        }
    });

    $(".chat-close").click((e) => {
        if (!$(".chat-container").is("chat-minimised")) {
            $(".chat-container").addClass("chat-minimised").removeClass("chat-maximised");
            e.stopPropagation();
        }
    });

});





// "Show me your CV"
// "dad joke"
// Etc....