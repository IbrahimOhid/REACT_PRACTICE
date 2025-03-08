import React, { useState } from "react";

const ConditionStyle = () => {
    const [change, setChange] = useState(false);

    const toggleBtn = ()=>{
        setChange(!change);
    }

    const commonStyle = {
        backgroundColor: change ? 'green': 'red',
        color: change ? 'white': 'yellow',
        borderRadius: change ? '5px': 0,
    }

    const specialText = {
        textDecoration: change ? 'underline' : 'none'
    }

  return (
    <div>
      <button onClick={toggleBtn} className="bg-teal-600 text-white px-3 py-1 rounded-md my-5">
        Make It {change ? 'Normal': 'Special'}
      </button>
      <div className="w-44 mx-auto px-3 py-1" style={commonStyle}>
        This is a {change ? <span style={specialText}>Special</span>: 'Normal'} Text
      </div>
    </div>
  );
};

export default ConditionStyle;
