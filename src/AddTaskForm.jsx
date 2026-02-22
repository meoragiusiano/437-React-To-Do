import { useState } from 'react'

function AddTaskForm({ onNewTask }) {
    const [taskName, setTaskName] = useState("");

    function handleButtonClicked() {
        onNewTask(taskName);
        setTaskName("");
    }

    return (
        <div className="flex gap-3 items-center">
            <input
                placeholder="New task name"
                aria-label="New task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 text-base focus:outline-none focus:border-blue-500"
            />
            <button
                onClick={handleButtonClicked}
                className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 active:bg-blue-700"
            >
                Add task
            </button>
        </div>
    );
}

export default AddTaskForm;