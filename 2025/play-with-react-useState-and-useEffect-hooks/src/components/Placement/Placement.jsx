import SingleCart from "../SingleCart/SingleCart"


const Placement = ({placement}) => {
  return (
    <div>
        <h1 className=" text-blue-950 w-1/4 underline underline-offset-4">Cart : {placement.length}</h1>
        {
            placement.map(singlecart => <SingleCart
            key={singlecart.id}
            singlecart={singlecart}
            ></SingleCart>)
        }
    </div>
  )
}

export default Placement