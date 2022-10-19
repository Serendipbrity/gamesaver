const asyncHandler = require('express-async-handler')

// @desc  get reports
// @route  GET /api/reports
// @access  Private
const getReports = asyncHandler( async (req, res) => { 
    res.status(200).json({message: 'Get Reports'})
})

// @desc  post reports
// @route  POST /api/reports
// @access  Private
const postReport = asyncHandler( async (req, res) => { 
    
    // "text" comes from the key value we typed in urlencoded on postman
    if (!req.body.text) { 
        // if theres no body text, send a 400 error
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'Post Report' })
    console.log(req.body)
})

// @desc  put reports
// @route  PUT /api/reports
// @access  Private
const putReport = asyncHandler( async (req, res) => { 
    res.status(200).json({message: `Update Report ${req.params.id}`})
})

// @desc  delete reports
// @route  DELETE /api/reports
// @access  Private
const deleteReport = asyncHandler( async (req, res) => { 
    res.status(200).json({message: `Delete Report ${req.params.id}`})
})

module.exports = {
    getReports, putReport, postReport, deleteReport
}