

const Avatar = ({ user }) => {

  return (
    <div id="avatar-container" onClick={() => window.scrollTo(0, 0)}>
      {user?.profileImageUrl && (
        <img src={user?.profileImageUrl} alt={user?.username} />
      )}
      {!user?.profileImageUrl && (
        <div id="initial-container">
          {user?.username?.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default Avatar;