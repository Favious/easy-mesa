import React from "react";
import './MainPage.css'
import {SearchBar} from "./SearchBar";

export const MainPage = (props) => {
    return(<div className="mr-robot">
        <div className="evilcorp">
            <div className="fsociety-mask"></div>
            <div className="title">EASY_MESA</div>
            <SearchBar />
        </div>
    </div>);
}