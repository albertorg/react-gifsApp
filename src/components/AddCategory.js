import React, {useState} from 'react'
import Proptypes from "prop-types";

export const AddCategory = (props) => {
    
    const [inputValue, setInputValue] = useState('')
    const { setCategories } = props 
    

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setInputValue ( e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats])
            setInputValue('')
        }
    }

  return (
    <form onSubmit={ handleSubmit }>
        <input 
            type='text'
            value={ inputValue } 
            onChange={ handleInputChange }
        />
    </form>
  )
}

AddCategory.propTypes = {
    setCategories: Proptypes.func.isRequired
}