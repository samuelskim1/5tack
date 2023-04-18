

const Avatar = ({ user }) => {


  return (
    <div id="avatar-container">
      {!!user?.avatar && <img src={user?.avatar} />}
      {!user?.avatar && (
        <div>
          {user?.username?.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default Avatar;