export function TaskList({ tasks, deleteTask, toggleTaskStatus }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <h3
                        style={{
                            textDecoration: task.status === 'completed' ? 'line-through' : 'none'
                        }} >
                        {task.title}
                    </h3>
                    <p>Опис: {task.description}</p>
                    <p>Статус: {task.status}</p>
                    <p>{task.createdAt}</p>
                    <button onClick={() => toggleTaskStatus(task.id)}>
                        Завершити завдання
                    </button>
                    <button onClick={() => deleteTask(task.id)}>Видалити завдання</button>
                </li>
            ))}
        </ul>
    );
}