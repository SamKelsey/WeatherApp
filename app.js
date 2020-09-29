// Selectors
const cityInput = document.getElementById("city-input");
const submitButton = document.getElementById("submit-button");
const city = document.getElementsByClassName("city");
const temp = document.getElementsByClassName("temp");
const hiLow = document.getElementsByClassName("hi-low");

API = "https://api.openweathermap.org/data/2.5/weather?";
UNITS = "metric";

// Event Listeners
submitButton.addEventListener("click", checkInput);

cityInput.addEventListener("keypress", (evt) => {
  // Check if enter key was pressed
  if (evt.key === "Enter") {
    checkInput();
  } else {
    return;
  }
});

// Functions
function checkInput() {
  if (cityInput.value.length === 0) {
    return;
  } else {
    getData();
    cityInput.value = null;
  }
}

function getData() {
  let url =
    API + "q=" + cityInput.value + "&appid=" + APPID + "&units=" + UNITS;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city[0].childNodes[0].nodeValue = data.name;
      temp[0].childNodes[0].nodeValue = Math.round(data.main.temp);
      hiLow[0].childNodes[0].nodeValue = Math.round(data.main.temp_max);
      hiLow[0].childNodes[2].nodeValue = Math.round(data.main.temp_min);
    });
}
