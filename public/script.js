window.onload = function() {

  // netlify = "affectionate-poincare-72fa68.netlify.app"
  // localHost = "localhost"
  // liveServer = "127.0.0.1"


console.log("hostname is: ", window.location.hostname );
  const message = document.getElementById("message")
  document.getElementById("button").addEventListener("click", () => {
    // console.log("hello", TEST_KEY)
    randosmessage = getRandomInt(1000, 10000)
    // fetch("/.netlify/functions/hello-world?name=" + randosmessage)
    fetch("./functions/hello-world?name=" + randosmessage)
      .then((data) => data.json())
      .then(({ msg }) => console.log(msg) || (message.innerHTML = msg))
  })




// ==========   Generate a Random Alpha Character   ============= //
randoAlpha = String.fromCharCode(65+Math.floor(Math.random() * 26)); 

  // =======   Generate a Random Int between min & max   ========== //
// getRandomInt(1, 10)*100   for increments less than one second
function getRandomInt(min, max) { 
  return Math.round((min - 0.5) + Math.random() * (max - min + 1));
}






}
