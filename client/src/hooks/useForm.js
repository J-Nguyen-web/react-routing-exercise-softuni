import { useState } from "react";

export default function useForm(callback, initialValues) {
    const [ values, setValues] = useState(initialValues)
    const changeHandler =  (event) => {
        setValues(state => ({
            ...state,
            [event.target.name]: event.target.value // не работи за checkbox
        }))
    };

    return (
        values,
        changeHandler
    );
}