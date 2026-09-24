export default function Container({ children, className }) {
    return (
        <div className={`mx-auto w-full max-w-7xl px-1 md:px-4 lg:px-8 ${className}`}>
            {children}
        </div>
    );
}