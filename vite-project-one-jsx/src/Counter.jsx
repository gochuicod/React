import { useState } from 'react'
import './Custom.css'

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <span className='bg-warning pointer unselectable text-light p-2 rounded-0 rounded-start' onClick={() => setCount(0)}>
                <i className='bi bi-arrow-counterclockwise'></i>
            </span>
            <span className='bg-dark text-light p-2 rounded-0'>Count: {count}</span>
            <span className='bg-danger pointer unselectable text-light p-2 rounded-0' onClick={() => setCount(count - 1)}>
                <i className='bi bi-dash-circle'></i>
            </span>
            <span className='bg-primary pointer unselectable text-light p-2 rounded-0 rounded-end' onClick={() => setCount(count + 1)}>
                <i className="bi bi-plus-circle"></i>
            </span>
        </div>
    )
}

export default Counter