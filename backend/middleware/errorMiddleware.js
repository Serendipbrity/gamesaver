const errorHandler = (err, req, res, next) => { 
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message: err.message,
        // if we are in production, we dont want to send the stack trace
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}
 
module.exports = {
    errorHandler
}