import TodoItem from "./ToDoItem";
import todos from "./todos.json";
const ToDoList = () => {
    return(
        <ul>
            {
                todos.map(todo => {
                    return(<TodoItem todo={todo}/>);
                })
            }
        </ul>
    );
}
export default ToDoList;
