import * as yup from 'yup';


const schema = yup.object().shape({
    // hostName: yup
    //     .string()
    //     .required('Host name is required'),

    // guestPassword: yup
    //     .string()
    //     .required('Password provided by host is required'),
        
    // organizerName: yup
    //     .string()
    //     .trim()
    //     .required('Name is required'),

    // organizerEmail: yup
    //     .string()
    //     .email('Must be a valid email')
    //     .required('Email is required'),

    // organizerPhone: yup
    //     .string()
    //     // .matches(/^[0-9]+$/, "Must be numbers")
    //     .min(10, 'Phone number must be exactly 10 digits')
    //     .max(10, 'Phone number must be exactly 10 digits')
    //     .required('Phone number is required'),

    // accessPassword: yup
    //     .string()
    //     .min(5, 'Password must be at least 5 characters')
    //     .required('Password is required'),

    // potluckName: yup
    //     .string()
    //     .trim()
    //     .required('Potluck name is required'),

    // potluckDate: yup
    //     .date()
    //     .required('Potluck date is required'),

    // potluckTime: yup
    //     .string()
    //     .required('Potluck time is required'),

    // potluckLocation: yup
    //     .string()
    //     .required('Potluck location is required'),

    attending: yup
        .string()
        .oneOf(['yes', 'no'], 'Select "Yes" to attend'),

    guestName: yup
        .string()
        .trim()
        .required('Name is required'),

    guestEmail: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),

    guestPhone: yup
        .string()
        .matches(/^[0-9]+$/, "Must be numbers")
        .min(10, 'Phone number must be exactly 10 digits')
        .max(10, 'Phone number must be exactly 10 digits')
        .required('Phone number is required'),

    category: yup
        .string()
        .required('Category is required'),
        
    bring: yup
        .string()
        .trim()
        .min(2, 'Item name must be at least 2 characters')
        .required('Potluck item is required'),

})

export default schema;