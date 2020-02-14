const Validator = require('validator')
const isEmpty = require('./isEmpty')

module.exports = createJobValidator = data => {
    let errors = {}

    data.jobname = !isEmpty(data.jobname) ? data.jobname : ''
    data.salary_min = !isEmpty(data.salary_min) ? data.salary_min : ''
    data.salary_max = !isEmpty(data.salary_max) ? data.salary_max : ''
    data.level = !isEmpty(data.level) ? data.level : ''
    
    if (!Validator.isLength(data.jobname, { min: 4, max: 30 }))
        errors.jobname = 'jobname must be between 4 to 30 chars'
    if (Validator.isEmpty(data.jobname))
        errors.jobname = 'jobname field is required'
        if (!Validator.isLength(data.salary_min, { min: 4, max: 30 }))
        errors.salary_min = 'salary_min must be between 4 to 30 chars'
    if (Validator.isEmpty(data.salary_min))
        errors.salary_min = 'salary_min field is required'
        if (!Validator.isLength(data.salary_max, { min: 4, max: 30 }))
        errors.salary_max = 'salary_max must be between 4 to 30 chars'
    if (Validator.isEmpty(data.salary_max))
        errors.salary_max = 'salary_max field is required'
        if (!Validator.isLength(data.level, { min: 4, max: 30 }))
        errors.level = 'level must be between 4 to 30 chars'
    if (Validator.isEmpty(data.level))
        errors.level = 'level field is required'
     
    return {
        errors,
        isValid: isEmpty(errors)
    }
}