import { createContext, useState } from "react";


export const NameContext = createContext();


export function Context1({children}) {
    const [name, setName] = useState('Mohammad');
  return (
    <NameContext.Provider value={[name, setName]}>
    {children}
    </NameContext.Provider>
  )
}
