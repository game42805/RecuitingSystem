const Validator = require('validator')
const isEmpty = require('./isEmpty')

module.exports = createJobStatusValidator = data => {
    let errors = {}

    data.status = !isEmpty(data.status) ? data.status : ''
    
    if (!Validator.isLength(data.status, { min: 3, max: 30 }))
        errors.status = 'status must be between 3 to 30 chars'
    if (Validator.isEmpty(data.status))
        errors.status = 'status field is required'
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}