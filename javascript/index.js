function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");

  let losAngelesDate = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDate.innerHTML = losAngelesTime.format("dddd Do MMMM YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let sydneyElement = document.querySelector("#sydney");

  let sydneyDate = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDate.innerHTML = sydneyTime.format("dddd Do MMMM YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
