import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/Todo";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const items = [
        new Todo("Get my dream job at Radio-Canda"),
        new Todo("I understand and writes Typescript fundamentals"),
    ];

    console.log(items);

    return (
        <>
            <div></div>
            <h1>Todo app with typeScript</h1>
            <Todos items={items}></Todos>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    );
}

export default App;
