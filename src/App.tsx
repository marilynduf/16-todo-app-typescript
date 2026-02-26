import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/Todo";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const todos = [
        new Todo("Get my dream job at Radio-Canda", new Date()),
        new Todo("I understand and write Typescript fundamentals", new Date()),
    ];

    return (
        <>
            <h1>Todo app with typeScript</h1>
            <Todos items={todos}></Todos>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    );
}

export default App;
