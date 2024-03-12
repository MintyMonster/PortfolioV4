const progressbar = document.querySelector(".progress");
const progressOverlay = document.getElementById("progress-overlay");

const changeProgress = (progress) => {
    progressbar.style.width = `${progress}%`;
};

const fadeProgress = () => {
    progressOverlay.classList.toggle('fade');
}

const randomTime = (min, max) => {
    return Math.random() * (max - min) + min;
}

const displayProgress = () => {
    progressOverlay.classList.toggle('display');
}

setTimeout(() => changeProgress(5), randomTime(100, 400));
setTimeout(() => changeProgress(22), randomTime(300, 600));
setTimeout(() => changeProgress(45), randomTime(800, 1100));
setTimeout(() => changeProgress(85), randomTime(1100, 1400));
setTimeout(() => changeProgress(98), randomTime(1400, 2000));
setTimeout(() => changeProgress(100), randomTime(2000, 2300));
setTimeout(() => fadeProgress(), Math.random() * (2500 - 2300) + 2300);
setTimeout(() => displayProgress(), 3500);