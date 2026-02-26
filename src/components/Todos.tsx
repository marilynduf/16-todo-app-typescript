// import React from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import NewTodo from "./NewTodo";

const Todos = (props: {
    items: Todo[];
    onSubmitTask: (text: string) => void;
}) => {
    return (
        <>
            <NewTodo onSubmitTask={props.onSubmitTask}></NewTodo>
            <ul style={{ textAlign: "left" }}>
                {props.items?.map((item) => (
                    <TodoItem key={item.id} text={item.text} date={item.date} />
                ))}
            </ul>
        </>
    );
};

export default Todos;
