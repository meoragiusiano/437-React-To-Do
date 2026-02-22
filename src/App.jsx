import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import TodoItem from './TodoItem'
import AddTaskForm from './AddTaskForm'
import Modal from './Modal'

const INITIAL_TASK_LIST = [
    { id: "todo-0", name: "Eat", isComplete: true },
    { id: "todo-1", name: "Sleep", isComplete: false },
    { id: "todo-2", name: "Repeat", isComplete: false }
];

function App() {
    const [taskList, setTaskList] = useState(INITIAL_TASK_LIST);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function addTask(name) {
        const newTask = { id: nanoid(), name: name, isComplete: false };
        const taskListClone = [...taskList, newTask];
        setTaskList(taskListClone);
        setIsModalOpen(false);
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
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 active:bg-blue-700"
            >
                New Task
            </button>

            <Modal
                headerLabel="Add Task"
                isOpen={isModalOpen}
                onCloseRequested={() => setIsModalOpen(false)}
            >
                <AddTaskForm onNewTask={addTask} />
            </Modal>

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