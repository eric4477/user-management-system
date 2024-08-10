import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found-page h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl text-center">404 Not Found</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 
      rounded focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
        onClick={() => navigate("/dashboard")}
      >
        Go Back
      </button>
    </div>
  );
}

export default NotFound;
