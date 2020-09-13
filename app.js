// Selectors
const cityInput = document.getElementById("city-input");
const submitButton = document.getElementById("submit-button");
const tempInput = document.getElementsByClassName("temp");

APPID = "87c1a9317c06c8b7e6a81e8c3546a99e";
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
      console.log(data);
      tempInput[0].childNodes[0].nodeValue = Math.round(data.main.temp);
    });
}
