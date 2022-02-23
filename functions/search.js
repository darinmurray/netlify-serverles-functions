const qs = require('querystring');
const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { query } = "cat" //qs.parse(event.body);

  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}`,
    {
      method: 'GET',
      headers: {
        // Authorization: `Client-ID ${process.env.UNSPLASH_API_TOKEN}`,
        Authorization: `Client-ID `,
      },
    }
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));

  const firstResult = response.results[0];

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: `
    Token is:${process.env.UNSPLASH_API_TOKEN}
      <img
        src= "${firstResult.urls.regular}"
        alt="${firstResult.alt_description}"
      />
    `,
  };
};
