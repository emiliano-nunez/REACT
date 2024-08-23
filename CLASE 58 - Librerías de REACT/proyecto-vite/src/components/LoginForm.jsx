import React, { useContext, useState } from 'react'
import { authContext } from '../context/AuthProvider'
import { TextField } from '@mui/material'

function LoginForm() {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { nuevoUsuario } = useContext(authContext)

    const handleUser = (e) => {
        const input = e.target.value
        if (input.length < 3) {
            setError('El usuario debe tener al menos 3 caracteres')
        } else {
            setError('')
        }
        setUser(input)
    }

    const handlePassword = (e) => {
        const input = e.target.value
        setPassword(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validación de usuario
        if (user.length < 3) {
            setError('El usuario debe tener al menos 3 caracteres')
            return
        } else {
            setError('')
        }

        // Validación de usuario
        if (user !== 'emi') {
            setError('El usuario es incorrecto')
            return
        } else {
            setError('')
        }

        // Validación de password
        if (password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres')
            return
        } else {
            setError('')
        }

        // Validación de password con REGEX (investigar)
        // const regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/
        // if (regexp_password.match(password)) {
        //     setError('Minimo 8 caracteres, una mayúscula, una minuscula, un numero y un caracter especial')
        //     return
        // } else {
        //     setError('')
        // }

        nuevoUsuario(user)
        //Reinicio el formulario
        // nativo de HTML
        //e.target.reset()
        //con react
        setUser('')
        setPassword('')
    }

    return (
        <form>
            {/* <label htmlFor="user">Usuario</label>
            <input id="user" type="text" onChange={handleUser}/> */}
            <TextField className='input' id="outlined-basic" label="Usuario" variant="outlined" type="text" onChange={handleUser} />
            {/* <label htmlFor="password">Contraseña</label>
            <input id='password' type="password" onChange={handlePassword}/> */}
            <TextField className='input' id="outlined-basic" label="Contraseña" variant="outlined" type="password" onChange={handlePassword} />
            <span className='error'>{error}</span>
            <button onClick={handleSubmit}>Ingresar</button>
        </form>
    )
}

export default LoginForm
