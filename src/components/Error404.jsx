import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="error404">
      <h1>
        I'm not sure how you got here, how about heading back to the homepage!
      </h1>
      <button onClick={handleClick}>Back Home</button>
    </div>
  );
};

export default Error404;
