import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import TodoItem from './TodoItem'
import AddTaskForm from './AddTaskForm'

const INITIAL_TASK_LIST = [
    { id: "todo-0", name: "Eat", isComplete: true },
    { id: "todo-1", name: "Sleep", isComplete: false },
    { id: "todo-2", name: "Repeat", isComplete: false }
];

function App() {
    const [taskList, setTaskList] = useState(INITIAL_TASK_LIST);

    function addTask(name) {
        const newTask = { id: nanoid(), name: name, isComplete: false };
        const taskListClone = [...taskList, newTask];
        setTaskList(taskListClone);
    }

    function toggleTaskCompleted(id) {
        const updatedTasks = taskList.map((task) => {
            if (id === task.id) {
                return { ...task, isComplete: !task.isComplete };
            } else {
                return task;
            }
        });
        setTaskList(updatedTasks);
    }

    function deleteTask(id) {
        const remainingTasks = taskList.filter((task) => id !== task.id);
        setTaskList(remainingTasks);
    }

    return (
        <main className="m-4">
            <AddTaskForm onNewTask={addTask} />

            <section className="mt-6">
                <h1 className="text-xl font-bold">To do</h1>
                <ul className="mt-2">
                    {taskList.map((task) => (
                        <TodoItem
                            key={task.id}
                            id={task.id}
                            name={task.name}
                            isComplete={task.isComplete}
                            onToggle={toggleTaskCompleted}
                            onDelete={deleteTask}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default App;