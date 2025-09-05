import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="text-center mt-3">
      <h2>Woops! Page not found.</h2>
      <Button className="text-center" onClick={handleGoBack}>
        Return
      </Button>
    </div>
  );
};

export default NotFound;
