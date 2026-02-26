const TodoItem = (props: {
    id: string;
    text: string;
    date: Date;
    onDeleteTask: (id: string) => void;
}) => {
    return (
        <li>
            {props.text} - {props.date.toLocaleDateString()}
            <button onClick={() => props.onDeleteTask(props.id)}>delete</button>
        </li>
    );
};

export default TodoItem;
