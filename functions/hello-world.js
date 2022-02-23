
const { TEST_KEY } = process.env


// exports.handler = async (event, context) => {
//   try {
//     const subject = TEST_KEY // for working published version
//   // const subject = event.queryStringParameters.name || "World at large"
// return { statusCode: 200, body: JSON.stringify({ msg: `Hello ${subject}` }) }
// // return { statusCode: 200, body }

//   } catch (err) {
//     return { statusCode: 500, body: err.toString() }
//   } 

// }


exports.handler = async (event) => {
  const secret_key = TEST_KEY // for working published version
  const query_name = event.queryStringParameters.name || "World at large"
  return {
    statusCode: 200,
    body: `Hello ${query_name} and ${secret_key}`,
  };
};