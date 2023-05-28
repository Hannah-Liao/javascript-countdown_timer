let time = 3800;

const redirect = () => {
    window.location.href = 'redirect.html'
}

const countdown = () => {
    time--;

    const textDay = Math.floor(time / 86400);
    const textHour = Math.floor((time % 86400 / 3600));
    const textMinute = Math.floor(time % 3600 / 60);
    const textSecond = Math.floor(time % 60);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;

    if (time < 1) {
        redirect();
    }
}

setInterval(countdown, 1000);

