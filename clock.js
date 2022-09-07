const clockTime = function () {
  const dateTime = new Date();
  const hrs = dateTime.getHours();
  const min = dateTime.getMinutes();
  const sec = dateTime.getSeconds();

  // const session = document.getElementById("session");
  // if (hrs <= 12) {
  //   session.innerHTML = "AM";
  // } else {
  //   session.innerHTML = "PM";
  // }
  // if (hrs <= 12) {
  //   hrs = hrs - 12;
  // }
  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
};
setInterval(clockTime);
