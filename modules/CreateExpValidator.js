const Validator = require('validator')
const isEmpty = require('./isEmpty')

module.exports = CreateExpValidator = data => {
    let errors = {}

    data.lastposition = !isEmpty(data.lastposition) ? data.lastposition : ''
    data.Year = !isEmpty(data.Year) ? data.Year : ''
    data.Month = !isEmpty(data.Month) ? data.Month : ''
    data.Company = !isEmpty(data.Company) ? data.Company : ''
    data.needsalary = !isEmpty(data.needsalary) ? data.needsalary : ''
    data.lastsalary = !isEmpty(data.lastsalary) ? data.lastsalary : ''
    
    if (!Validator.isLength(data.lastposition, { min: 4, max: 30 }))
        errors.lastposition = 'lastposition must be between 4 to 30 chars'
    if (Validator.isEmpty(data.lastposition))
        errors.lastposition = 'lastposition field is required'

        if (!Validator.isLength(data.Year, { min: 2, max: 30 }))
        errors.Year = 'Year must be between 2 to 30 chars'
    if (Validator.isEmpty(data.Year))
        errors.Year = 'Year field is required'

        if (!Validator.isLength(data.Month, { min: 2, max: 30 }))
        errors.Month = 'Month must be between 2 to 30 chars'
    if (Validator.isEmpty(data.Month))
        errors.Month = 'Month field is required'

        if (!Validator.isLength(data.Company, { min: 4, max: 30 }))
        errors.Company = 'Company must be between 4 to 30 chars'
    if (Validator.isEmpty(data.Company))
        errors.Company = 'Company field is required'

        if (!Validator.isLength(data.needsalary, { min: 4, max: 30 }))
        errors.needsalary = 'needsalary must be between 4 to 30 chars'
    if (Validator.isEmpty(data.needsalary))
        errors.needsalary = 'needsalary field is required'

        if (!Validator.isLength(data.lastsalary, { min: 4, max: 30 }))
        errors.lastsalary = 'lastsalary must be between 4 to 30 chars'
    if (Validator.isEmpty(data.lastsalary))
        errors.lastsalary = 'lastsalary field is required'

      
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}