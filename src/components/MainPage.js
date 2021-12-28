import React from "react";
import './MainPage.css'
import {SearchBar} from "./SearchBar";

export const MainPage = (props) => {
    return(<div className="mr-robot">
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
        <div className="evilcorp">
            <div className="fsociety-mask"></div>
            <div className="title">EASY_MESA</div>
        </div>
        <SearchBar />
    </div>);
}