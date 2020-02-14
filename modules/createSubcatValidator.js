const Validator = require('validator')
const isEmpty = require('./isEmpty')

module.exports = createSubcatValidator = data => {
    let errors = {}

    data.subcat = !isEmpty(data.subcat) ? data.subcat : ''
    
    if (!Validator.isLength(data.subcat, { min: 4, max: 30 }))
        errors.subcat = 'Name must be between 4 to 30 chars'
    if (Validator.isEmpty(data.subcat))
        errors.subcat = 'Name field is required'
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}