const express = require('express')
const router = express.Router()
const {getReports, postReport, putReport, deleteReport } = require('../controllers/reportController')

router.route('/').get(getReports).post(postReport)

router.route('/:id').put(putReport).delete(deleteReport)



module.exports = router