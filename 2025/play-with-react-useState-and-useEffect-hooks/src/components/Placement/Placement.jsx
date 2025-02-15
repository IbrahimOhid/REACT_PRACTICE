import SingleProduct from "../SingleProduct/SingleProduct"


const Placement = ({addProduct}) => {
  return (
    <div className='w-1/4'>
        <h1 className='text-2xl'>Placement</h1>
        {
            addProduct.map(singleProduct => <SingleProduct key={singleProduct.id} singleProduct={singleProduct}></SingleProduct>)
        }
    </div>
  )
}

export default Placement