class Todo {
    id: string;
    text: string;
    date: Date

    constructor(todoItem: string, dateItem: Date) {
        this.id = crypto.randomUUID()
        this.text = todoItem
        this.date = dateItem
    }
}

export default Todo;