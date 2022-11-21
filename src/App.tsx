import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Home />
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default App;
