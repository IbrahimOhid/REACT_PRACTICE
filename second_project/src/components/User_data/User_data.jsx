
import './User_data.css'

function User_data({singleData}) {
    const {name, email, phone, website} = singleData;
    return (
        <div className='component'>
        <h1>Name: {name} </h1>
        <h3>Email: {email}</h3>
        <h5>Phone: {phone}</h5>
        <h6>Website: {website}</h6>
        </div>
    )
}
export default User_data