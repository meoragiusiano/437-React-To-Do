import { useRef } from 'react'

function Modal({ headerLabel, isOpen, onCloseRequested, children }) {
    const dialogRef = useRef(null);

    if (!isOpen) {
        return null;
    }

    function handleOverlayClick(e) {
        if (dialogRef.current && !dialogRef.current.contains(e.target)) {
            onCloseRequested();
        }
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={handleOverlayClick}
        >
            <div
                ref={dialogRef}
                className="bg-white rounded-lg shadow-lg w-full max-w-md p-4"
            >
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold">{headerLabel}</h2>
                    <button
                        onClick={onCloseRequested}
                        aria-label="Close"
                        className="text-gray-500 hover:text-gray-800 text-xl font-bold"
                    >
                        X
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}

export default Modal;
