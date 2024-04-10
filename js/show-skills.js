$(document).ready(function () {

    // PAGES
    const skillPage = $(".cv-skills-container");
    const empPage = $(".cv-employment-container");
    const eduPage = $(".cv-education-container");

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


    // ON START 

    setTimeout(() => {

        $(skillPage).css('opacity', 1);
        setTimeout(() => showSkills(), 0);
        setTimeout(() => $(empPage).css('opacity', 1), 2500);
        setTimeout(() => $(eduPage).css('opacity', 1), 3000);
    }, 3100);

});