window.onload = function() {

  // var TEST_KEY = config.TEST_KEY;

  const message = document.getElementById("message")
  document.getElementById("button").addEventListener("click", () => {
    // console.log("hello", TEST_KEY)
    randosmessage = getRandomInt(1000, 10000)+randoAlpha+getRandomInt(1000, 10000)+randoAlpha
    fetch("/.netlify/functions/hello-world?name=" + randosmessage)
      .then((data) => data.json())
      .then(({ msg }) => console.log(msg) || (message.innerHTML = msg))
  })





const getRandomDadJoke = async () => {
  /* const url = "https://icanhazdadjoke.com/";
  const jokeStream = await fetch(url, {
    headers: {
      Accept: "application/json"
    }
  }); */
  const url = "/.netlify/functions/jokes";
  const jokeStream = await fetch(url);
  const jsonJoke = await jokeStream.json();
  const joke = jsonJoke.joke;
  return joke;
};

const displayJoke = (joke) => {
  const h1 = document.querySelector("h1");
  h1.textContent = joke;
};

const refreshJoke = async () => {
  const joke = await getRandomDadJoke();
  displayJoke(joke);
};

// load 1st joke
// refreshJoke();

// setInterval(refreshJoke, 3000);





// ==========   Generate a Random Alpha Character   ============= //
randoAlpha = String.fromCharCode(65+Math.floor(Math.random() * 26)); 

  // =======   Generate a Random Int between min & max   ========== //
// getRandomInt(1, 10)*100   for increments less than one second
function getRandomInt(min, max) { 
  return Math.round((min - 0.5) + Math.random() * (max - min + 1));
}






}
