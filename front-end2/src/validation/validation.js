const validation = (values) => {
    let errors = {};

    if(!values.username) {
        errors.username='A name is required'
    } else if (values.username.length < 3) {
        errors.username='Name must be at least 3 characters long'
    }

    if(!values.password) {
        errors.password='Password is required'
    } else if(values.password.length < 5) {
        errors.password='Password must be at least 7 characters long'
    }

    return errors;
}

export default validation