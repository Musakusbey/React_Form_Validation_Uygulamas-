import * as yup from 'yup'; //import react from react gibi.

export const userValidation = yup.object().shape({
    name: yup.string().required(), //text için yup yazdık.
    email: yup.string().email().required(), //email için yup yazdık.
    password: yup.string().min(3).max(8).required() //password için yup yazdık. //password 3 ile 8 arasında bir rakam olacaktır.
})


