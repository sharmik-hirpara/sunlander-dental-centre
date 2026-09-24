export default function Button({ children, onClick, className }) {
    return (
        <button
            onClick={onClick}
            className={`font-medium text-lg px-4 lg:px-5 py-2 lg:py-2.5 mx-2 ${className}`}
        >
            {children}
        </button>
    );
}