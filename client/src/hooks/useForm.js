import { useState } from "react";

export default function useForm(callback, initialValues) {
    const [ values, setValues] = useState(initialValues)
    const changeHandler =  (event) => {
        setValues(state => ({
            ...state,
            [event.target.name]: event.target.value // не работи за checkbox
        }))
    };

    const formAction = async (formData) => { // закачено е на submit form-ата   
        await callback(values, formData)
    }

    return (
        values,
        changeHandler,
        formAction
    );
}