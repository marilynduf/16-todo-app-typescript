import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/Todo";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState<Todo[]>([]);

    const createTodo = (text: string) => {
        const newTodo = new Todo(text, new Date());
        setTodos((prevTodos: Todo[]) => {
            return [...prevTodos, newTodo];
        });
    };

    const deleteTodo = (id: string) => {
        setTodos((prevTodos: Todo[]) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    return (
        <>
            <h1>Todo app with typeScript</h1>
            <Todos
                onDeleteTask={deleteTodo}
                onSubmitTask={createTodo}
                items={todos}
            ></Todos>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    );
}

export default App;
