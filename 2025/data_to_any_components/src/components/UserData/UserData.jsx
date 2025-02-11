

const UserData = ({ singleData }) => {
  const { name, username, email } = singleData;
  return (
    <div>
      <h4>{name}</h4>
      <h5>{username}</h5>
      <p>{email}</p>
    </div>
  );
};

export default UserData;
