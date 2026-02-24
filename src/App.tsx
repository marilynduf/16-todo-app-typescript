import { useState } from "react";
import Todos from "./components/Todos";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const items = [
        "Get my dream job at Radio-Canda",
        "I understand and can writes Typescript fundamentals ",
    ];

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
