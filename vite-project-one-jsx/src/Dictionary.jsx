import { useState } from "react"
import './Custom.css'

const Dictionary = () => {
    let [data,setData] = useState([])

    const handleSynonymsAntonyms = array => array.map(item => <div className="text-start text-center px-1 ms-1 rounded-pill border" key={Math.random()}>{item}</div>)
    const fetchData = async (word) => {
        const res =  await (await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)).json()
        let meanings = []
        if(!res.title){
            res.map(item => {
                item.meanings.map(item => {
                    meanings.push(<i className="d-flex mt-3" key={Math.random()}>{item.partOfSpeech}</i>)
                    item.definitions.map((item,index) => {
                        meanings.push(<span className="d-flex" key={Math.random()}>{index+1}. {item.definition}</span>)
                        if(item.example) meanings.push(<span className="d-flex text-secondary ms-3" key={Math.random()}>"{item.example}"</span>)
                    })
                    if(item.synonyms.length != 0) {
                        meanings.push(<div className="d-flex align-items-center overflow-auto" key={Math.random()}><i className="text-success text-start" key={Math.random()}>Similar:</i>{handleSynonymsAntonyms(item.synonyms)}</div>)
                    }
                    if(item.antonyms.length != 0) {
                        meanings.push(<div className="d-flex mt-1" key={Math.random()}><i className="text-danger" key={Math.random()}>Opposite:</i>{handleSynonymsAntonyms(item.antonyms)}</div>)
                    }
                })
            })
        } else meanings.push(<div className="text-center text-danger mt-3" key={Math.random()}>{res.title}</div>)
        setData([meanings])
    }

    return(
        <div className="d-flex flex-column mt-5">
            <div className="d-flex flex-row justify-content-center">
                <span className="fw-light fs-8"><span className="fw-bolder">Dictionary</span> data sourced from <span className="fst-italic">Free Dictionary API</span></span>
            </div>
            <div className="d-flex flex-row justify-content-center">
                <div className="input-group">
                    <input className="form-control border custom-form rounded-0 rounded-start" type="text"
                        onKeyDown={event => event.key === "Enter" ? fetchData(event.target.value) : true}
                    />
                    <button className="btn border hide-glow bg-white rounded-custom" type="button"><i className="bi bi-search"></i></button>
                </div>
            </div>
            <div className="d-flex flex-column fs-7">
                {data}
            </div>
        </div>
    )
}

export default Dictionary