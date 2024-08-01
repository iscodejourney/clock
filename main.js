function updateClock(){

    let container = document.querySelector(".clock");
    
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    container.innerHTML = `${hours}-${minutes}-${seconds}`
}

setInterval(updateClock,1000);
updateClock();
