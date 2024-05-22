import SingleCart from "../SingleCart/SingleCart"

function Placement({cart}) {
    return (
        <div>
        <h1 className="text-3xl mb-3">Placement</h1>
        <div className="grid grid-cols-2 gap-3">
        {
            cart.map(singleCart => <SingleCart key={singleCart.id} singleCart={singleCart}></SingleCart>)
        }
        </div>
        </div>
    )
}
export default Placement