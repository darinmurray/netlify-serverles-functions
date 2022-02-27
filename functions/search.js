const fetch = require("node-fetch");

exports.handler = async (event, context) => {
    const random = Math.floor(Math.random() * supply.length);
    // const url = `https://www.dictionaryapi.com/api/v3/references/sd2/json/${supply[random]}?key=${process.env.M_W_API}`;
    const url = `https://www.dictionaryapi.com/api/v3/references/sd2/json/${supply[random]}?key=07bf658c-2b15-4b71-9fa5-a12e8aaa0f79`;
    try {
        const jokeStream = await fetch(url, {
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
            body: JSON.stringigy(jsonJoke)
        };
    } catch (err) {
        return {statusCode: 422, body: err.stack };
    }
};