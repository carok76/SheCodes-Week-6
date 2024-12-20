function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value.trim();
  if (city) {
    let apiKey = "o922906b22974ec99e9bc3858a42ft20";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayTemp);
  }
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function displayTemp(response) {
  let temp = Math.round(response.data.temperature.current);
  let city = response.data.city;
  console.log(temp);
  console.log(city);
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = city;
  let tempValueElement = document.querySelector(".current-temperature-value");
  tempValueElement.innerHTML = temp;
}

let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key=${apiKey}`;
let apiKey = "o922906b22974ec99e9bc3858a42ft20";
