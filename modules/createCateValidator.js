const Validator = require('validator')
const isEmpty = require('./isEmpty')

module.exports = createCateValidator = data => {
    let errors = {}

    data.cat = !isEmpty(data.cat) ? data.cat : ''
    
    if (!Validator.isLength(data.cat, { min: 4, max: 30 }))
        errors.cat = 'Name must be between 4 to 30 chars'
    if (Validator.isEmpty(data.cat))
        errors.cat = 'Name field is required'
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}