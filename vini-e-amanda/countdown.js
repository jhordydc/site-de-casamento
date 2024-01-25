document.addEventListener("DOMContentLoaded", function () {
    // Data do casamento
    const weddingDate = new Date("June 1, 2024 00:00:00").getTime();

    // Atualiza a contagem regressiva a cada segundo
    const updateCountdown = function () {
        const currentDate = new Date().getTime();
        const timeDifference = weddingDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    };

    // Atualiza a contagem regressiva inicialmente
    updateCountdown();

    // Atualiza a contagem regressiva a cada segundo
    setInterval(updateCountdown, 1000);
});
