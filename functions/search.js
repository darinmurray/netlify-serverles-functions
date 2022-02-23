const qs = require('querystring');
const fetch = require('node-fetch');
// import fetch from 'node-fetch';

exports.handler = async (event) => { 
  const query = qs.parse(event.body);
  // const M_W_API = "07b f658c-2b15-4b71-9fa5-a12e 8aaa0f79"
  const response = await fetch(
     
    // window.location ?? look into this

    `https://www.dictionaryapi.com/api/v3/references/sd2/json/${query}?key=${M_W_API}`,
    // `https://www.dictionaryapi.com/api/v3/references/sd2/json/${query}?key="+M_W_API`,
    // `https://api.unsplash.com/search/photos?query=${query}`,
    {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        // Authorization: `Client-ID qHPEkhMngfL7c9A5KoAhYbWXv7OcuFoWIEg6p7p_I-0`,
        Authorization: `Client-ID ${process.env.UNSPLASH_API_TOKEN}`,
        Location: "/",
        // Cache-Control: no-cache, ?? 
      },
    }
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));

  const firstResult = response //.results[0];

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    
    body: `
    results: ${firstResult}
    `,
  };
};


// exports.handler = async (event) => {
//   const { query } = "green" //qs.parse(event.body);

//   const response = await fetch(
//     `https://api.unsplash.com/search/photos?query=${query}`,
//     {
//       method: 'GET',
//       headers: {
//         // Authorization: `Client-ID qHPEkhMngfL7c9A5KoAhYbWXv7OcuFoWIEg6p7p_I-0`,
//         Authorization: `Client-ID qHPEkhMngfL7c9A5KoAhYbWXv7OcuFoWIEg6p7p_I-0`,
//       },
//     }
//   )
//     .then((response) => response.json())
//     .catch((error) => console.error(error));

//   const firstResult = response.results[0];

//   return {
//     statusCode: 200,
//     headers: {
//       'Content-Type': 'text/html',
//     },
    
//     body: `
//     Token is:${process.env.UNSPLASH_API_TOKEN}
//       <img
//         src= "${firstResult.urls.regular}"
//         alt="${firstResult.alt_description}"
//       />
//     `,
//   };
// };
