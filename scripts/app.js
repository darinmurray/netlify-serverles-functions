// const fetch = require("node-fetch");
//window.onload = function () { 
// let supply = [ "red","green","dog","cat","car","rocket", ]   
// const random = Math.floor(Math.random() * supply.length);


const getRandomDadJoke = async (event) => {
    console.log("getRandomDadJoke:",event);
    let supply = [ "lizard","lion","ukraine","tree","car","rocket", ]   
    const random = Math.floor(Math.random() * supply.length);

/* ****************  for S E R V E R L E S S  ***************** */
const searchable = supply[random];
const url = "/.netlify/functions/search?searchable="+searchable ;
const jokeStream = await fetch(url);
/* ****************  E N D  ***************** */

/* **************** for NON serverles ***************** */
// const url = `https://www.dictionaryapi.com/api/v3/references/sd2/json/${supply[random]}?key=${process.env.M_W_API}`;
// const url = `https://www.dictionaryapi.com/api/v3/references/sd2/json/${supply[random]}?key=07bf658c-2b15-4b71-9fa5-a12e8aaa0f79`;
// const jokeStream = await fetch(url, {
//     headers: {
//         Accept: 'application/json'
//       }
// });
/* **************** E N D ***************** */

const jsonJoke = await jokeStream.json();
// const joke = jsonJoke //.joke; // this should change do shortDef or something...
const joke = jsonJoke //[0].shortdef
// console.log(joke);
return joke;
};

const displayJoke = (joke, searchable) => {
    console.log(joke);
    const h1 = document.querySelector("h1");
    h1.textContent = getRandomInt(100, 999)+": "+joke[0].shortdef;
    h1.prepend(joke[0].meta.id+": ");
}

const refreshJoke = async() => {
    const joke = await getRandomDadJoke();
    displayJoke(joke);
    console.log("The whole joke is:", joke);
}

refreshJoke()

// setInterval(alert('working'), 5000);
// setInterval(refreshJoke, 3000);

$(document).on("click", "#get_me" , function(e) {
    console.log("#get_me Clicked, do something");
    refreshJoke()
});
    

    
    
  















// =======   Generate a Random Int between min & max   ========== //
// getRandomInt(1, 10)*100   for increments less than one second
function getRandomInt(min, max) { 
    return Math.round((min - 0.5) + Math.random() * (max - min + 1));
  }

  
    
    
     //}; // end on document load
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    