/*Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, 
return a string for the average time it took to run each mile in the format "MM:SS".*/

milePace(26.2, "120:35");
function milePace(miles, duration) {
  const durationArray = duration.split(":").map(Number);

  const totalSecondsPerMile =
    (durationArray[0] * 60 + durationArray[1]) / miles;

  const seconds = Math.floor(totalSecondsPerMile % 60); //Math.floor to round down number
  const minutes = Math.floor(totalSecondsPerMile / 60);

  duration =
    minutes.toString().padStart(2, "0") + //to make sure numbers are always written in 2 digit format
    ":" +
    seconds.toString().padStart(2, "0");
  return duration;
}
