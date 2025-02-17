import SingleCart from "../SingleCart/SingleCart"


const AddedCart = ({cart}) => {
    
  return (
    <div className='w-1/4'>
        <h1 className="text-2xl">Added Cart: {cart.length}</h1>
        {
            cart.map(singleCart => <SingleCart
            key={singleCart.id}
            singleCart={singleCart}
            ></SingleCart>)
        }
    </div>
  )
}

export default AddedCart