export default function CancelButton({children,handleClick}) {
    return (
      <button
        type="button"
        onClick={handleClick}
        className="text-gray-700 bg-white bg-transparent border-2 border-blue-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center"
      >
        {children}
      </button>
    );
}