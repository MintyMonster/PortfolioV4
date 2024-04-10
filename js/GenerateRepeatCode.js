$(document).ready(function () {

    var repeatCode = `
    <aside class="logo-container">
        <img src="https://user-images.githubusercontent.com/78669960/115617060-da173b00-a2e8-11eb-868f-b4b81770b68d.png"
            alt="" class="logo">
    </aside>

    <aside class="socials-container">
        <ul class="socials-list">
            <li class="socials-github socials-li">
                <a href="https://github.com/MintyMonster" class="socials-link" target="_blank">
                    <div class="socials-github-div socials-li-div">
                        <i class="fa-brands fa-github"></i>
                    </div>
                </a>
            </li>
            <li class="socials-instagram socials-li">
                <a href="https://www.instagram.com/cameronliddelldev/" class="socials-link" target="_blank">
                    <div class="socials-instagram-div socials-li-div">
                        <i class="fa-brands fa-instagram"></i>
                    </div>

                </a>
            </li>
            <li class="socials-threads socials-li">
                <a href="https://www.threads.net/@cameronliddelldev" class="socials-link" target="_blank">
                    <div class="socials-threads-div socials-li-div">
                        <i class="fa-brands fa-threads"></i>
                    </div>
                </a>
            </li>
            <li class="socials-linkdin socials-li">
                <a href="https://www.linkedin.com/in/cameron-liddell-977a47213/" class="socials-link" target="_blank">
                    <div class="socials-linkdin-div socials-li-div"> 
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </a>
            </li>
            <li class="socials-email socials-li">
                <a href="mailto:camerongliddell@gmail.com" class="socials-link">
                    <div class="socials-email-div socials-li-div">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                </a>
            </li>
        </ul>
    </aside>

    <aside class="navbar-container">
        <ul class="navbar-list">
            <li class="navbar-home navbar-link"><a href="https://cameronliddell.com/index.html" 
                    class="navbar-home-link navbar-home-link-text">Home</a></li>
            <li class="navbar-spacer"></li>
            <li class="navbar-about navbar-link"><a href="https://cameronliddell.com/aboutme.html" class="navbar-about-link">About me</a></li>
            <li class="navbar-spacer"></li>
            <li class="navbar-portfolio navbar-link"><a href="https://cameronliddell.com/projects.html"
                    class="navbar-portfolio-link">Projects</a></li>
            <li class="navbar-spacer"></li>
            <li class="navbar-cv navbar-link"><a href="https://cameronliddell.com/cv.html" class="navbar-cv-link">CV</a></li>
            <li class="navbar-spacer"></li>
            <li class="navbar-contact navbar-link"><a href="https://cameronliddell.com/contactme.html" class="navbar-contact-link">Contact</a>
            </li>
        </ul>
    </aside>
    
    <div class="burger-container">
        <svg id="svg-button" width="300" height="300" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg"
        onclick="this.classList.toggle('active')">
        <g transform="matrix(1,0,0,1,-389.5,-264.004)">
            <g id="arrow_left2">
                <g transform="matrix(1,0,0,1,0,5)">
                    <path id="top"
                        d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967" />
                </g>
                <g transform="matrix(1,1.22465e-16,1.22465e-16,-1,0.00024296,564.935)">
                    <path id="bottom"
                        d="M390,270L420,270L420,270C420,270 420.195,250.19 405,265C389.805,279.81 390,279.967 390,279.967" />
                </g>
                <path id="middle" d="M390,284.967L420,284.967" />
            </g>
        </g>
    </svg>
    </div>

    <div id="responsive-menu" class="hide-burger">
        <ul class="responsive-navbar-list">
            <li class="responsive-navbar-home responsive-navbar-link"><a href="https://cameronliddell.com/index.html"
                    class="responsive-navbar-home-link responsive-navbar-home-link-text">Home</a></li>
            <li class="responsive-navbar-about responsive-navbar-link"><a href="https://cameronliddell.com/aboutme.html"
                    class="responsive-navbar-about-link">About me</a></li>
            <li class="responsive-navbar-portfolio responsive-navbar-link"><a href="https://cameronliddell.com/projects.html"
                    class="responsive-navbar-portfolio-link">Projects</a></li>
            <li class="responsive-navbar-cv responsive-navbar-link"><a href="https://cameronliddell.com/cv.html"
                    class="responsive-navbar-cv-link">CV</a></li>
            <li class="responsive-navbar-contact responsive-navbar-link"><a href="https://cameronliddell.com/contactme.html"
                    class="responsive-navbar-contact-link">Contact</a>
            </li>
        </ul>
        <ul class="nav-socials-container">
            <li class="nav-socials-github nav-socials-li">
                <a href="https://github.com/MintyMonster" class="nav-socials-link" target="_blank">
                    <div class="nav-socials-github-div nav-socials-li-div">
                        <i class="fa-brands fa-github"></i>
                    </div>
                </a>
            </li>
            <li class="nav-socials-instagram nav-socials-li">
                <a href="https://www.instagram.com/cameronliddelldev/" class="nav-socials-link" target="_blank">
                    <div class="nav-socials-instagram-div nav-socials-li-div">
                        <i class="fa-brands fa-instagram"></i>
                    </div>

                </a>
            </li>
            <li class="nav-socials-linkdin nav-socials-li">
                <a href="https://www.linkedin.com/in/cameron-liddell-977a47213/" class="nav-socials-link" target="_blank">
                    <div class="nav-socials-linkdin-div nav-socials-li-div">
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </a>
            </li>
            <li class="nav-socials-email nav-socials-li">
                <a href="mailto:camerongliddell@gmail.com" class="nav-socials-link">
                    <div class="nav-socials-email-div socials-li-div">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                </a>
            </li>
        </ul>
    </div>`;


    $('body').append(repeatCode);

});