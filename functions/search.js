const fetch = require("node-fetch");

// const params = event.queryStringParameters 
// this used to include context, but it screwed up queryStringParameters
// exports.handler = async (event, context) => {
exports.handler = async event => {
    console.log("this should be the query string params",event.queryStringParameters);
    // let supply = [ "red","green","dog","cat","car","rocket", ]
    // const random = Math.floor(Math.random() * supply.length);

    const querystring = event.queryStringParameters;
    const searchable = querystring.searchable || 'fail';
    // let searchable = supply[random]

    const url = `https://www.dictionaryapi.com/api/v3/references/sd2/json/${searchable}?key=${process.env.M_W_API}`;
    // const url = `https://www.dictionaryapi.com/api/v3/references/sd2/json/turtle?key=07bf658c-2b15-4b71-9fa5-a12e8aaa0f79`;
    try {
        const jokeStream = await fetch(url, {
            mode: 'no-cors',
            headers: {
                Accept: 'application/json'
            }
        });
        const jsonJoke = await jokeStream.json();
        // const joke = jsonJoke //.joke; // this should change do shortDef or something...
        // const joke = jsonJoke[0].shortdef
        // console.log(joke);
        return {
            statusCode: 200,
            body: JSON.stringify(jsonJoke)
        };
    } catch (err) {
        return {statusCode: 422, body: err.stack };
    }
};