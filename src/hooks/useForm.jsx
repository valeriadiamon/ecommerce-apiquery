import { useEffect, useState } from 'react'

function useForm(callback, defaults){
    const [input, setInput] = useState(defaults)

    useEffect(() =>{
        setInput({...defaults})
    }, [])

    const handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        console.log(input)

        setInput({...input, [name]:value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        callback(input)
    }

    return {
        input, 
        handleInputChange,
        handleSubmit
    }
}

//export { useForm } para importar como import {useForm}
export default useForm //se importa solo como import useForm