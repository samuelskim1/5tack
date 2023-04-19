

const Avatar = ({ user }) => {

  return (
    <div id="avatar-container">
      {!!user?.profileImageUrl && <img src={user?.profileImageUrl} alt={user?.username} />}
      {!user?.profileImageUrl && (
        <div>
          {user?.username?.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default Avatar;