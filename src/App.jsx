import { Link } from "react-router-dom";
import Button from "./components/Elements/Button";
import(Link);
function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <Link to="/products" className="px-3">
        <Button> Product</Button>
      </Link>
      <Link to="/login">
        <Button> Login</Button>
      </Link>
    </div>
  );
}

export default App;
