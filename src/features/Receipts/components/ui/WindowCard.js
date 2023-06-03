function Card({ children }) {
  return (
    <div className="bg-white mx-2 border-x-2 border-b-4 border-gray-300 border-b-blue-300 rounded-lg flex flex-col  justify-center gap-4 pb-4">
      {children}
    </div>
  );
}

export default Card;
