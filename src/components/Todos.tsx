// import React from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

type TodosProps = {
    items?: Todo[];
};

const Todos = (props: TodosProps) => {
    return (
        <ul style={{ textAlign: "left" }}>
            {props.items?.map((item) => (
                <TodoItem key={item.id} text={item.text}></TodoItem>
            ))}
        </ul>
    );
};

export default Todos;
