
const getDefinition = async (event) => {
    const supply = [ "lizard","lion","ukraine","tree","car","rocket", ]   
    const random = Math.floor(Math.random() * supply.length);
    const searchable = supply[random];

/* ****************  for S E R V E R L E S S  ***************** */
const url = "/.netlify/functions/search?searchable="+searchable ;
const defStream = await fetch(url);
/* ****************  E N D  ***************** */

/* **************** for NON serverles ***************** */
// const url = `https://www.dictionaryapi.com/api/v3/references/sd2/json/${searchable}?key=${process.env.M_W_API}`;
// const defStream = await fetch(url, {
//     headers: {
//         Accept: 'application/json'
//       }
// });
/* **************** E N D ***************** */

const jsonDefinition = await defStream.json();
const definition = jsonDefinition 
return definition;
};

const displayDef = (definition) => {
    const h1 = document.querySelector("h1");
    h1.textContent = definition[0].meta.id+": -"+getRandomInt(100, 999)+"- : "+definition[0].shortdef;
}

const refreshDef = async() => {
    const definition = await getDefinition();
    displayDef(definition);
}


refreshDef()

$(document).on("click", "#get_me" , function(e) {
    refreshDef()
});
    

// =======   Generate a Random Int between min & max   ========== //
// getRandomInt(1, 10)*100   for increments less than one second
function getRandomInt(min, max) { 
    return Math.round((min - 0.5) + Math.random() * (max - min + 1));
  }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    