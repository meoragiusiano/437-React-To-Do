function AddTaskForm() {
    return (
        <div className="flex gap-3 items-center">
            <input
                placeholder="New task name"
                aria-label="New task name"
                className="border border-gray-300 rounded px-3 py-2 text-base focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 active:bg-blue-700">
                Add task
            </button>
        </div>
    );
}

export default AddTaskForm;