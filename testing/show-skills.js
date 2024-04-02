$(document).ready(function () {

    // PAGES
    const skillPage = $(".cv-skills-container");
    const empPage = $(".cv-employment-container");
    const eduPage = $(".cv-education-container");

    // BUTTONS
    const skillsButton = $(".cv-nav-skills");
    const empButton = $(".cv-nav-employment");
    const eduButton = $(".cv-nav-education");

    // SKILLS VARIABLES
    const csharp = $(".csharp-progress-container");
    const java = $(".java-progress-container");
    const jquery = $(".jquery-progress-container");
    const sql = $(".mysql-progress-container");
    const html = $(".html-progress-container");
    const css = $(".css-progress-container");
    const php = $(".php-progress-container");
    const python = $(".python-progress-container");
    const js = $(".js-progress-container");
    const cpp = $(".cplusplus-progress-container");
    const skillContainer = $(".skills-container");
    const borderContainer = $(".border-container");

    // EMPLOYMENT VARIABLES
    const emOne = $(".employment-grid-box-one");
    const emTwo = $(".employment-grid-box-two");
    const emThree = $(".employment-grid-box-three");
    const emFour = $(".employment-grid-box-four");
    const emFive = $(".employment-grid-box-five");
    const emSix = $(".employment-grid-box-six");

    // EDUCATION VARIABLES
    const edOne = $(".education-grid-box-one");
    const edTwo = $(".education-grid-box-two");
    const edThree = $(".education-grid-box-three");
    const edFour = $(".education-grid-box-four");

    // FUNCS
    const showSkills = () => {
        const elements = [
            { selector: csharp, delay: 0, opacity: 1, progressBarSelector: '.csharp-progress-bar > .progress', progressBarWidth: '80%' },
            { selector: java, delay: 100, opacity: 1, progressBarSelector: '.java-progress-bar > .progress', progressBarWidth: '80%' },
            { selector: jquery, delay: 200, opacity: 1, progressBarSelector: '.jquery-progress-bar > .progress', progressBarWidth: '60%' },
            { selector: sql, delay: 300, opacity: 1, progressBarSelector: '.mysql-progress-bar > .progress', progressBarWidth: '55%' },
            { selector: html, delay: 400, opacity: 1, progressBarSelector: '.html-progress-bar > .progress', progressBarWidth: '55%' },
            { selector: css, delay: 500, opacity: 1, progressBarSelector: '.css-progress-bar > .progress', progressBarWidth: '50%' },
            { selector: php, delay: 600, opacity: 1, progressBarSelector: '.php-progress-bar > .progress', progressBarWidth: '30%' },
            { selector: python, delay: 700, opacity: 1, progressBarSelector: '.python-progress-bar > .progress', progressBarWidth: '30%' },
            { selector: js, delay: 800, opacity: 1, progressBarSelector: '.javascript-progress-bar > .progress', progressBarWidth: '30%' },
            { selector: cpp, delay: 900, opacity: 1, progressBarSelector: '.cplusplus-progress-bar > .progress', progressBarWidth: '10%' }
        ];

        elements.forEach((element, index) => {
            setTimeout(() => {
                $(element.selector).css('opacity', element.opacity);
                $(element.progressBarSelector).css('width', element.progressBarWidth);
            }, element.delay + (100 * index));
        });

        setTimeout(() => $(skillContainer).css('opacity', 1), 1000);

        const skills = ['.skill-one', '.skill-two', '.skill-three', '.skill-four', '.skill-five', '.skill-six', '.skill-seven', '.skill-eight', '.skill-nine', '.skill-ten'];

        skills.forEach((skill, index) => {
            setTimeout(() => $(skill).css('opacity', 1), 1200 + (100 * index));
        });

        setTimeout(() => $(borderContainer).css('opacity', 1), 2300);

    }


    const showEmployment = () => {
        const employmentItems = [emOne, emTwo, emThree, emFour, emFive, emSix];
        const borderContainers = [
            ".border-container-employment-one",
            ".border-container-employment-two",
            ".border-container-employment-three",
            ".border-container-employment-four"
        ];

        employmentItems.forEach((item, index) => {
            setTimeout(() => $(item).css('opacity', 1), index * 100);
        });

        borderContainers.forEach((container, index) => {
            setTimeout(() => $(container).css('opacity', 1), 600 + index * 200);
        });
    }

    const showEducation = () => {
        const educationItems = [edOne, edTwo, edThree, edFour];
        const borderContainers = [
            ".border-container-education-one",
            ".border-container-education-two",
            ".border-container-education-three",
            ".border-container-education-four"
        ];

        educationItems.forEach((item, index) => {
            setTimeout(() => $(item).css('opacity', 1), index * 100);
        });

        borderContainers.forEach((container, index) => {
            setTimeout(() => $(container).css('opacity', 1), 450 + index * 200);
        });
    }


    // ON START 

    setTimeout(() => {

        $(skillPage).css('opacity', 1);
        setTimeout(() => showSkills(), 0);

    }, 3100);

    $(skillsButton).click(function () {

        $(skillPage).css('opacity', 1);
        $(empPage).css('opacity', 0);
        $(eduPage).css('opacity', 0);

        setTimeout(() => showSkills(), 100);

    });

    $(empButton).click(function () {
        $(empPage).css('opacity', 1);
        $(skillPage).css('opacity', 0);
        $(eduPage).css('opacity', 0);

        setTimeout(() => showEmployment(), 100);
    })

    $(eduButton).click(function () {
        $(eduPage).css('opacity', 1);
        $(skillPage).css('opacity', 0);
        $(empPage).css('opacity', 0);

        setTimeout(() => showEducation(), 100);
    })
});