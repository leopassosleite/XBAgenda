import React from 'react'

function Select({ text, name, options, onChange, value }) {
    return (
        <div>
            <label htmlFor={name}>{text}</label>
            <select
                name={name}
                id={name}
                onChang={onChange}>
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