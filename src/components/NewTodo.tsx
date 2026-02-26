import { useRef } from "react";

const NewTodo = (props: { onSubmitTask: (text: string) => void }) => {
    const taskRef = useRef<HTMLInputElement>(null);

    const handleOnSubmit = (event: React.SubmitEvent) => {
        event.preventDefault();

        const enteredTask = taskRef.current!.value;
        if (enteredTask?.trim().length === 0) {
            return;
        }
        console.log("Sending data...");

        props.onSubmitTask(enteredTask);
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="task">Add a task</label>
            <input id="task" name="task" type="text" ref={taskRef} />
            <button>Add</button>
        </form>
    );
};

export default NewTodo;
