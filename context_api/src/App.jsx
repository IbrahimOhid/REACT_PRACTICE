import { Context1 } from "./component/Context/Context1";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Context1 >
    <div className="m-80">
    <Navbar></Navbar>
    <button className="bg-red-500 mt-5 text-white rounded-md px-3 py-2">
      Name One -{" "}
    </button>
  </div>
    </Context1>
  );
}

export default App;
