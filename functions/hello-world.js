
const { TEST_KEY } = process.env


exports.handler = async (event, context) => {
  try {
    const subject = TEST_KEY // for working published version
  // const subject = event.queryStringParameters.name || "World at large"
return { statusCode: 200, body: JSON.stringify({ msg: `Hello ${subject}` }) }
// return { statusCode: 200, body }

  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  } 

}
