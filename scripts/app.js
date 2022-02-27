// const { default: fetch } = require("node-fetch");

window.onload = function () { 
 
let supply = [ "red","green","dog","cat","car","rocket", ]   
const random = Math.floor(Math.random() * supply.length);

const getRandomDadJoke = async (event) => {
const random = Math.floor(Math.random() * supply.length);
// const url = `https://www.dictionaryapi.com/api/v3/references/sd2/json/${supply[random]}?key=${process.env.M_W_API}`;
// const url = `https://www.dictionaryapi.com/api/v3/references/sd2/json/${supply[random]}?key=07bf658c-2b15-4b71-9fa5-a12e8aaa0f79`;
// const jokeStream = await fetch(url, {
//     headers: {
//         Accept: 'application/json'
//       }
// });

const url = "./netlify/functions/search";
const jokeStream = await fetch(url);
const jsonJoke = await jokeStream.json();

// const joke = jsonJoke //.joke; // this should change do shortDef or something...
const joke = jsonJoke[0].shortdef
console.log(joke);
return joke;
};


const displayJoke = (joke) => {
    const h1 = document.querySelector("h1");
    h1.textContent = getRandomInt(100, 999)+joke;
}


const refreshJoke = async() => {
    const joke = await getRandomDadJoke();
    displayJoke(joke);
}

refreshJoke()

// setInterval(alert('working'), 5000);
// setInterval(refreshJoke, 3000);


$(document).on("click", "#get_me" , function(e) {
    console.log("Clicked, do something");
    refreshJoke()
});
    

    
    
    
// =======   Generate a Random Int between min & max   ========== //
// getRandomInt(1, 10)*100   for increments less than one second
function getRandomInt(min, max) { 
    return Math.round((min - 0.5) + Math.random() * (max - min + 1));
  }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // key security
    // key security
    // key security
    // key security
    // do this first:
    // https://gist.github.com/derzorngottes/3b57edc1f996dddcab25
    // https://stackoverflow.com/questions/65509794/how-can-i-hide-an-api-key-in-a-github-public-repo
    
    // https://oliverjam.es/blog/we-dont-need-servers/
    
    
    function lookUp(providedWord){
      console.log(`%c=> Initial providedWord in lookUp(providedWord): `, "color:red", providedWord);
      console.log(`%c=> var word: `, "color:red", word);
        if ( providedWord !== "undefined" ) { 
          word = providedWord
        } 
      console.log(`%c=> FINAL word being used: `, "color:red", word);
    
        if (getSelected(category) == 'Colors') {
          // This makes camelCase colors readable if css camelCase collors are bieng used
          word = makeReadable(word.toString()) //always returns a string...
          console.log(`%c=> FINAL --> C O L O R  N A M E <-- being used: is a STRING`, "color:red", word);
        }
    
        const M_W_API = "07bf658c-2b15-4b71-9fa5-a12e8aaa0f79"; 
      // $.ajax("https://www.dictionaryapi.com/api/v3/references/sd2/json/"+providedWord+"?key=07bf658c-2b15-4b71-9fa5-a12e8aaa0f79").done(function (response) {  
      $.ajax("https://www.dictionaryapi.com/api/v3/references/sd2/json/"+providedWord+"?key="+M_W_API).done(function (response) {  
        // console.log("-------------  Webster API call (success) -------------");
        // console.log(`%cRaw response %c,  ${response}`,  " color:Fuchsia", "color:orange"  )
        // console.log(`%cresponse is :::> `,  "color:Fuchsia",  response  )
        // console.log(`%cresponse.length/meanings :::> `,  "color:Fuchsia",  response.length  )
        // console.log(`%cresponse.constructor.name is:::> `,  "color:Fuchsia",  response.constructor.name  )
        // console.log(`%cresponse[0] is:::> `, "color:Fuchsia",  response[0]  )
        // if (response.length != 0) {   
        //   console.log(`%cresponse[0].constructor.name is:::> `, "color:Fuchsia",  response[0].constructor.name  )
        // }
        
        // ************** actaul work ***************************** 
        // Destroy the existing definition in the DOM
        $("#definition").text('')
        if (response.length == 0) {  
          // if NOTHING at all is returned 
          document.getElementById("definition").textContent = "I thnk a cat was walking on your keyboard... Try again"
          word = null
          flipCharacters(":-(")
        } else if (response[0].constructor.name == "String") { 
          // if the first itmem [0] in the response is a string, then it's returning an array of suggestions
          $("#definition").append("No luck... try ==> ");
              for (x in response.slice(0, 5) ) {
                console.log(`%c=> response: `, "color:cyan", response[x]);
                let link = `<span class="look_this_up" >${response[x]} </span>`
                // document.getElementById("definition").appendChild(link)  
                $("#definition").append(link);
              }
              // alows Color Names not found to be displayed anyway
              // otherwise, this would be flipCharacters(), and go BELOW word = null
              flipCharacters(word)  
          // word = null
        } else {
          getDefs(response)
          flipCharacters() // being over ridden by 'word'?
        }
        // ************** actaul work *****************************
    // console.log("------------- END Webster API call (success) -------------");
      }).fail(function() {
        alert(" :-( ") // An error occurred
      });
    };// end function
    
      
    
    
    
    // find the first flip character and get it's left position
    // let pos_1_1 = document.getElementById("pos_1_1")
    // let marginLeft = (pos_1_1.offsetLeft-(item_wrapper_margin) )//+half_margin
    // position the syllable wrapper
    // $("#syl_wrapper").css( "margin-left",`${marginLeft}px` )
    // $("#syl_wrapper").text(' ')
    
    
    function getDefs(response) { 
      console.log(`%c=> word actually looked up with getDefs(): `, "color:green", word);
      console.log("------------- Webster Parse  -------------");
      // ------------------ Get Values Fromn Response ----------------------------- //
      let shortDefsArray = response[0].shortdef // get all if they exist
      let finalDef = shortDefsArray[0] // the first short version of the definition
      let finalType = response[0].fl // verb/noun/etc.
      let separated
      let finals = (response[0].meta.id).split(":")[0]; // should be hwi.hw but it sometimes contains an asterisk
      let finalSyl = response[0].hwi.hw 
      let pronunciation = response[0].hwi.prs ? response[0].hwi.prs[0].mw : "Not Available"
      let multiSyllabol = (finalSyl.indexOf("*") >= 0 ) ? true : false
      if (multiSyllabol == true) { separated = (finalSyl).split('*') } 
      
    
      // ------------------ rendering in the DOM ----------------------------- //
      // $("#explanation").text(explanation) // unused
      //$("#word_hero").text(finals)
      if ( multiSyllabol ) { redablesyllables = separated.join(" - ") } else {redablesyllables = finalSyl }
      $("#pronunciation").text(pronunciation)
      $("#type").text(finalType)
      
        $("#syllables").text('') // clear out existing
          $("#syl_wrapper").text('')
        // itterate through syllables, if existing
        if (multiSyllabol) {
          for (let x in separated) { //sylables
            let chunk_l = separated[x].length
            let chunk_w = chunk_l*item_w
            // with speakable chunk, they just kind of suck...
            // $("#syl_wrapper").append( `<span id="chunk_${x}" class="syl_chunk syllabol"><div class="l_brace">  </div><div class="c_brace"> ${separated[x]} </div><div class="r_brace">  </div></span>` ) 
            $("#syl_wrapper").append( `<span id="chunk_${x}" class="syl_chunk syllabol"><div class="l_brace">  </div><div class="c_brace">  </div><div class="r_brace">  </div></span>` ) 
            $(`#chunk_${x}`).css( "width",`${chunk_w}px` )
            
              // for (let y in separated[x]) { // letters
              //     // x represents the syl Number, y represents the char number in that syl
              //   $("#syl_wrapper").append( `<span class="syl_letter">${separated[x][y]}${y}</span>` )
              // }
              // $("#syl_wrapper").append( `<span class="syl_spacer">-</span>` )
              // this works great, just dont' need it
              // $("#syl_wrapper").append( `<span class="syl_chunk">${separated[x]}</span>` )
          
            $("#syllables").append( `<span class="syllable">${separated[x]}&nbsp;</span>` ) // <==(blank) space here matters!!
          }
        } else { 
          // empty syllables hilighter
          $("#syl_wrapper").text('...')
          // $("#syllables").text(redablesyllables) 
          $("#syllables").append(`<span class="syllable">${finalSyl}&nbsp;</span>`)
        }
            // itterate through shordDefsArray, if existing
            if (shortDefsArray.length > 1) {
              // console.log(`%c=> defs= `, "color:yellow", shortDefsArray);
              $("#definition").text(finalDef + '.')
              for (let x in shortDefsArray) { 
                // inject as LI in the DOM
                // console.log(`%c=> Definition${x}: `, "color:yellow", shortDefsArray[x]);
              }
            }
      console.log("------------- end Webster Parse -------------");
    }// end of getDefs()
    
    
    
    
    
    
    
    
    
    
    
    
    
    
     }; // end on document load
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    