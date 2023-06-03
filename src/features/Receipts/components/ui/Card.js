function Card({ children }) {
  return (
    <div className="bg-white border-b-4 border-blue-300 rounded-lg flex flex-col  justify-center ">
      {children}
    </div>
  );
}

export default Card;
