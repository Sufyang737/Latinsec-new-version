"use client"

import { useContext } from "react"
import styles from "./styles.module.sass"

interface InputProps{
    type?: "text" | "password",
    name: string,
    label: string, 
    placeholder?: string
}

export function Input({label, placeholder, type, name}: InputProps){

    const { formValues, setFormValues } = useContext(FormContext)!

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setFormValues(preValues => ({
            ...preValues,
            [name]: value
        }))    
    }
    return(
        <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor={name} >{label}</label>
            <input type={type} id={name} name={name} value={formValues[name] || ''} onChange={handleChange} placeholder={placeholder}/>
         </div>
    )
}