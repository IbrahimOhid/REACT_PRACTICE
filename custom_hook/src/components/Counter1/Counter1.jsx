import useHooks from "../../Hooks/useHooks"

function Counter1() {
    const [count, increment, decrement] = useHooks(5);
  return (
    <div className="text-center mt-48">
        <h1 className="text-5xl mb-8 -ml-12">{count}</h1>
        <button onClick={increment} className='bg-green-500 text-white font-semibold px-5 py-1 rounded-md mr-10'>Increment</button>
        <button onClick={decrement} className='bg-red-500 text-white font-semibold px-5 py-1 rounded-md mr-10'>Increment</button>
    </div>
    
  )
}

export default Counter1