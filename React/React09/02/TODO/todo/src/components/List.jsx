import"./List.css";
import TodoItem from "./TodoItem";

const List = (todos) =>{
    
    return (
    <div className="List">
        <h4>Todo List 📄</h4>
        <input placeholder="검색어 입력"/>
        <div className="todos_wrapper">
          {todos.map((todo)=>{
            return
          })}
        </div>
    </div>



    )
}

export default List;