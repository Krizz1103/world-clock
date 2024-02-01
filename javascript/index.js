function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDate = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDate.innerHTML = losAngelesTime.format("dddd Do MMMM YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "HH:mm:ss [<small>][h][</small>]"
    );
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDate = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDate.innerHTML = sydneyTime.format("dddd Do MMMM YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "HH:mm:ss [<small>][h][</small>]"
    );
  }

  let madridElement = document.querySelector("#madrid");
  if (madridElement) {
    let madridDate = madridElement.querySelector(".date");
    let madridTimeElement = madridElement.querySelector(".time");
    let madridTime = moment().tz("Europe/Madrid");

    madridDate.innerHTML = madridTime.format("dddd Do MMMM YYYY");
    madridTimeElement.innerHTML = madridTime.format(
      "HH:mm:ss [<small>][h][</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("dddd Do MMMM YYYY")}</div>
    </div>
    <div class="time">${cityTime.format(
      "HH:mm:ss [<small>][h][</small>]"
    )}</div>
    </div>
   </div>
   <a href="index.html" class="link"> Back to cities </a>`;
}

updateTime();
// setInterval(updateTime, updateCity, 1000);

setInterval(function () {
  updateTime();
  updateCity();
}, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
