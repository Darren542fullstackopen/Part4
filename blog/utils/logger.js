/**
*   Put all the logging and error functionality into it's own file.
*   prints normal log messages and error for all error messages.
*   If we wanted to write logs to a file or external logging service only have to change in one place.
*/

const info = (...params) => {
  console.log(...params)
}

const error = (...params) => {
  console.error(...params)
}

module.exports = {
  info, error
}
