class Todo {
    id: string;
    text: string;

    constructor(todoItem: string) {
        this.id = crypto.randomUUID()
        this.text = todoItem
    }
}

export default Todo;