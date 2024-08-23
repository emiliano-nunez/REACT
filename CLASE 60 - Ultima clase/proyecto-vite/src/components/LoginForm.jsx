import React, { useContext, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { authContext } from '../context/AuthProvider'
import { errorContext } from '../context/ErrorContext'

function LoginForm() {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const { nuevoUsuario } = useContext(authContext)
    const {showError} = useContext(errorContext)

    const handleUser = (e) => {
        const input = e.target.value
        setUser(input)
    }

    const handlePassword = (e) => {
        const input = e.target.value
        setPassword(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            // Validación de usuario
            if (user.length < 3) {
                throw new Error('El usuario debe tener al menos 3 caracteres')
            }

            // Validación de usuario
            if (user !== 'emi') {
                throw new Error('El usuario es incorrecto')
            }

            // Validación de password
            if (password.length < 6) {
                throw new Error('La contraseña debe tener al menos 6 caracteres')
            }
            nuevoUsuario(user)

            // Reiniciar los campos
            // No sé por que NO se reinician los campos
            setUser('')
            setPassword('')
        } catch (error) {
            showError(error.message)
        }
    }

    return (
        <form>
            <TextField className='input' label="Usuario" variant="outlined" type="text" onChange={handleUser} />
            <TextField className='input' label="Contraseña" variant="outlined" type="password" onChange={handlePassword} />
            <Button type='submit' onClick={handleSubmit}>Ingresar</Button>
        </form>
    )
}

export default LoginForm
