const fetch = require("node-fetch");

// this used to include context, but it screwed up queryStringParameters
// exports.handler = async (event, context) => {
exports.handler = async event => {
    const querystring = event.queryStringParameters;
    const searchable = querystring.searchable || 'democracy';
    const url = `https://www.dictionaryapi.com/api/v3/references/sd2/json/${searchable}?key=${process.env.M_W_API}`;
    // const url = `https://www.dictionaryapi.com/api/v3/references/sd2/json/turtle?key=07bf658c-2b15-4b71-9fa5-a12e8aaa0f79`;
    try {
        const defStream = await fetch(url, {
            mode: 'no-cors',
            headers: {
                Accept: 'application/json'
            }
        });
        const jsonDefinition = await defStream.json();

        return {
            statusCode: 200,
            body: JSON.stringify(jsonDefinition)
        };
    } catch (err) {
        return {statusCode: 422, body: err.stack };
    }
};