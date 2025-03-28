// src/components/TaskForm.jsx
// You need to write the code for TaskForm component in the TaskForm.jsx file.














































import { useState } from "react";
import axios from "axios";

export default function TaskForm() {
    const [task, setTask] = useState({
        title: "",
        dueDate: "",
        priority: "Medium",
        status: "To Do",
    });

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/create", task);
            alert("Task Created Successfully!");
            console.log(response.data);
            setTask({ title: "", dueDate: "", priority: "Medium", status: "To Do" });
        } catch (error) {
            console.error("Error creating task:", error);
            alert("Failed to create task!");
        }
    };

    return (
        <div>
            <h2>Create Task</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input 
                    type="text" 
                    name="title" 
                    value={task.title} 
                    onChange={handleChange} 
                    required 
                />

                <label>Due Date:</label>
                <input 
                    type="date" 
                    name="dueDate" 
                    value={task.dueDate} 
                    onChange={handleChange} 
                    required 
                />

                <label>Priority:</label>
                <select name="priority" value={task.priority} onChange={handleChange}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <label>Status:</label>
                <select name="status" value={task.status} onChange={handleChange}>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>

                <button type="submit">Create Task</button>
            </form>
        </div>
    );
}
