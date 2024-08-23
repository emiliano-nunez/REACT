import { Box, Modal, Typography } from '@mui/material'
import React, { createContext, useState } from 'react'

export const errorContext = createContext()

const ErrorContext = ({children}) => {
    const [error, setError] = useState('')
    const [handleOpen, setHandleOpen] = useState(false)

    const showError = (message) => {
        setHandleOpen(true)
        setError(message)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        boxShadow: 6,
        p: 3,
    }

    return (
        <errorContext.Provider value={{ showError }}>
            {children}
            <Modal
                open={handleOpen}
                onClose={() => setHandleOpen(false)}
                aria-labelledby="modal-modal-title"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {error}
                    </Typography>
                </Box>
            </Modal>
        </errorContext.Provider>
    )
}

export default ErrorContext
