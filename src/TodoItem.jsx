import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoItem({ name, isComplete }) {
    return (
        <li className="flex items-center gap-3 py-2">
            <label className="flex items-center gap-2 text-lg font-medium">
                <input
                    type="checkbox"
                    checked={isComplete}
                    readOnly
                    className="w-5 h-5 accent-blue-600"
                />
                {name}
            </label>
            <button>
                <FontAwesomeIcon
                    icon={faTrash}
                    className="text-gray-400"
                    title="Delete task"
                />
            </button>
        </li>
    );
}

export default TodoItem;