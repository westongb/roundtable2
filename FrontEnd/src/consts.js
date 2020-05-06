// set up as a ternary so optimizer will optimize out the code that is never run
const uriBase = process.env.NODE_ENV !== 'production' ? (
    "http://localhost:5000"
) : (
    "https://king-of-the-kingdom.herokuapp.com"
)

module.exports.uriBase = uriBase

