import { useLoaderData } from "react-router-dom"


function MoreInfo() {
    const moreInfo = useLoaderData();
    const {title, image, price} = moreInfo;
  return (
    <div className="border-2 border-red-600 mx-auto w-48 py-5 px-5 text-center mt-5">
        <img className="w-36 text-center py-2" src={image} alt="" />
        <h1>Title: {title}</h1>
        <h2>Price: {price}</h2>
    </div>
  )
}

export default MoreInfo