import React, { useState } from "react";
import Data from "../mesa-data.json"
import "./SearchBar.css"

export const SearchBar = (props) => {
    const [query, setQuery] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState({
        question: "",
        correctChoices: [],
    });

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
                        }).map((q, index) => (
                            <button className="box" key={index} onClick={() => setCurrentQuestion(q)}>
                                <p>{q.question}</p>
                            </button>
                        ))
                    }
                </div>
                <div className="boxItems render">
                    <p>{currentQuestion.question}</p>
                    {
                        currentQuestion.correctChoices.map((choice) => (
                            <div>
                                <h3>- {choice}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
    )

}