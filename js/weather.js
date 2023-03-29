const API_KEY = "e1485262aec5968132e3a98c8af6ac17";

const onGeoSuccess = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].description}, ${data.main.temp}°C`;
    });
};
const onGeoError = () => {
  alert("위치를 찾을 수 없습니다.");
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
