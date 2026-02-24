import Todo from "../models/Todo";

type TodoItemProps = {
    item: Todo;
};

const TodoItem = (props: TodoItemProps) => {
    console.log(props);
    return <li>{props.item.text}</li>;
};

export default TodoItem;
