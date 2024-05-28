import { useLoaderData } from "react-router-dom"
import SingleProduct from "../SingleProduct/SingleProduct";


function Product() {
    const product = useLoaderData();
  return (
    <div className="grid grid-cols-3 gap-3 px-5">
        {
            product.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
        }
    </div>
  )
}

export default Product