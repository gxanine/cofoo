import {useNavigate} from "react-router-dom";
import Button from "./ui/Button";

function Checkout() {

  const navigate = useNavigate();

  function goBackHandler() {
    // If previous was home, simply go back
    // to keep the history clean
    if (location.state?.from === "/")
      return navigate(-1);

    navigate("/", { replace: true });
  };

  return (
    <div>
      <div>
        <Button small neutral onClick={goBackHandler}>
          ← Back to menu
        </Button>
      </div>
    </div>
  )
}

export default Checkout;
