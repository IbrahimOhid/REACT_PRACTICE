

function fakeData({fakeData}) {
    const {name, email, phone, address} = fakeData;
    return (
        <div className="border-2 border-blue-700 w-80 text-center m-3 rounded-lg py-5">
            <h1>Name:{name}</h1>
            <h2>Email:{email}</h2>
            <h3>Phone: {phone} </h3>
            <h5>Address: {address}</h5>
        </div>
    )
}
export default fakeData