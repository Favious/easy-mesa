import React, { useState } from "react";
import Data from "../mesa-data.json"
import "./SearchBar.css"

export const SearchBar = (props) => {
    const [query, setQuery] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState({
        question: "...",
        correctChoices: [],
    });
    let limit = 3;

    return (
            <div className="clearfix">
                <div className="boxItems">
                    <div className="search">
                        <input className="searchTerm" placeholder="Ingrese su pregunta" onChange={event => setQuery(event.target.value)} />
                    </div>
                    {
                        Data.filter(q => {
                            if (query === '') {
                                return q;
                            } else if (q.question.toLowerCase().includes(query.toLowerCase())) {
                                return q;
                            }
                            return null;
                        }).map((q, index) => (
                            (index <= limit ? <button className="box" key={index} onClick={() => setCurrentQuestion(q)}>
                                <p>{q.question}</p>
                            </button> : <></>)
                        ))
                    }
                </div>
                <div className="boxItems render">
                    <h3>{currentQuestion.question}</h3>
                    {
                        currentQuestion.correctChoices.map((choice) => (
                            <div>
                                <p><i className="fa fa-check-square-o" style={{color: "#369f36"}}></i> {choice}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
    )

}