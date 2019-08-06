import React, { useState } from 'react'
import axios from 'axios'

const NovoGenero = () => {
    const [name, setName] = useState('')

    const onChange = evt => {
        setName(evt.target.value)
    }

    const Save = () => {
        axios
            .post('/api/genres', {
                name
            })
            .then(res => {
                console.log(res)
            })
    }

    return(
        <div className='container'>
            <h1>Novo Genêro {name}</h1>
        <form>
             <div className='form-group'>
                <label htmlFor='nome'>Nome</label>
                <input type='text' value={name} onChange={onChange} className='form-control' id='name' placeholder='Nome do Genêro'/>               
            </div> 
            <button type='button' onClick={Save} className='btn btn-primary'>Salvar</button>
        </form>
        </div>
    )
}
export default NovoGenero