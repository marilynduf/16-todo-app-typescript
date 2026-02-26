const TodoItem = ({ text, date }: { text: string; date: Date }) => {
    return (
        <li>
            {text} - {date.toLocaleDateString()}
        </li>
    );
};

export default TodoItem;
