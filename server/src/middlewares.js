/* eslint linebreak-style: ["error", "windows"] */
/*
STATUS CODES:
200: ok
500: server error
404: page not found
Function below:
if status is good and it reached to last middleware
means there is a server error if req fell down to this
function
*/
const notFound = (req, res, next) => {
  const error = new Error(`Route Not Found ${req.originalUrl}`);
  res.status(404);
  next(error);
};
// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    Message: `Error ${error.message}`,
    stack: process.env.NODE_ENV === 'development' ? null : error.stack,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
