


  const { TEST_KEY } = process.env


  // console.log("hostname is: ", window.location.hostname );
  // if (window.location.hostname == (liveServer || localHost) ) {
  //   TEST_KEY = config.TEST_KEY;  
  //   } else {
  //     TEST_KEY = "NO NO NO"; // process.env
  //   }
  //   console.log("TEST KEY is : ", TEST_KEY );


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
