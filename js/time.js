const time = document.querySelector("h2#time");

const getCurrentTime = () => {
  const date = new Date();
  const hours = `${date.getHours()}`.padStart(2, "0");
  const minutes = `${date.getMinutes()}`.padStart(2, "0");
  const seconds = `${date.getSeconds()}`.padStart(2, "0");

  time.innerText = `${hours}:${minutes}:${seconds}`;
};

getCurrentTime();
setInterval(getCurrentTime, 1000);
