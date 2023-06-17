import React, {useState} from "react";
import {v4 as uuid} from "uuid";

export function TaskForm({ addTask }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = uuid();

        const newTask = {
            id,
            title,
            description,
            status: 'completed',
            createdAt: new Date().toLocaleString(),
        };

        addTask(newTask);

        setTitle('');
        setDescription('');
    };
    return(
        <form onSubmit={handleSubmit}>
            <h1>Мої завдання</h1>
            <input
                type="text"
                placeholder="Заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)} required/>
            <p><textarea
                placeholder="Опис"
                value={description}
                onChange={(e) => setDescription(e.target.value)} required>

            </textarea></p>
            <button type="submit">Додати завдання</button>
        </form>
    );
}