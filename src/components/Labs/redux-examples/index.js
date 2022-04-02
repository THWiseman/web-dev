import React from "react";
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import {Provider} from "react-redux";
import {createStore, combineReducers}
    from "redux";
import Todos from "../ToDo/todos-component";
const reducers =
    combineReducers({hello, todos})

const store = createStore(reducers);

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                {/*<HelloReduxExampleComponent/>*/}
            </div>
        </Provider>
    );
};
export default ReduxExamples;