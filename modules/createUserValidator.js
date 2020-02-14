const Validator = require('validator')
const isEmpty = require('./isEmpty')

module.exports = createJobValidator = data => {
    let errors = {}

    data.email = !isEmpty(data.email) ? data.email : ''
    data.firstname = !isEmpty(data.firstname) ? data.firstname : ''
    data.lastname = !isEmpty(data.lastname) ? data.lastname : ''
    data.gender = !isEmpty(data.gender) ? data.gender : ''
    data.region = !isEmpty(data.region) ? data.region : ''
    data.national = !isEmpty(data.national) ? data.national : ''
    data.university = !isEmpty(data.university) ? data.university : ''
    data.major = !isEmpty(data.major) ? data.major : ''
    data.graduates = !isEmpty(data.graduates) ? data.graduates : ''
    data.grade = !isEmpty(data.grade) ? data.grade : ''
    data.militarystatus = !isEmpty(data.militarystatus) ? data.militarystatus : ''
    data.status = !isEmpty(data.status) ? data.status : ''

    if (!Validator.isLength(data.email, { min: 4, max: 30 }))
        errors.email = 'email must be between 4 to 30 chars'
    if (Validator.isEmpty(data.email))
        errors.email = 'email field is required'


    if (!Validator.isLength(data.firstname, { min: 4, max: 30 }))
        errors.firstname = 'firstname must be between 4 to 30 chars'
    if (Validator.isEmpty(data.firstname))
        errors.firstname = 'firstname field is required'


    if (!Validator.isLength(data.lastname, { min: 4, max: 30 }))
        errors.lastname = 'v must be between 4 to 30 chars'
    if (Validator.isEmpty(data.lastname))
        errors.lastname = 'lastname field is required'


    if (!Validator.isLength(data.gender, { min: 4, max: 30 }))
        errors.gender = 'gender must be between 4 to 30 chars'
    if (Validator.isEmpty(data.gender))
        errors.gender = 'gender field is required'


    if (!Validator.isLength(data.region, { min: 4, max: 30 }))
        errors.region = 'region must be between 4 to 30 chars'
    if (Validator.isEmpty(data.region))
        errors.region = 'region field is required'


    if (!Validator.isLength(data.national, { min: 4, max: 30 }))
        errors.national = 'national must be between 4 to 30 chars'
    if (Validator.isEmpty(data.national))
        errors.national = 'national field is required'


    if (!Validator.isLength(data.university, { min: 4, max: 30 }))
        errors.university = 'university must be between 4 to 30 chars'
    if (Validator.isEmpty(data.university))
        errors.university = 'university field is required'


    if (!Validator.isLength(data.major, { min: 4, max: 30 }))
        errors.major = 'major must be between 4 to 30 chars'
    if (Validator.isEmpty(data.major))
        errors.major = 'major field is required'
     
        
    if (!Validator.isLength(data.graduates, { min: 4, max: 30 }))
    errors.graduates = 'graduates must be between 4 to 30 chars'
    if (Validator.isEmpty(data.graduates))
    errors.graduates = 'graduates field is required'
 
    
    if (!Validator.isLength(data.grade, { min: 4, max: 30 }))
        errors.grade = 'grade must be between 4 to 30 chars'
    if (Validator.isEmpty(data.grade))
        errors.grade = 'grade field is required'
     
        
    if (!Validator.isLength(data.militarystatus, { min: 4, max: 30 }))
    errors.militarystatus = 'militarystatus must be between 4 to 30 chars'
    if (Validator.isEmpty(data.militarystatus))
    errors.militarystatus = 'militarystatus field is required'
 
    
    if (!Validator.isLength(data.status, { min: 4, max: 30 }))
        errors.status = 'status must be between 4 to 30 chars'
    if (Validator.isEmpty(data.status))
        errors.status = 'status field is required'
     
    return {
        errors,
        isValid: isEmpty(errors)
    }
}