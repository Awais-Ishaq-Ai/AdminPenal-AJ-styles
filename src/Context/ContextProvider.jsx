import { createContext, useState } from "react"

export const Context = createContext()

export default function ContextProvider({children}) {
    const [count,setCount] = useState({
      
    })
  return (
    <>
    <Context.Provider value={{count}}>
        {children}
    </Context.Provider>
    </>
  )
}
