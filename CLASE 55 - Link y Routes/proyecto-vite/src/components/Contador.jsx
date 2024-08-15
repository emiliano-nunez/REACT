import { useRef, useState } from "react"

const Contador = () => {
    const [count, setCount] = useState(0)

    const handleChange = (e) => {
        const newValue = Number(e.target.value)
        setCount(newValue)
    }

    const sumar = () => {
        setCount(count + 1)
    }
    const restar = () => {
        setCount(count - 1)
    }

    const inputRef = useRef()
    if (inputRef.current) {
        console.log(inputRef.current.value)
        inputRef.current.focus()
    }

    return (
        <div>
            <button onClick={restar}>Restar</button>
            <input ref={inputRef} type="text" onChange={handleChange} value={count}/>
            <button onClick={sumar}>Sumar</button>
        </div>
    )
}

export default Contador