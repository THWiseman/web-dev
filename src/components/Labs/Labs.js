import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ToDoListEx from "./ToDo"
import ConditionalOutput from "./ConditionalOutput";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <ConditionalOutput/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/Tuiter/Home">
                Tuiter
            </Link>
            <Link to="/ToDo">
                <ToDoListEx/>
            </Link>
        </>
    )
};
export default Labs;
