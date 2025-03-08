import { useState } from "react";
import "./App.css";
import ConditionStyle from "./components/ConditionStyle/ConditionStyle";

function App() {
  const [changeBg, setChangeBg] = useState(false);

  const darkLightBtn = () => {
    setChangeBg(!changeBg);
  };

  const DarkBg = {
    backgroundColor: changeBg ? 'black' : 'white'
  }

  return (
    <div style={DarkBg}  className="text-center py-32">
      <button onClick={darkLightBtn}  className="border-2 border-green-300 px-3 py-1 rounded-lg">
        {changeBg ? <span className="text-yellow-300">Light</span> : <span>Dark</span>}
      </button>
      <ConditionStyle />
    </div>
  );
}

export default App;
