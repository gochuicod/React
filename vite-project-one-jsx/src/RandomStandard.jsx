import { useState } from "react"
import './Custom.css'

const rngS = () => {
    const [input, setInput] = useState(0)
    const [random, setRandom] = useState(0)

    return(
        <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-center align-items-center">
                <div className="input-group">
                    <span className="btn btn-primary rounded-0 rounded-start" onClick={() => setRandom(handleRandom(input))}>Generate</span>
                    <input className="form-control rounded-0" type="number"
                        onKeyDown={e => e.key === "Enter" ? setRandom(handleRandom(input)) : true}
                        onChange={event => setInput(event.target.value)}
                    />
                    <span className="rounded-0 rounded-end input-group-text">{random}</span>
                </div>
            </div>
        </div>
    )
}

const handleRandom = input => Math.ceil(Math.random() * input)

export default rngS