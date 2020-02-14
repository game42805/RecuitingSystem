const Validator = require('validator')
const isEmpty = require('./isEmpty')

module.exports = ValidateLoginInput = data => {
    let errors = {}
    
    data.email = !isEmpty(data.email) ? data.email : ''
    data.password = !isEmpty(data.password) ? data.password : ''

    if (!Validator.isLength(data.email, { min: 2, max: 30 }))
        errors.email = 'email must be between 2 to 30 chars'
    if (Validator.isEmpty(data.email))
        errors.email = 'email field is required'
    if (!Validator.isLength(data.password, { min: 6, max: 30 }))
        errors.password = 'Password must be between 6 to 30 chars'
    if (Validator.isEmpty(data.password))
        errors.password = 'Password field is required'

    return {
        errors,
        isValid: isEmpty(errors)
    }
}