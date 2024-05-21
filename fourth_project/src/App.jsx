import Placement from "./components/Placement/Placement"
import Products from "./components/Products/Products"


function App() {

  return (
    <div className="flex gap-11 px-5 py-5">
      <Products/>
      <Placement/>
    </div>
  )
}

export default App
