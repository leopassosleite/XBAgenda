import React from 'react'

function Select({ name, options, handleOnChange, value }) {
    return (
        <div>
            <label htmlFor={name}></label>
            <select name={name} id={name}>
                <option>Selecione o prazo</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select