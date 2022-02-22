


  const { TEST_KEY } = process.env


exports.handler = async (event, context) => {
  try {
    const subject = TEST_KEY // event.queryStringParameters.name || "World at large"
    return { statusCode: 200, body: JSON.stringify({ msg: `Hello ${subject}` }) }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
