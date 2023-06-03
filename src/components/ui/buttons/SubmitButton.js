
export default function SubmitButton({children,handleClick}){

    return (
      <button
        type="button"
        onClick={handleClick}
        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center"
      >
        {children}
      </button>
    );

}